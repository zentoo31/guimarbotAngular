import { Component, Input } from '@angular/core';
import { Subject } from '../../../models/subject';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'subject',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {
  @Input() subject!: Subject;

}
