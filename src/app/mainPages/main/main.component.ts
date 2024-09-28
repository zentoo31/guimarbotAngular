import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  planes: string[] = ['Mensual', 'Bimestral', 'Trimestral', 'Anual'];

  faq: string[] = [
    '¿Qué es GuimarBot?',
    'Soporte',
    'Visión y Misión',
    'Lenguajes utilizados',
  ];
  preventReload(event: Event) {
    event.preventDefault();
    const target = (event.target as HTMLAnchorElement).getAttribute('href') ?? "#inicio";
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
}
