import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  crendenciais: CredenciaisDTO =  {
    email:"",
    senha:""
  }

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }
  ionViweWillEnter(){
    this.menu.swipeEnable(false);

  }
  ionViweDidLeave(){
    this.menu.swipeEnable(true);
  }

  login() {
    this.auth.autenticar(this.crendenciais)
    .subscribe(Response =>{
      this.auth.successfulLogin(Response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
    },
    error=>{});

  }
}
