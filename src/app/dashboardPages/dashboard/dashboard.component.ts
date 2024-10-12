import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isNotMobile = true;
  width1: string = "0px";
  width2: string = "100vh";
  
  constructor(private router: Router,  @Inject(PLATFORM_ID) private platformId: Object){
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
    if (isPlatformBrowser(this.platformId)) {
      // Este bloque solo se ejecuta en el cliente (navegador)
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0); // Restablece el scroll a la parte superior de la página
        }
      });
    }
  }

  checkScreenSize() {
    if (typeof window !== "undefined") {
    this.isNotMobile = window.innerWidth > 768; 
    }
  }

}
