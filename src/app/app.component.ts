import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    let isLoggedIn: string | null;
    let loggedUser: string | null;

    isLoggedIn = localStorage.getItem('isLoggedIn');
    loggedUser = localStorage.getItem('loggedUser');

    if (isLoggedIn!= "true" || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.authService.setLoggeedUserFromLocaStorage(loggedUser);
  }
  onLogout() {
    this.authService.logout();
  }
}
