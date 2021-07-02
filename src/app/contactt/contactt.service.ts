import { Injectable } from '@angular/core';
import {devis} from 'src/app/admin/shared/devis';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContacttService {
  private BASE_URL = environment.API_URL;
  
  constructor(private http:HttpClient) { }
  email(data:any) {
    return this.http.post(`${this.BASE_URL}/send`,data)
  }
  

  getDevis (): Observable< devis[]> {
    return this.http.get< devis[]>(`${this.BASE_URL}/contact`);
  } 

  getDevisbyid (id:string): Observable < devis > {
    return this.http.get<devis>(`${this.BASE_URL}/contact/${id}`);
  }
  
  

  deleteDevis(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/contact/${id}`);
  }

  addDevis(Devis: devis): Observable<devis> {
    return this.http.post<devis>(`${this.BASE_URL}/contact`, Devis);
  }

  
  editDevis(Devis: devis,id:string): Observable<any> {
    return this.http.put<devis>(`${this.BASE_URL}/contact/${id}`, Devis);
  }


}
