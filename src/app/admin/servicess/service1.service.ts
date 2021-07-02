import { Injectable } from '@angular/core';
import { service1 } from 'src/app/admin/shared/service1';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import {environment } from 'src/environments/environment';


@Injectable({  
  providedIn: 'root'
})
export class Service1Service {
  private BASE_URL = environment.API_URL;
  
  constructor(private http:HttpClient) { }

  getService1 (): Observable< service1[]> {
    return this.http.get< service1[]>(`${this.BASE_URL}/service1`);
  } 

  getService1byid (id:string): Observable < service1 > {
    return this.http.get<service1>(`${this.BASE_URL}/service1/${id}`);
  }


  deleteService1(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/service1/${id}`);
  }

  addService1(Service1: service1): Observable<service1> {
    return this.http.post<service1>(`${this.BASE_URL}/service1`, Service1);
  }

  editService1(Service1: service1,id:string): Observable<service1> {
    return this.http.put<service1>(`${this.BASE_URL}/service1/${id}`, Service1);
  }
  }

