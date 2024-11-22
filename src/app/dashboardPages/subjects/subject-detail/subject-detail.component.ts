import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Subject } from '../../../models/subject';
import { ActivatedRoute} from '@angular/router';
import { RouterLink } from '@angular/router';
import Plyr from 'plyr';
import { AccordionModule } from 'primeng/accordion';
import { SubjectService } from '../../../services/subject.service';
@Component({
  selector: 'app-subject-detail',
  standalone: true,
  imports: [RouterLink, AccordionModule],
  templateUrl: './subject-detail.component.html',
  styleUrl: './subject-detail.component.css'
})
export class SubjectDetailComponent {
  subject!: Subject;
  subjectDetail!: Subject[];
  id!:string;
  openSections: Set<number> = new Set();
  subjectService: SubjectService = inject(SubjectService);
  private route = inject(ActivatedRoute);
  @ViewChild('plyrVideo', { static: true }) plyrVideo!: ElementRef;
  player!: Plyr;

  constructor() {
    const id = this.route.snapshot.params['id'];
    this.id = id;
  }

  toggleAccordion(section: number): void {
    if (this.openSections.has(section)) {
      this.openSections.delete(section);  
    } else {
      this.openSections.add(section);     
    }
  }

  isOpen(section: number): boolean {
    return this.openSections.has(section);
  }

  ngOnInit(){
    this.loadDisqus();
    this.loadSubjectDetail();
  }

  async loadDisqus(){
    (await function() { 
   var d = document, s = d.createElement('script');
   s.src = 'https://guimarbot.disqus.com/embed.js';
   s.setAttribute('data-timestamp', '' + new Date());
   s.setAttribute('data-theme', 'dark');
   (d.head || d.body).appendChild(s);
   })();
 }
  ngAfterViewInit() {
    this.player = new Plyr(this.plyrVideo.nativeElement, {
    });
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  }

  loadSubjectDetail() {
    this.subjectService.getSubjectById(this.id).then((data: Subject) => {
      if (data) {
        this.subject = data;
        globalThis.document.title = this.subject.title + " - Curso | Guimarbot";
      } else {
        console.error("El sujeto no fue encontrado");
        globalThis.document.title = "Sujeto no encontrado - Curso | Guimarbot";
      }
    }).catch(error => {
      console.error("Error al cargar el sujeto:", error);
      globalThis.document.title = "Error - Curso | Guimarbot";
    });
  }
}


