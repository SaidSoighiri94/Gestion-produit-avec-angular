import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(public authService: AuthService){

  }
  ngOnInit(){
    let isLoggedIn: string;
    let loggedUser: string;
    isLoggedIn = localStorage.getItem('isLoggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if(isLoggedIn != "true" || !loggedUser)
      this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
  onLogout(){
    this.authService.logout();
  }
}
