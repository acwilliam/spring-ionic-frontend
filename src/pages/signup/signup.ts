import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome:['William',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email:['william@gmail.com',[Validators.required,Validators.email]],
        tipo:['1',[Validators.required]],
        cpfOuCnpj:['37851605857',[Validators.required, Validators.minLength(11),Validators.maxLength(14)]],
        senha:['123',[Validators.required]],
        logradouro:['Rua Via',[Validators.required]],
        numero:['50',[Validators.required]],
        complemento:['apto 203',[]],
        bairro:['Agua Chata',[Validators.required]],
        cep:['07170530',[Validators.required]],
        telefone1:['11959035714',[Validators.required]],
        telefone2:['',[]],
        telefone3:['',[]],
        estadoId:[null,[Validators.required]],
        cidadeId:[null,[Validators.required]]
      });
  }

  signupUser(){
    console.log("Enviou o Form");
  }

}
