import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PayManagerServiceService {
  baseUrl01 = environment.baseUrl01;
  constructor(private http: HttpClient) { }
    postRequestUrl01(data: any, ACTION: string) { 
    debugger
   ACTION = `${this.baseUrl01}` + ACTION; 
  var  result = this.http.post<any>(ACTION, data); 
  return result;
}
}
  