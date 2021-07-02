import { Injectable } from '@angular/core';
import { contrat } from 'src/app/admin/shared/contrat';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private BASE_URL = environment.API_URL;
  
  constructor(private http:HttpClient) { }

  email(data:any) {
    return this.http.post(`${this.BASE_URL}/sendmail`,data)
  }

  getContrat (): Observable< contrat[]> {
    return this.http.get< contrat[]>(`${this.BASE_URL}/contrat`);
  } 

  getContratbyid (id:string): Observable < contrat > {
    return this.http.get<contrat>(`${this.BASE_URL}/contrat/${id}`);
  }


  deleteContrat(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/contrat/${id}`);
  }

  addContrat(Contrat: contrat): Observable<contrat> {
    return this.http.post<contrat>(`${this.BASE_URL}/contrat`, Contrat);
  }
 
}
