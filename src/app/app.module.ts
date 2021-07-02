import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { HomeComponent } from './admin/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './admin/footer/footer.component';
import { ColumnComponent } from './admin/charts/column/column.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { PieComponent } from './admin/charts/pie/pie.component';
import { AreaComponent } from './admin/charts/area/area.component';
import { LineComponent } from './admin/charts/line/line.component';
import { Column2Component } from './admin/charts/column2/column2.component';
import { MembresComponent } from './admin/membres/membres.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { Dialog1Component } from './admin/dialog1/dialog1.component';
import { CalendrierComponent } from './admin/calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NgxSpinnerModule } from "ngx-spinner";
import { FacturesComponent } from './admin/factures/factures.component';
import { ServicesComponent } from './admin/servicess/services.component';
import { Dialog2Component } from './admin/dialog2/dialog2.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { DatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ScheduleModule,DayService, WeekService, WorkWeekService, MonthService, AgendaService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { NavigationExpertComponent } from './expert/navigation-expert/navigation-expert.component';
import { DevisComponent } from './expert/devis/devis.component';
import { FaqComponent } from './expert/faq/faq.component';
import { DetailsdialogComponent } from './expert/detailsdialog/detailsdialog.component';
import { DonnerdialogComponent } from './expert/donnerdialog/donnerdialog.component';
import { QuestionDialogComponent } from './expert/question-dialog/question-dialog.component';
import { NavigationClientDomiComponent } from './client-domi/navigation-client-domi/navigation-client-domi.component';
import { HomeClientDomiComponent } from './client-domi/home-client-domi/home-client-domi.component';
import { CourriersComponent } from './client-domi/courriers/courriers.component';
import { ContratComponent } from './client-domi/contrat/contrat.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { SecretariatComponent } from './client-domi/secretariat/secretariat.component';
import { AssistancecompComponent } from './client-domi/assistancecomp/assistancecomp.component';
import { DevisdemandeComponent } from './client-domi/devisdemande/devisdemande.component';
import { QuestiondemandeComponent } from './client-domi/questiondemande/questiondemande.component'; 
import { CommonModule, registerLocaleData } from '@angular/common';
import { AjouteventComponent } from './admin/ajoutevent/ajoutevent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Pack1DialogComponent } from './admin/pack1-dialog/pack1-dialog.component';
import { Pack2DialogComponent } from './admin/pack2-dialog/pack2-dialog.component';
import { Pack3DialogComponent } from './admin/pack3-dialog/pack3-dialog.component';
import { ConferenceComponent } from './client-domi/conference/conference.component';
import { NgxAgoraModule, AgoraConfig } from 'ngx-agora';
import { TutorielComponent } from './client-domi/tutoriel/tutoriel.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import { UploadListComponent } from './admin/upload-list/upload-list.component';
import { UploadDetailsComponent } from './admin/upload-details/upload-details.component';
import { UploadFormComponent } from './admin/upload-form/upload-form.component';
import { TutoComponent } from './admin/tuto/tuto.component';
import { UploadDetails2Component } from './client-domi/upload-details2/upload-details2.component';
import { UploadForm2Component } from './client-domi/upload-form2/upload-form2.component';
import { UploadList2Component } from './client-domi/upload-list2/upload-list2.component';
import { CompteClientComponent } from './client-domi/compte-client/compte-client.component';
import {StepsetModule} from "stepper-library";
import { NgScrollbarModule } from 'ngx-scrollbar';
import { EmailDialogComponent } from './client-domi/email-dialog/email-dialog.component';
import { MDPDialogComponent } from './client-domi/mdpdialog/mdpdialog.component';
import { NumDialogComponent } from './client-domi/num-dialog/num-dialog.component';
import { CINUploadDialogComponent } from './client-domi/cinupload-dialog/cinupload-dialog.component';
import { PieceFormComponent } from './client-domi/pieces-jus/piece-form/piece-form.component';
import { PieceDetailsComponent } from './client-domi/pieces-jus/piece-details/piece-details.component';
import { PieceListComponent } from './client-domi/pieces-jus/piece-list/piece-list.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccueilHeaderComponent } from './accueil-header/accueil-header.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { StepsComponent } from './steps/steps.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import {StepsModule} from 'primeng/steps';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ChoixPackComponent } from './choix-pack/choix-pack.component';
import { InfoSocieteComponent } from './info-societe/info-societe.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ContratStepComponent } from './contrat-step/contrat-step.component';
import {DropdownModule} from 'primeng/dropdown';

import {PasswordModule} from 'primeng/password';
import {MatStepperModule} from '@angular/material/stepper';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DialogHomeVidComponent } from './dialog-home-vid/dialog-home-vid.component';
import { FactDialogComponent } from './admin/fact-dialog/fact-dialog.component';
import { ContratAdminComponent } from './admin/contrat-admin/contrat-admin.component';
import { CourrierUploadMainComponent } from './admin/CourrierUpload/courrier-upload-main/courrier-upload-main.component';
import { ChoixCategorieComponent } from './choix-categorie/choix-categorie.component'; 
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CourrierAddComponent } from './admin/courrier-add/courrier-add.component';
import {FileUploadModule} from 'primeng/fileupload';
import { ContacttComponent } from './contactt/contactt.component';
import { InfoLegalsComponent } from './info-legals/info-legals.component';
import { CourrComponent } from './client-domi/courr/courr.component';
registerLocaleData(en);


FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);
const agoraConfig: AgoraConfig = {
  AppID: 'b64b7988599846e38b49c1bf9589994a',
};


@NgModule({
  declarations: [
    
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    ColumnComponent,
    PieComponent,
    AreaComponent,
    LineComponent,
    Column2Component,
    MembresComponent,
    Dialog1Component,
    CalendrierComponent,
    FacturesComponent,
    ServicesComponent,
    Dialog2Component,
    NavigationExpertComponent,
    DevisComponent,
    FaqComponent,
    DetailsdialogComponent,
    DonnerdialogComponent,
    QuestionDialogComponent,
    NavigationClientDomiComponent,
    HomeClientDomiComponent,
    CourriersComponent,
    ContratComponent,
    SecretariatComponent,
    AssistancecompComponent,
    DevisdemandeComponent,
    QuestiondemandeComponent,
    AjouteventComponent,
    Pack1DialogComponent,
    Pack2DialogComponent,
    Pack3DialogComponent,
    ConferenceComponent,
    TutorielComponent,
    UploadListComponent,
    UploadDetailsComponent,
    UploadFormComponent,
    TutoComponent,
    UploadDetails2Component,
    UploadForm2Component,
    UploadList2Component,
    CompteClientComponent,
    EmailDialogComponent,
    MDPDialogComponent,
    NumDialogComponent,
    CINUploadDialogComponent,
    PieceFormComponent,
    PieceDetailsComponent,
    PieceListComponent,
    LoginComponent,
    AccueilHeaderComponent,
    InscriptionComponent,
    StepsComponent,
    ChoixPackComponent,
    InfoSocieteComponent,
    PaiementComponent,
    ContratStepComponent,
    LandingPageComponent,
    DialogHomeVidComponent,
    FactDialogComponent,
    ContratAdminComponent,
    CourrierUploadMainComponent,
    ChoixCategorieComponent,
    CourrierAddComponent,
    ContacttComponent,
    InfoLegalsComponent,
    CourrComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    GoogleChartsModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatDialogModule,
    FullCalendarModule,
    NgxSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
    NgbModule,
    FormsModule,
    ScheduleModule,
    NgCircleProgressModule.forRoot({
      radius: 40,
      outerStrokeWidth: 12,
      outerStrokeColor: "white",
      animationDuration: 600,
      
    }),
    GoogleMapsModule,
    MatTreeModule,
    MatExpansionModule,
    CommonModule,
    TooltipModule.forRoot(),
    FontAwesomeModule,
    NgxAgoraModule.forRoot(agoraConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    StepsetModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,StepsModule,InputTextModule,
    MatStepperModule,DropdownModule,PasswordModule,ProgressSpinnerModule,RadioButtonModule,FileUploadModule

    


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,MonthAgendaService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],

})
export class AppModule { }
