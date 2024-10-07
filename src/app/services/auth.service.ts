import { apiURL } from './../config';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrlUsers = 'htt://localhost:9001/user'
  token!:string;

  // Données en dure
  /*users: User[] = [
    { "username": "admin", "password": "123", "roles": ['ADMIN'] },
    { "username": "mohamed", "password": "123", "roles": ['USER'] }
  ];
  */
  public loggedUser!: string;
  public isLoggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router, private http:HttpClient) { }

  login(user : User){
    
    return this.http.post<User>(apiURL+'/login',user,{observe:'response'});
  }

  saveToken(jwt:string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isLoggedIn = true;
  }


  // Methode signIn permettant si l'utilisateur et mot de passe existent
  /*SignIn(users: User): Boolean {
    let validUser: Boolean = false;

    // Recherche grace au foreach
    this.users.forEach((curUser) => {
      if (users.username === curUser.username && users.password === curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isLoggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isLoggedIn', String(this.isLoggedIn))
      }
    });
    return validUser;
  }*/

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
  /*getUserRoles(username : string){
    this.users.forEach((curUser) => {
      if(curUser.username == username){
        this.roles =curUser.roles;
      }
    });
  }*/
  
}
