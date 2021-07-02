import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { MatDialog } from '@angular/material/dialog';
import { FactDialogComponent } from '../fact-dialog/fact-dialog.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {MembresService  } from "src/app/admin/membres/membres.service";
import { membre } from '../shared/membre';
import { mergeMap } from 'rxjs/operators';
import { contrat } from 'src/app/admin/shared/contrat';
import {ContratService  } from 'src/app/client-domi/contrat/contrat.service';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { element } from 'protractor';


@Component({
  selector: 'app-contrat-admin',
  templateUrl: './contrat-admin.component.html',
  styleUrls: ['./contrat-admin.component.css']
})
export class ContratAdminComponent{
  displayedColumns: string[] = ['Nom', 'Prenom', 'DateDeb', 'DateFin','Type','actions'];
  public contrats!:contrat[];
  dataSource!: MatTableDataSource<contrat>;
  public errorMsg!: String;
  shell:any
  nomm!:String
  
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private membresService:MembresService,
    private contratService:ContratService,
    private http:HttpClient,
    private router:Router,
    ) {}   test="malek"

    ngOnInit(): void {
    
      this.http.get('http://localhost:3000/api/user',{withCredentials:true}).subscribe((result) =>{
        this.shell=result
        if ( this.shell.role !=='admin') {
          
          this.router.navigate(['Tuto'])
        }
        },  (error) =>{
        this.router.navigate(['login'])
  
      })
      this.contratService.getContrat().subscribe((contrats:contrat[])=>{
      this.contrats=contrats;
      this.contrats.forEach(element => {
  
  
        this.membresService.getMembresbyid(element.id_client).subscribe((membre: membre) => {
          element.nom=membre.nom
          element.prenom=membre.prenom
          element.cin=membre.cin
          this.nomm=membre.nom
  
       })
  
  
      });
      
      
        
      this.dataSource=new MatTableDataSource(contrats);
      });
    }  

    

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  FactDialog(){
    const dialogRef = this.dialog.open(FactDialogComponent, {
    });

  }
  download(data:any){


    
    const documentDefinition = {	content: [
   
       {
         image:'myImg',
         width:500,
         height:60
       },
       {text:'\n\n'},

       {
         text: 'Contrat de domiciliation ',alignment:'center',style:'header'
       },
       {
         text:"REF "+data.ref+"",alignment:'right',style:'header'
       },
       {text:'\n'},
       {text:"Entre les soussignés " ,bold:true },
       {text:'\n'},
       {text:'MIND UP, Matricule Fiscal N°1621010P/A/C/000, sise à 8 avenue de l’université, El Manar1 – 2092 Tunis Tunisie, représentée par sa gérante YACOUBI Basma. Ci-après dénommée le Domiciliataire d’une part'},
       {text:'\n'},   
       {text: 'Et la société « '+data.nom_societe+' » en cours de constitution représentée par Monsieur '+data.prenom+' '+data.nom+' titulaire de CIN n°'+data.cin+' délivré le '+data.date_deb+''},
       {text:'\n'},
       {text:' Ci-après dénommé la société domiciliée d’autre part, il a été approuvé les conditions suivantes :' },
       {text:'\n'},
       {text:'Article 1- Objet',bold:true},
       {text:'\n'},
       {text:'Le domiciliataire donne une domiciliation juridique, domiciliation fiscale et une domiciliation du siège social à la société domiciliée, représentée par Monsieur '+data.prenom+' '+data.nom+' qui accepte d’utiliser l’adresse du domiciliataire à 8 avenue de l’université, El Manar1 – 2092 Tunis Tunisie et sa signature aux bas des présents vaut acceptation sans aucune réserve. La domiciliation permet à la société domiciliée d’obtenir une patente, d’utiliser l’adresse de domiciliation sur ses factures, ses correspondances et la communiquer à sa clientèle et d’obtenir tous les papiers légaux utiles à la société. Pour les fins de ce contrat, les conditions générales annexées font partie intégrante du présent contrat.'},
       {text:'\n'},

       {text:'Article 2- Durée ',bold:true},
       {text:'\n'},
       {text:'Le présent contrat de domiciliation est consenti et accepté pour une durée de douze mois entiers et consécutifs qui commenceront à courir le 26-04-2021 pour finir le 26-04-2022.Le présent contrat est conclu pour une durée déterminée de 12 mois. En cas de résiliation anticipée du présent contrat, le Domiciliataire se réserve le droit d’informer l’administration de ladite réalisation. Le domicilié est tenu de fournir au domiciliataire la nouvelle adresse en cas de changement de siège social ainsi qu’en fin de contrat pour le transmettre à l’Administration fiscale, la caisse nationale de sécurité sociale et toute autre administration et autorité publique qui la demande.  '},
       {text:'\n'},

       {text:'Article 3- Frais de domiciliation ',bold:true},
       {text:'\n'},
      {text:" La présente domiciliation juridique, domiciliation fiscale est consentie et acceptée moyennant une redevance annuelle de 600 DT HTVA Soit 714.000 TTC payable à la date de signature du contrat. Les frais de la domiciliation (714.000 TND) sont intégralement payables à la date de signature du présent contrat. Toute demande de renouvellement du nouveau contrat, doit faire l'objet d'une demande avant deux mois de sa date d'expiration. Dans le cas contraire, le contrat est automatiquement résilié.Pour tout renouvellement annuel de ce contrat, les frais de domiciliation sont majorés de 5% et le montant annuel des frais de domiciliation est payable en totalité à la date de renouvellement.  Aucune retenue à la source ne peut être opérée par la société domiciliée sans la remise du certificat de retenue à la source correspondant.  L’utilisation par la société domiciliée de tout autre service associé fourni par le domiciliataire tel que dénis par l’article 1er des conditions générales fera l’objet d’une facturation séparée et détaillée selon les tarifs qui sont communiqués à la société domiciliée lors de la signature du présent contrat. Ils sont payables sur présentation de facture."},
      {text:'\n'},

      {text:'Article 4- Résiliation du contrat',bold:true},
      {text:'\n'},
      {text:'La durée du contrat de domiciliation est de 12 mois intégrale, renouvelable sur accord express des deux parties.  '},
      {text:'\n'},
       
      {text:'Article 5- Procuration ',bold:true},
      {text:'\n'},
      {text:'La société domiciliée donne par la présente procuration spéciale au domiciliataire afin de réceptionner pour son compte, tout le courrier simple et recommandé ainsi que les procès-verbaux des huissiers notaires provenant de l’administration fiscale, la caisse nationale de sécurité social, et tout autre organisme et entreprise. Et d’en donner décharge.'},
      {text:'\n'},

      {text:'Article 6- impôts, frais et honoraire ',bold:true},  
      {text:'\n'},
      {text:'Tous frais, taxes, droit d’enregistrement et honoraire occasionnés par le présent contrat sont la charge entière et exclusive de la société domiciliée.'},
      {text:'\n'},
      {text:'Fait en autant d’exemplaires que de besoin.'},
      {text:'\n'},
      {text:'TUNIS,le',alignment:'right',margin: [0, 5, 70, 0],},
      {text:'\n'},
      {text:'Le domiciliataire'},
      {text:'La société domiciliée',alignment:'right'},
      {text:'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'},
      {text:'Conditions générales',bold:true,alignment:'center'},
      {text:'\n'},
      {text:'Article 1 : Définition des services associés '},
      {text:'\n'},
      {text:'En plus de la domiciliation fiscale. La société domiciliée peut bénéficier de services associés spécifiques pendant les horaires de travail du domiciliataire. Qui font l’objet d’un devis et d’une facturation séparée et détaillée selon les tarifs qui lui sont communiqués lors de la signature du présent contrat. Ils sont payables à la réception de la facture correspondent. Les services associés sont à titre indicatifs, les suivants : - Utilisation d’une salle permettant les réunions en fonction des disponibilités des locaux et sur réservation. – Utilisation d’un bureau et ce, en fonction des disponibilités des locaux et sur réservation confirmée par le domiciliataire.'},
      {text:'\n'},
      {text:'Article 2 : Obligations de la société domiciliée '},
      {text:'\n'},
      {text:'2.1 Elle devra acquitter ses contributions, impôts, charges et taxes de toute nature que le domiciliataire ne puisse jamais être inquiété à cet égard. 2.2   Elle s’engage à ne pas utiliser les services du domiciliataire pour des activités immorales, illégales, diffamatoires ou portant atteintes aux bonnes meurs. Dans le cas contraire, la domiciliation se réserve le droit de résilier le présent contrat et ce sans préjudice de réparation des éventuels dommages qu’elle aurait subis. 2.3 Elle s’engage à notifier au domiciliataire par lettre recommandée avec accusé de réception et ce, dans le délai d’un mois à compter de la date de leur survenance les événements suivants : sa mise en état de redressement ou liquidation amiable ou judiciaire. Sa fusion ou dissolution. Le transfert éventuel de son siège social, toute modification de sa dénomination ou son objet et tout changement dans son administration ou sa direction. '},
      {text:'\n'},
      {text:'Article 3 : Exclusion de responsabilité'},
      {text:'\n'},
      {text:'3.1 La société domiciliée dégage définitivement le domiciliataire de toute responsabilité directe ou indirecte, incluant sans restriction les pertes financières d’une chance de revenu, de profit, de marché. Ect. Résultant de l’inexécution ou de l’inexécution de ce contrat et ce, quelles que soient leurs origines ou/et le fondement de l’action. 3.2 La société domiciliée étant censée ne laisser aucun objet ou bien lui revenant. Il ne pourra en aucun cas tenir le domiciliataire pour responsable des vols qui pourraient être comme dans les lieux dont elle a l’usage. Elle ne pourra réclamer aucune indemnité ni dommages et intérêts de ce chef.'},
      {text:'\n'},
      {text:'Article 4 : Droit de propriété du domiciliataire sur les biens meubles'},
      {text:'\n'},
      {text:'La société domiciliée reconnait que la propriété de tous les meubles se trouvant dans les locaux loués revient de plein droit au domiciliataire. La société domiciliée doit avertir ses éventuels créanciers que les biens meubles se trouvant dans les locaux du domiciliataire ne sont pas sa propriété, mais celle du domiciliataire. Au cas où les biens mobiliers meublant le local du domiciliataire viendraient à faire l’objet d’une saisie quelconque conservatoire ou exécutoire, d’une réquisition par toute autorité et ce par suite de sommes que la société domiciliée s’est rendue débitrice, cette dernière est tenue de déclarer à l’agent chargé d’exécuter que les biens meubles en question sont la propriété du domiciliataire et d’avertir sans délai ce dernier. En outre, la société domiciliée doit prendre à ses frais toutes les mesures pour faire connaitre ledit droit de propriété du domiciliataire et faire passer l’atteinte qui lui a été portée.'},
      {text:'\n'},
      {text:'Article 5 : Compétence juridictionnelle '},
      {text:'\n'},
      {text:'Toutes contestations qui naitraient à l’occasion de l’interprétation ou/et l’exécution du présent contrat sont de la compétence des tribunaux de Tunis.'},
      {text:'\n'},
      {text:'\n'},
      {text:'\n'},
      {text:'Le domiciliataire '},
      {text:'La société domiciliée',alignment:'right',margin: [0, 0, 30, 0]}
     ],
 images:{
   myImg:'https://i.imgur.com/1A6jdLe.png',

 },
 styles: {
   header: {
     fontSize: 14,
     bold: true,
     lineHeight:2
   }
 }};
    pdfMake.createPdf(documentDefinition).download();
 }

  openDeleteAlert(){
    Swal.fire({
      title: 'Etes-vous sûr?',
      text: "Cette action est irréversible!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0190c8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer ce membre !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Ce membre a été supprimé.',
          'success'
        )
      }
    })
  }
}
