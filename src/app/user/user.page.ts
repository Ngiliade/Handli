import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  checkbox = '';

  constructor() { }

  ngOnInit() {
  }

  tipoCadastro(){
    if(this.checkbox == '1'){
      location.href = '/cad-prof';
    }
    else{
      location.href = '/cad-aluno';
    }
  }

}
