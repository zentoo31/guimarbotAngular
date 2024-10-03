import { Component, ElementRef, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SpinnerComponent } from '../../ui-components/spinner/spinner.component';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent{
  user: User | undefined;
  router: Router = inject(Router);
  userService: UserService = inject(UserService);
  authService: AuthService = inject(AuthService);
  isLoading:boolean  = true;

  constructor(@Inject(DOCUMENT) private document: Document){
  }

  ngOnInit(){
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser().then(
      response => {
        this.user = response;
        this.user.creation_date = this.parseDate(response.creation_date);
        this.document.title = `${this.user?.username} | Perfil`;
        this.isLoading = false;
      }
    ).catch(
      error => console.error(error)
    );
  }

  logout() {
    this.authService.logout().subscribe(
      response => {
        console.log(response.message);
        this.router.navigate(['/login']);
      }
    );
  }

  parseDate(dateStr: string) {
    let date = new Date(dateStr);
    let options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleString('es-ES', options); 
  }

}
