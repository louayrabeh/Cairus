import { Component,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import Swal from 'sweetalert2';
import jspdf from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { MatDialog } from '@angular/material/dialog';
import { FactDialogComponent } from '../fact-dialog/fact-dialog.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {FactureService  } from "./factures.service";
import { facture } from '../shared/facture';
import { mergeMap } from 'rxjs/operators';
import {MembresService  } from "../membres/membres.service";
import { membre } from '../shared/membre';





@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent{
  displayedColumns: string[] = ['Nom', 'Prenom', 'Montant', 'Date_deb','Date_fin','Type','actions'];
  public factures!:facture[]
  dataSource!: MatTableDataSource<facture>;
  public errorMsg!: String;
  dialogRef: any;
  
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private factureService:FactureService,
    private membreService:MembresService
  ) {} 

  ngOnInit(): void {
    this.factureService.getFactures().subscribe((factures:facture[])=>{
    this.factures=factures;
    this.factures.forEach(element => {


      this.membreService.getMembresbyid(element.id_Client).subscribe((membre: membre) => {
        element.Nom=membre.nom
        element.Prenom=membre.prenom
     })


    }); 
    this.dataSource=new MatTableDataSource(factures)

    });
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  download(data: any){
     const documentDefinition = {	content: [
		
        {
          image:'myImg',
          width:500,
          height:70
        },
        {text:'\n\n'},
        {
          text: 'Facture',
          style: 'header',
          alignment: 'center'
        },
		    {
          text:'Date:25/06/2021',
          alignment: 'right',
          lineHeight:3
        },
        {
          table: {
            headerRows: 1,
            widths: [ 300, '*'],
            body: [
              [
                 {
                  text: 'MIND UP Coworking Space \n 08 Avenue de L universit?? el Manar 1      2092 \n T??l??phone : 56788132\n MF: 1621010P/A/C000                  ',
                  lineHeight:2,
                 },

                   'Au nom de : \n '+data.Prenom+' '+data.Nom+'  ' ],
            ],
          },
        },
        {text:'\n\n'},
        {table:{
          headerRows: 1,
          widths: [ '*', '*','*','*','*','*','*' ],
          body:[
            [{text:'R??f??rence',bold:true,fillColor: '#eeeeee',},{text:'R??f??rence  contrat',bold:true,fillColor: '#eeeeee',},{text:'Description',bold:true,fillColor: '#eeeeee',},{text:'PU HT',bold:true,fillColor: '#eeeeee',},{text:'Quantit??',bold:true,fillColor: '#eeeeee',},{text:'Montant HT',bold:true,fillColor: '#eeeeee',},{text:'Taux TVA',bold:true,fillColor: '#eeeeee',}],
            ['11111','222222','---','50 Dt','1','50 Dt','19%']
          ]
        }
      },
      {text:'\n\n'},
      {
        columns: [
            { width: '*', text: '' },
            {
                width: 'auto',
                    table: {
                            body: [
                                    [{text:'Ht',border:[true,true,false,true],alignment:'center'}, {text:'150 TND',border:[false,true,true,true],alignment:'center'}],
                            
                            ]
                    }
            }
        ]
    },
    {text:'\n\n'},
    {
      columns: [
          { width: '*', text: '' },
          {
              width: 'auto',
                  table: {
                          body: [
                                  [{text:'TVA ?? 19%',border:[true,true,false,true],alignment:'center'}, {text:'28.5 TND',border:[false,true,true,true],alignment:'center'}],
                                  [{text:'Droit de timbre',alignment:'center'}, {text:'0,6 TND',alignment:'center'}],
                          ]
                  }
          }
      ]
  },
  {text:'\n'},
  {
    columns: [
        { width: '*', text: '' },
        {
            width: 'auto',
                table: {
                        body: [
                                [{text:'TOTAL TTC',alignment:'center',bold:true,fontSize:17}, {text:'250 TND',alignment:'center',bold:true,fontSize:17}],
                        ]
                }
        }
    ]
},
{text:'\n'},
{text:'Merci pour\n votre\n confiance',bold:true,fontSize:17,margin: [ 100, 1, 1, 1 ]}
	],
  images:{
    myImg:'https://i.imgur.com/1A6jdLe.png',
 
  },
	styles: {
		header: {
			fontSize: 26,
			bold: true,
			alignment: 'justify',
      lineHeight:2
		}
	}};
     pdfMake.createPdf(documentDefinition).download();
  }

  Delete(selectedItem: any){
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
        this.factureService.deleteFactures(selectedItem._id).pipe(mergeMap(() => this.factureService.getFactures())).subscribe(
          (factures: facture []) => {
            this.factures=factures;
            this.factures.forEach(element => {


              this.membreService.getMembresbyid(element.id_Client).subscribe((membre: membre) => {
                element.Nom=membre.nom
                element.Prenom=membre.prenom
             })
        
        
            });
            
            this.dataSource= new MatTableDataSource(factures);
          },
          (error: ErrorEvent) => {
            this.errorMsg = error.error.message;
          }
    
        );
        Swal.fire(
          'Deleted!',
          'Ce membre a ??t?? supprim??.',
          'success'
        )
      }
    })
  }
}
