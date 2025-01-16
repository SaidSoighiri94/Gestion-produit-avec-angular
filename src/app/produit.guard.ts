import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitGuard  {

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
