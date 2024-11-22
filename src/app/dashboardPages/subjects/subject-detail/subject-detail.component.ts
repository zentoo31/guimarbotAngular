import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Subject } from '../../../models/subject';
import { ActivatedRoute} from '@angular/router';
import { RouterLink } from '@angular/router';
import Plyr from 'plyr';
import { AccordionModule } from 'primeng/accordion';
import { SubjectService } from '../../../services/subject.service';
import { SectionsSesionsService } from '../../../services/sections-sesions.service';
import { SectionWithSessions } from '../../../models/sections-sessions';

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
  sectionsWithSessions: SectionWithSessions[] = [];
  sectionIndex:number = 0;
  sessionIndex:number = 0;
  id!:string;
  openSections: Set<number> = new Set();
  subjectService: SubjectService = inject(SubjectService);
  sectionsSesionsService: SectionsSesionsService = inject(SectionsSesionsService);
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

  setIndexSectionAndSession(indexSection: number, indexSession:number): void {
    this.sectionIndex = indexSection;
    this.sessionIndex = indexSession;
    
  }

  ngOnInit(){
    this.loadDisqus();
    this.loadSubjectDetail();
    this.loadSectionsAndSessions();
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

   getYouTubeEmbedUrl(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]*\/\S+\/|(?:v|e(?:mbed)?)\/?|(?:.*[?&]v=)|(?:.*[?&]v=))([^"&?\/\s]*))$/;
    const match = url.match(regex);
  
    if (match && match[1]) {
      const videoId = match[1];
      return `https://www.youtube.com/embed/${videoId}`;
    } else {
      throw new Error("URL de YouTube no válida");
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

  async loadSectionsAndSessions() {
    try {
      const sectionsWithSessions = await this.sectionsSesionsService.getAllSectionsAndSessionsBySubjectId(this.id);
      console.log("Secciones y sesiones cargadas:", sectionsWithSessions);
      if (sectionsWithSessions.length > 0) {
        this.sectionsWithSessions = sectionsWithSessions;
      } else {
        console.error("No se encontraron secciones o sesiones para este subject.");
      }
    } catch (error) {
      console.error("Error al cargar las secciones y sesiones:", error);
    }
  }


}


