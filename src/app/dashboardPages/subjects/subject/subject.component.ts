import { Component, Input } from '@angular/core';
import { Subject } from '../../../models/subject';
@Component({
  selector: 'subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  @Input() subject!: Subject;
  
}
