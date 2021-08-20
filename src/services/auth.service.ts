import { StorageService } from './storage.service';
import { LocalUser } from './../models/local_user';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../Config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService{

  jwtHelper: JwtHelper= new JwtHelper();

  constructor(
    public http : HttpClient,
    public storage: StorageService){

  }

  autenticar(crendencias : CredenciaisDTO){
     return this.http.post(
      `${API_CONFIG.baseUrl}/login`,
      crendencias,
      {
        observe: 'response',
        responseType: "text"
      });
  }

  refreshToken(){
    return this.http.post(
     `${API_CONFIG.baseUrl}/auth/refresh_token`,
     {},
     {
       observe: 'response',
       responseType: "text"
     });
 }

  successfulLogin(AuthorizationValue : string){
    let tok = AuthorizationValue.substring(7);
    let user : LocalUser = {
      token : tok,
      email: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }

  logout(){
    this.storage.setLocalUser(null);
  }
}
