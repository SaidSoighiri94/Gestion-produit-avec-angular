import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Données en dure
  users: User[] = [
    { "username": "admin", "password": "123", "roles": ['ADMIN'] },
    { "username": "mohamed", "password": "123", "roles": ['USER'] }
  ];
  public loggedUser!: string;
  public isLoggedIn: Boolean = false;
  public roles!: string[];

  constructor() { }

  // Methode signIn permettant si l'utilisateur et mot de passe existent
  SignIn(users: User): Boolean {
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
  }

  // Methode isAdmin permettant d'afficher l'ajout des produits si on est admin
  isAdmin():Boolean{
    if(!this.roles){
      return false;
    }
    return (this.roles.indexOf('ADMIN') >-1);
  }

}
