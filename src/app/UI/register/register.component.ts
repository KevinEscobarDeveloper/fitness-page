import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;
  ngOnInit(): void {

  }

  onShowPassword(): boolean {
    console.log("on show password");
    console.log(this.showPassword);
    this.showPassword = !this.showPassword;
    return this.showPassword;
  }


}
