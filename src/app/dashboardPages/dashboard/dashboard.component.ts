import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { Component, HostListener, inject, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';


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
  backgroundColor: string = '';
  backgroundSideBar: string = '';
  themeService: ThemeService = inject(ThemeService);
  
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
    this.backgroundColor = this.themeService.getBackgroundColor();
    this.backgroundSideBar = this.themeService.getSideBarColor();     
    
  }

  checkScreenSize() {
    if (typeof window !== "undefined") {
    this.isNotMobile = window.innerWidth > 768; 
    }
  }

}
