import { Component, inject, Inject } from '@angular/core';
import { SubjectComponent } from './subject/subject.component';
import { Subject } from '../../models/subject';
import { DOCUMENT } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { SubjectService } from '../../services/subject.service';
@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [SubjectComponent, RouterLink],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {
  subjectList!: Subject[];
  backgroundColor: string = '';
  themeService: ThemeService = inject(ThemeService);
  subjectService: SubjectService = inject(SubjectService);

  constructor(@Inject(DOCUMENT) private document: Document){
    this.document.title = "Cursos | GuimarBot";
  }

  ngOnInit(){
    this.backgroundColor = this.themeService.getBackgroundColor();
    this.loadSubjects();
  }

  loadSubjects(){
    this.subjectService.getSubjects().then((data: Subject[]) => {
      this.subjectList = data;
      console.log(this.subjectList);
      
    });
  }

}
