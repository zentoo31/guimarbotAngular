import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';
import { User } from '../../models/user';
import { DOCUMENT } from '@angular/common';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CourseDetails } from './plan.interfaces';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  user: User | undefined;
  plan: CourseDetails | undefined;
  userService: UserService = inject(UserService);
  http: HttpClient = inject(HttpClient);

  ngOnInit() {
    this.loadUser();

    this.getPlanInfo();
  }

  async getPlan(): Promise<CourseDetails> {
    const responsive = await firstValueFrom(
      this.http.get<CourseDetails>(`assets/planes.json`)
    );
    return responsive;
  }

  getPlanInfo() {
    this.getPlan().then((response) => {
      this.plan = response;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY;
    const element = document.getElementById('inicio');
    if (element) {
      element.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.title = 'GuimarBot | Inicio';
  }

  loadUser() {
    this.userService
      .getUser()
      .then((response) => {
        this.user = response;
      })
      .catch((error) => {
        if (error.status === 401) {
          this.user = undefined;
        }
      });
  }

  preventReload(event: Event) {
    event.preventDefault();
    const target =
      (event.target as HTMLAnchorElement).getAttribute('href') ?? '#inicio';
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isLevitating = true;

  toggleAnimation() {
    this.isLevitating = !this.isLevitating;
  }

  faq: string[] = [
    '¿Qué es GuimarBot?',
    'Soporte',
    'Visión y Misión',
    'Lenguajes utilizados',
  ];

  faq2: string[] = [
    '<strong>GuimarBot</strong> es una empresa educativa comprometida con el aprendizaje tecnológico, fundada por Jorge Luis Cordova Lopez. Creemos que la programación es una habilidad esencial en el mundo moderno y nuestra meta es facilitar su aprendizaje para todos. Ofrecemos cursos diseñados para niños, adolescentes y adultos, adaptándonos a las necesidades y ritmos de cada estudiante.',
    '<strong>¿Necesitas ayuda?</strong>, contacta por estos medios: <br> Correo electrónico: jorge.l.corda.lopez@gmail.com <br> Whatsapp: 921297778 / 923984845 <br> Contacto: Ing. Jorge Córdova',
    '<strong>Visión:</strong> Ser un líder en la enseñanza de programación, fomentando el desarrollo de habilidades tecnológicas y creativas en personas de todas las edades para construir una sociedad más innovadora y digitalmente competente. <br> <br> <strong>Misión:</strong> Democratizar la educación en programación al proporcionar herramientas y recursos accesibles y de calidad, creando un entorno inclusivo que prepare a los estudiantes para los desafíos del futuro digital.',
    '- JavaScript <br> - Python <br> - Scratch <br> - C',
  ];

  selectedAccordion: number | null = null;

  animateFadeIn: boolean = false;
  isFinished: boolean = false;

  toggleAccordion(index: number) {
    this.selectedAccordion = this.selectedAccordion === index ? null : index;
  }
}
