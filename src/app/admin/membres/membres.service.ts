import { Injectable } from '@angular/core';
import { membre } from 'src/app/admin/shared/membre';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment } from 'src/environments/environment';


@Injectable({  
  providedIn: 'root'
})
export class MembresService {
  private BASE_URL = environment.API_URL;
  
  constructor(private http:HttpClient) { }

  getMembres (): Observable< membre[]> {
    return this.http.get< membre[]>(`${this.BASE_URL}/client`);
  } 

  getMembresbyid (id:string): Observable < membre > {
    return this.http.get<membre>(`${this.BASE_URL}/client/${id}`);
  }


  deleteMembres(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/client/${id}`);
  }

  addMembre(Membre: membre): Observable<membre> {
    return this.http.post<membre>(`${this.BASE_URL}/client`, Membre);
  }
  editMembre(Membre: membre,id:string): Observable<any> {
    return this.http.put<membre>(`${this.BASE_URL}/client/${id}`, Membre);
  }
  
}

