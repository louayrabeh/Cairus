import { Injectable } from '@angular/core';
import { facture } from 'src/app/admin/shared/facture';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private BASE_URL = environment.API_URL;
  
  constructor(private http:HttpClient) { }

  getFactures (): Observable< facture[]> {
    return this.http.get< facture[]>(`${this.BASE_URL}/facture`);
  } 


  deleteFactures(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/facture/${id}`);
  }

  addFactures(Facture: facture): Observable<facture> {
    return this.http.post<facture>(`${this.BASE_URL}/facture`, Facture);
  }
  

}