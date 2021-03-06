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
       {text:"Entre les soussign??s " ,bold:true },
       {text:'\n'},
       {text:'MIND UP, Matricule Fiscal N??1621010P/A/C/000, sise ?? 8 avenue de l???universit??, El Manar1 ??? 2092 Tunis Tunisie, repr??sent??e par sa g??rante YACOUBI Basma. Ci-apr??s d??nomm??e le Domiciliataire d???une part'},
       {text:'\n'},   
       {text: 'Et la soci??t?? ?? '+data.nom_societe+' ?? en cours de constitution repr??sent??e par Monsieur '+data.prenom+' '+data.nom+' titulaire de CIN n??'+data.cin+' d??livr?? le '+data.date_deb+''},
       {text:'\n'},
       {text:' Ci-apr??s d??nomm?? la soci??t?? domicili??e d???autre part, il a ??t?? approuv?? les conditions suivantes :' },
       {text:'\n'},
       {text:'Article 1- Objet',bold:true},
       {text:'\n'},
       {text:'Le domiciliataire donne une domiciliation juridique, domiciliation fiscale et une domiciliation du si??ge social ?? la soci??t?? domicili??e, repr??sent??e par Monsieur '+data.prenom+' '+data.nom+' qui accepte d???utiliser l???adresse du domiciliataire ?? 8 avenue de l???universit??, El Manar1 ??? 2092 Tunis Tunisie et sa signature aux bas des pr??sents vaut acceptation sans aucune r??serve. La domiciliation permet ?? la soci??t?? domicili??e d???obtenir une patente, d???utiliser l???adresse de domiciliation sur ses factures, ses correspondances et la communiquer ?? sa client??le et d???obtenir tous les papiers l??gaux utiles ?? la soci??t??. Pour les fins de ce contrat, les conditions g??n??rales annex??es font partie int??grante du pr??sent contrat.'},
       {text:'\n'},

       {text:'Article 2- Dur??e ',bold:true},
       {text:'\n'},
       {text:'Le pr??sent contrat de domiciliation est consenti et accept?? pour une dur??e de douze mois entiers et cons??cutifs qui commenceront ?? courir le 26-04-2021 pour finir le 26-04-2022.Le pr??sent contrat est conclu pour une dur??e d??termin??e de 12 mois. En cas de r??siliation anticip??e du pr??sent contrat, le Domiciliataire se r??serve le droit d???informer l???administration de ladite r??alisation. Le domicili?? est tenu de fournir au domiciliataire la nouvelle adresse en cas de changement de si??ge social ainsi qu???en fin de contrat pour le transmettre ?? l???Administration fiscale, la caisse nationale de s??curit?? sociale et toute autre administration et autorit?? publique qui la demande.  '},
       {text:'\n'},

       {text:'Article 3- Frais de domiciliation ',bold:true},
       {text:'\n'},
      {text:" La pr??sente domiciliation juridique, domiciliation fiscale est consentie et accept??e moyennant une redevance annuelle de 600 DT HTVA Soit 714.000 TTC payable ?? la date de signature du contrat. Les frais de la domiciliation (714.000 TND) sont int??gralement payables ?? la date de signature du pr??sent contrat. Toute demande de renouvellement du nouveau contrat, doit faire l'objet d'une demande avant deux mois de sa date d'expiration. Dans le cas contraire, le contrat est automatiquement r??sili??.Pour tout renouvellement annuel de ce contrat, les frais de domiciliation sont major??s de 5% et le montant annuel des frais de domiciliation est payable en totalit?? ?? la date de renouvellement.  Aucune retenue ?? la source ne peut ??tre op??r??e par la soci??t?? domicili??e sans la remise du certificat de retenue ?? la source correspondant.  L???utilisation par la soci??t?? domicili??e de tout autre service associ?? fourni par le domiciliataire tel que d??nis par l???article 1er des conditions g??n??rales fera l???objet d???une facturation s??par??e et d??taill??e selon les tarifs qui sont communiqu??s ?? la soci??t?? domicili??e lors de la signature du pr??sent contrat. Ils sont payables sur pr??sentation de facture."},
      {text:'\n'},

      {text:'Article 4- R??siliation du contrat',bold:true},
      {text:'\n'},
      {text:'La dur??e du contrat de domiciliation est de 12 mois int??grale, renouvelable sur accord express des deux parties.  '},
      {text:'\n'},
       
      {text:'Article 5- Procuration ',bold:true},
      {text:'\n'},
      {text:'La soci??t?? domicili??e donne par la pr??sente procuration sp??ciale au domiciliataire afin de r??ceptionner pour son compte, tout le courrier simple et recommand?? ainsi que les proc??s-verbaux des huissiers notaires provenant de l???administration fiscale, la caisse nationale de s??curit?? social, et tout autre organisme et entreprise. Et d???en donner d??charge.'},
      {text:'\n'},

      {text:'Article 6- imp??ts, frais et honoraire ',bold:true},  
      {text:'\n'},
      {text:'Tous frais, taxes, droit d???enregistrement et honoraire occasionn??s par le pr??sent contrat sont la charge enti??re et exclusive de la soci??t?? domicili??e.'},
      {text:'\n'},
      {text:'Fait en autant d???exemplaires que de besoin.'},
      {text:'\n'},
      {text:'TUNIS,le',alignment:'right',margin: [0, 5, 70, 0],},
      {text:'\n'},
      {text:'Le domiciliataire'},
      {text:'La soci??t?? domicili??e',alignment:'right'},
      {text:'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'},
      {text:'Conditions g??n??rales',bold:true,alignment:'center'},
      {text:'\n'},
      {text:'Article 1 : D??finition des services associ??s '},
      {text:'\n'},
      {text:'En plus de la domiciliation fiscale. La soci??t?? domicili??e peut b??n??ficier de services associ??s sp??cifiques pendant les horaires de travail du domiciliataire. Qui font l???objet d???un devis et d???une facturation s??par??e et d??taill??e selon les tarifs qui lui sont communiqu??s lors de la signature du pr??sent contrat. Ils sont payables ?? la r??ception de la facture correspondent. Les services associ??s sont ?? titre indicatifs, les suivants : - Utilisation d???une salle permettant les r??unions en fonction des disponibilit??s des locaux et sur r??servation. ??? Utilisation d???un bureau et ce, en fonction des disponibilit??s des locaux et sur r??servation confirm??e par le domiciliataire.'},
      {text:'\n'},
      {text:'Article 2 : Obligations de la soci??t?? domicili??e '},
      {text:'\n'},
      {text:'2.1 Elle devra acquitter ses contributions, imp??ts, charges et taxes de toute nature que le domiciliataire ne puisse jamais ??tre inqui??t?? ?? cet ??gard. 2.2   Elle s???engage ?? ne pas utiliser les services du domiciliataire pour des activit??s immorales, ill??gales, diffamatoires ou portant atteintes aux bonnes meurs. Dans le cas contraire, la domiciliation se r??serve le droit de r??silier le pr??sent contrat et ce sans pr??judice de r??paration des ??ventuels dommages qu???elle aurait subis. 2.3 Elle s???engage ?? notifier au domiciliataire par lettre recommand??e avec accus?? de r??ception et ce, dans le d??lai d???un mois ?? compter de la date de leur survenance les ??v??nements suivants : sa mise en ??tat de redressement ou liquidation amiable ou judiciaire. Sa fusion ou dissolution. Le transfert ??ventuel de son si??ge social, toute modification de sa d??nomination ou son objet et tout changement dans son administration ou sa direction. '},
      {text:'\n'},
      {text:'Article 3 : Exclusion de responsabilit??'},
      {text:'\n'},
      {text:'3.1 La soci??t?? domicili??e d??gage d??finitivement le domiciliataire de toute responsabilit?? directe ou indirecte, incluant sans restriction les pertes financi??res d???une chance de revenu, de profit, de march??. Ect. R??sultant de l???inex??cution ou de l???inex??cution de ce contrat et ce, quelles que soient leurs origines ou/et le fondement de l???action. 3.2 La soci??t?? domicili??e ??tant cens??e ne laisser aucun objet ou bien lui revenant. Il ne pourra en aucun cas tenir le domiciliataire pour responsable des vols qui pourraient ??tre comme dans les lieux dont elle a l???usage. Elle ne pourra r??clamer aucune indemnit?? ni dommages et int??r??ts de ce chef.'},
      {text:'\n'},
      {text:'Article 4 : Droit de propri??t?? du domiciliataire sur les biens meubles'},
      {text:'\n'},
      {text:'La soci??t?? domicili??e reconnait que la propri??t?? de tous les meubles se trouvant dans les locaux lou??s revient de plein droit au domiciliataire. La soci??t?? domicili??e doit avertir ses ??ventuels cr??anciers que les biens meubles se trouvant dans les locaux du domiciliataire ne sont pas sa propri??t??, mais celle du domiciliataire. Au cas o?? les biens mobiliers meublant le local du domiciliataire viendraient ?? faire l???objet d???une saisie quelconque conservatoire ou ex??cutoire, d???une r??quisition par toute autorit?? et ce par suite de sommes que la soci??t?? domicili??e s???est rendue d??bitrice, cette derni??re est tenue de d??clarer ?? l???agent charg?? d???ex??cuter que les biens meubles en question sont la propri??t?? du domiciliataire et d???avertir sans d??lai ce dernier. En outre, la soci??t?? domicili??e doit prendre ?? ses frais toutes les mesures pour faire connaitre ledit droit de propri??t?? du domiciliataire et faire passer l???atteinte qui lui a ??t?? port??e.'},
      {text:'\n'},
      {text:'Article 5 : Comp??tence juridictionnelle '},
      {text:'\n'},
      {text:'Toutes contestations qui naitraient ?? l???occasion de l???interpr??tation ou/et l???ex??cution du pr??sent contrat sont de la comp??tence des tribunaux de Tunis.'},
      {text:'\n'},
      {text:'\n'},
      {text:'\n'},
      {text:'Le domiciliataire '},
      {text:'La soci??t?? domicili??e',alignment:'right',margin: [0, 0, 30, 0]}
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
      title: 'Etes-vous s??r?',
      text: "Cette action est irr??versible!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0190c8',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer ce membre !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Ce membre a ??t?? supprim??.',
          'success'
        )
      }
    })
  }
}
