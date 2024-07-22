import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Données en dure
   users : User []= [
    {
      "username" :"admin", "password" : "123", "role": ['ADMIN']
    },
    {
      "username" : "mohamed", "password" :"123",role:['USER']
    }
   ];

  constructor() { }
}
