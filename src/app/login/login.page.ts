import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private NavController: NavController,
  ) { }

  ngOnInit() {
  }

  login() {
    this.NavController.navigateRoot('/home', { animationDirection: "forward"});
  }
}
