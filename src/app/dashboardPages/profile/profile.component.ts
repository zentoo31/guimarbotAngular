import { Component, ElementRef, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SubService } from '../../services/sub.service';
import { SpinnerComponent } from '../../ui-components/spinner/spinner.component';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { DOCUMENT } from '@angular/common';
import { Sub } from '../../models/sub';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SpinnerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent{
  user: User | undefined;
  sub: Sub | undefined;
  router: Router = inject(Router);
  userService: UserService = inject(UserService);
  subService: SubService = inject(SubService);
  authService: AuthService = inject(AuthService);
  isLoading1:boolean  = false; //cambiar a true
  isLoading2:boolean  = false;  //cambiar a true

  constructor(@Inject(DOCUMENT) private document: Document){
  }

  ngOnInit(){
    // this.loadUser();
    // this.loadSubs();
  }

  openUploadWidget() {
    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: 'dmbry7maq',
        uploadPreset: 'guimarbot',
        sources: ['local', 'url', 'camera'],
        multiple: false,
        folder:'profiles',
        cropping:true,
        clientAllowedFormats: ['png', 'jpeg', 'jpg'],
        language: 'es',
        text:{
          es: {
            "or": "o",
            local: {
              "browse": "Elegir archivo",
              "dd_title_single": "Arrastra tu archivo de imagen aquí",
            },
            menu: {
                "files": "Mis archivos",
                "web": "Dirección web",
                "camera": "Cámara",
            },
            camera: {
              "capture": "Capturar",
                "cancel": "Cancelar",
                "take_pic": "Tomar foto",
                "explanation": "Permite el acceso a tu cámara para tomar una foto y subirla a la nube.",
                "camera_error": "Error al acceder a la cámara.",
                "retry": "Reintentar",
            },
            url: {
                "inner_title": "Pega la URL de la imagen",
                "input_placeholder": "http://sitio.remoto.ejemplo/imagenes/imagen-remota.jpg"
            },
            crop: {
                "title": "Recortar imagen",
                "crop_btn": "Recortar",
                "skip_btn": "Saltar",
                "reset_btn": "Reiniciar"
            }
          }
        }
      },
      (error: any, result: any) => {
        if (!error && result && result.event === 'success') {
          console.log('Imagen subida con éxito: ', result.info);
        }
      }
    );
    widget.open();
  }


  loadUser() {
    this.userService.getUser().then(
      response => {
        this.user = response;
        this.user.creation_date = this.parseDate(response.creation_date);
        this.document.title = `${this.user?.username} | Perfil`;
        this.isLoading1 = false;
      }
    ).catch(
      error => console.error(error)
    );
  }

  loadSubs(){
    this.subService.getSubs().then(
      response => {
        this.sub = response;
        this.isLoading2 = false;
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
