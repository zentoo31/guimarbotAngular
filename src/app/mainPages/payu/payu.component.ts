import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-payu',
  standalone: true,
  imports: [],
  templateUrl: './payu.component.html',
  styleUrl: './payu.component.css'
})
export class PayuComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.document.title = "Pagar / Guimarbot"
  }
}
