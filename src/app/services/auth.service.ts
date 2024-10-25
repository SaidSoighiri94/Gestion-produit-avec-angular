import { apiURL } from './../config';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrlUsers = 'http://localhost:8081/users'
  token!:string;
  private helper = new JwtHelperService();

  public loggedUser!: string;
  public isLoggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router, private http:HttpClient) { }

  login(user : User){
    
    return this.http.post<User>(this.apiUrlUsers+'/login',user,{observe:'response'});
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isLoggedIn = true;
    this.decodeJWT();
  }

  decodeJWT(){
    if(this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;


  }

  getToken():string {
    return this.token;
  }

  // Methode isAdmin permettant d'afficher l'ajout des produits si on est admin
  isAdmin():Boolean{
    if(!this.roles){ //this.roles ==undefined
      return false;
    }
    return (this.roles.indexOf('ADMIN') >-1);
  }
  //Methode de deconnexion
  logout(){
    this.isLoggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isLoggedIn',String (this.isLoggedIn));
    this.router.navigate(['/login']);

  }

  setLoggeedUserFromLocaStorage(login: string){
    this.loggedUser = login;
    this.isLoggedIn = true;
   // this.getUserRoles(login);
  }
  
}
