import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SpinnerComponent } from '../../ui-components/spinner/spinner.component';
import { Router } from '@angular/router';
import { User } from '../../models/user';
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
  ngOnInit(){
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser().then(
      response => {
        this.user = response;
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

}
