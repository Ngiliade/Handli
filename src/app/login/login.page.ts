import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  senha = '';
  mensagem = '';

  constructor() { }

  ngOnInit() {
  }

  logar(){
    if(this.email == 'joaozinho@email.com' && this.senha == '1234'){
      location.href = "/home";
    }
    else{
      this.mensagem = 'Login e senha incorretos';
    }
  }

}
