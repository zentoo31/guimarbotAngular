import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  private getAge(): number{
    if (this.isBrowser) {
      const age = localStorage.getItem('edad');
      return age ? parseInt(age) : 18;
    }
    return 18;
  }

  getBackgroundColor(): string{
      return this.getAge() <= 18 ? 'bg-youngBackground': 'bg-normalBackground';
  }

  getSideBarColor(): string{
    return this.getAge() <= 18 ? 'bg-youngSideBar': 'bg-normalSideBar';
  }


}
