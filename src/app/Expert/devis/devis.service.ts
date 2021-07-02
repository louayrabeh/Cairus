import { Injectable } from '@angular/core';
import {devis} from 'src/app/admin/shared/devis';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DevisService {


  private BASE_URL = environment.API_URL;
  
  constructor(private http:HttpClient) { }

  email(data:any) {
    return this.http.post(`${this.BASE_URL}/sendmail`,data)
  }
  emaill(data:any) {
    return this.http.post(`${this.BASE_URL}/sendmaill`,data)
  }

  getDevis (): Observable< devis[]> {
    return this.http.get< devis[]>(`${this.BASE_URL}/devis`);
  } 

  getDevisbyid (id:string): Observable < devis > {
    return this.http.get<devis>(`${this.BASE_URL}/devis/${id}`);
  }
  
  

  deleteDevis(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/devis/${id}`);
  }

  addDevis(Devis: devis): Observable<devis> {
    return this.http.post<devis>(`${this.BASE_URL}/devis`, Devis);
  }

  
  editDevis(Devis: devis,id:string): Observable<any> {
    return this.http.put<devis>(`${this.BASE_URL}/devis/${id}`, Devis);
  }

}
