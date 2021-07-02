import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-choix-categorie',
  templateUrl: './choix-categorie.component.html',
  styleUrls: ['./choix-categorie.component.css']
})
export class ChoixCategorieComponent implements OnInit {
  shell:any
  NomPrenom!:String

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result)=> {
      this.shell = result
      this.NomPrenom = this.shell.nom + ' ' + this.shell.prenom;

     
    } )
  }

}
