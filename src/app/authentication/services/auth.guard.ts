import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private toaster: ToastrService){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('Usuario')===null){
      this.toaster.error('Por favor inicie sesión correctamente', 'Acceso Denegado');
      this.router.navigate(['authentication/login']);
      return false;
    }
    else {
      this.auth.isLogged = true;
      return true;
    }
  }
  
}
