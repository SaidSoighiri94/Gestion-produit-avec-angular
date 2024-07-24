import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitGuard implements CanActivate {

  //Ajout d'un constructeur suivi d'une injection de dependance 
  constructor(private authService: AuthService, private router :Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    // verification si l'utilisateur est un admin
    if(this.authService.isAdmin())
      return true;
    else {
      this.router.navigate(['forbidden']);
      return false;
    }

  }

}
