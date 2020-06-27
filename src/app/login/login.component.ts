import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  login () {
    this.auth.login().subscribe(res => {
      // this.router.navigate(['/home']);
      console.log(this.auth.isLoggedIn)
      this.router.navigateByUrl(this.auth.redirectUrl);
    })
  }
  ngOnInit() {
  }

}
