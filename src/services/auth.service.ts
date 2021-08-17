import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "../Config/api.config";
import { CredenciaisDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService{

  constructor(public http : HttpClient){

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
}
