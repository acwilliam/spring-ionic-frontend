import { CidadeDTO } from './../../models/cidade.dto';
import { EstadoService } from './../../services/domain/estado.service';
import { CidadeService } from './../../services/domain/cidade.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstadoDTO } from '../../models/estado.dto';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService) {

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

  ionViewDidLoad() {
    this.estadoService.findAll()
      .subscribe(response => {
        this.estados = response;
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
      },
      error => {});
  }

  updateCidades() {
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
      .subscribe(response => {
        this.cidades = response;
        this.formGroup.controls.cidadeId.setValue(null);
      },
      error => {});
  }


  signupUser(){
    console.log("Enviou o Form");
  }

}
