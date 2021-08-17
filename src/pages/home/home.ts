import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
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

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }
  ionViweWillEnter(){
    this.menu.swipeEnable(false);

  }
  ionViweDidLeave(){
    this.menu.swipeEnable(true);
  }

  login() {
    console.log(this.crendenciais);
    this.navCtrl.setRoot('CategoriasPage');
  }
}
