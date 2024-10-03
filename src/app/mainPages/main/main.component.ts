import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plan } from './plan.interfaces';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';
import { User } from '../../models/user';
import { SpinnerComponent } from '../../ui-components/spinner/spinner.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, SpinnerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  user: User | undefined;
  isLoading: boolean = true;
  userService: UserService = inject(UserService);

  ngOnInit() {
    this.loadUser();
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
      })
      .finally(() => {
        this.isLoading = false;
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

  title_demo: string[] = [
    '¿Qué es JavaScript?',
    'Tipos de datos',
    'console.log()',
  ];

  description_demo: string[] = [
    'JavaScript es uno de los lenguajes más populares y versátiles, nacido en 1995 para dar interactividad a páginas web, pero hoy se usa para casi cualquier cosa, desde desarrollo web hasta inteligencia artificial. Es el único lenguaje que los navegadores entienden de forma nativa, tiene una curva de aprendizaje rápida y es muy demandado en el mercado laboral debido a sus múltiples aplicaciones.',
    'En JavaScript, los tipos de datos fundamentales incluyen Number, que representa cualquier número, ya sea entero o decimal; String, que se utiliza para texto y se coloca entre comillas; Boolean, que solo puede ser verdadero (true) o falso (false); Null, que indica la ausencia de valor; Undefined, que señala que una variable ha sido declarada pero no tiene valor asignado; Symbol, un tipo especial para crear identificadores únicos; y BigInt, que permite manejar números muy grandes. Estos tipos son esenciales para gestionar información en la programación.',
    'La función console.log() en JavaScript se utiliza para imprimir mensajes en la consola del navegador o del editor de código, siendo muy útil para depurar y verificar el valor de variables durante el desarrollo. Para usarla, simplemente se escribe console.log() seguido del mensaje o variable que se desea mostrar entre paréntesis. Además de console.log(), existen otros métodos como console.error(), console.warn() y console.info(), que permiten imprimir mensajes de error, advertencia e información, respectivamente, facilitando la identificación de diferentes tipos de mensajes en la consola.',
  ];

  question_demo: string[] = [
    '¿JavaScript sólo se puede usar para crear páginas web?',
    '¿Cuál de los siguientes tipos de datos en JavaScript se utiliza para representar texto?',
    '¿Cuál de los siguientes métodos se utiliza para imprimir un mensaje de error en la consola?',
  ];

  answers: string[] = [
    'Verdadero',
    'Falso',
    'Number',
    'String',
    'console.error()',
    'console.warn()',
  ];

  correct_answer: string[] = ['Falso', 'String', 'console.error()'];

  incorrect_answer: string[] = ['Verdadero', 'Number', 'console.warn()'];

  why_answer: string[] = [
    '¡Eso no es así! JavaScript es un lenguaje de programación de propósito general. Aunque nació para añadir interactividad a las páginas web, a día de hoy se usa en muchos otros entornos, como servidores, aplicaciones de escritorio, robots, etc.',
    '¡No :(! El tipo de dato String se utiliza para representar texto en JavaScript. Se escribe entre comillas simples o dobles, y es esencial para trabajar con cadenas de caracteres.',
    '¡Incorrecto! El método console.error() se utiliza para imprimir mensajes de error en la consola del navegador o del editor de código. Es muy útil para identificar y corregir errores durante el desarrollo.',
  ];

  selectedAnswer: string | null = null;
  feedbackMessage: string = '';
  feedbackClass: string = '';
  selectedQuestionIndex: number = 0;
  selectedTitleIndex: number = 0;
  selectedDescriptionIndex: number = 0;
  feedbackColor: string = '';
  isAnswerCorrect: boolean = false;
  isDemoFinished: boolean = false;

  checkAnswer(answer: string): void {
    this.selectedAnswer = answer;
    const correctIndex = this.correct_answer.indexOf(answer);
    const incorrectIndex = this.incorrect_answer.indexOf(answer);

    if (correctIndex !== -1) {
      this.feedbackMessage = '¡Correcto!';
      this.feedbackColor = 'green';
      this.isAnswerCorrect = true;
    } else if (incorrectIndex !== -1) {
      this.feedbackMessage = this.why_answer[incorrectIndex];
      this.feedbackColor = 'red';
      this.isAnswerCorrect = false;
    } else {
      this.feedbackMessage = '';
      this.isAnswerCorrect = false;
    }
  }

  finishDemo(): void {
    if (this.isAnswerCorrect && this.isLastQuestion()) {
      this.isFinished = true;
    }
  }

  animateFadeIn: boolean = false;
  isFinished: boolean = false;

  nextQuestion(): void {
    if (this.isLastQuestion() && this.isAnswerCorrect) {
      return;
    } else {
      this.selectedQuestionIndex++;
      this.selectedTitleIndex++;
      this.selectedDescriptionIndex++;

      if (this.selectedQuestionIndex >= this.question_demo.length) {
        this.selectedQuestionIndex = 0;
      }
      if (this.selectedTitleIndex >= this.title_demo.length) {
        this.selectedTitleIndex = 0;
      }
      if (this.selectedDescriptionIndex >= this.description_demo.length) {
        this.selectedDescriptionIndex = 0;
      }

      this.selectedAnswer = null;
      this.feedbackMessage = '';
      this.feedbackClass = '';
    }

    this.animateFadeIn = true;
    setTimeout(() => {
      this.animateFadeIn = false;
    }, 700);
  }

  restartDemo(): void {
    this.selectedQuestionIndex = 0;
    this.selectedTitleIndex = 0;
    this.selectedDescriptionIndex = 0;
    this.selectedAnswer = null;
    this.feedbackMessage = '';
    this.feedbackClass = '';
    this.isAnswerCorrect = false;
    this.isFinished = false;
    this.animateFadeIn = false;
  }

  isNextButtonEnabled(): boolean {
    return this.isAnswerCorrect;
  }

  isLastQuestion(): boolean {
    return this.selectedQuestionIndex === this.question_demo.length - 1;
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
    this.checkAnswer(answer);
  }

  toggleAccordion(index: number) {
    this.selectedAccordion = this.selectedAccordion === index ? null : index;
  }

  plans: Plan = require('./planes.json');
}
