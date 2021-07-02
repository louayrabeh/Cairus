import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { MembresComponent } from './admin/membres/membres.component';
import { CalendrierComponent } from './admin/calendrier/calendrier.component';
import { FacturesComponent } from './admin/factures/factures.component';
import { ServicesComponent } from './admin/servicess/services.component';
import { DevisComponent } from './expert/devis/devis.component';
import { FaqComponent } from './expert/faq/faq.component';
import { HomeClientDomiComponent } from './client-domi/home-client-domi/home-client-domi.component';
import { CourriersComponent } from './client-domi/courriers/courriers.component';
import { ContratComponent } from './client-domi/contrat/contrat.component';
import { SecretariatComponent } from './client-domi/secretariat/secretariat.component';
import { AssistancecompComponent } from './client-domi/assistancecomp/assistancecomp.component';
import { ConferenceComponent } from './client-domi/conference/conference.component';
import { TutorielComponent } from './client-domi/tutoriel/tutoriel.component';
import { TutoComponent } from './admin/tuto/tuto.component';
import { CompteClientComponent } from './client-domi/compte-client/compte-client.component';
import { ChoixPackComponent } from './choix-pack/choix-pack.component';
import { InfoSocieteComponent } from './info-societe/info-societe.component';
import { ContratStepComponent } from './contrat-step/contrat-step.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ContratAdminComponent } from './admin/contrat-admin/contrat-admin.component';
import { CourrierUploadMainComponent } from './admin/CourrierUpload/courrier-upload-main/courrier-upload-main.component';
import { StepsComponent } from './steps/steps.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ChoixCategorieComponent } from './choix-categorie/choix-categorie.component';
import { ContacttComponent } from './contactt/contactt.component';
import { InfoLegalsComponent } from './info-legals/info-legals.component';
import { CourrComponent } from './client-domi/courr/courr.component';


 
const routes: Routes = [
  {path :'home',component:HomeComponent},
  {path :'membres',component:MembresComponent},
  {path :'calendrier',component:CalendrierComponent},
  {path :'factures',component:FacturesComponent},
  {path :'services',component:ServicesComponent},
  {path :'devis',component:DevisComponent},
  {path :'faq',component:FaqComponent},
  {path :'HomeClientDomiciliation',component:HomeClientDomiComponent},
  {path :'Courriers',component:CourriersComponent},
  {path :'Contrat',component:ContratComponent},
  {path :'secretariat',component:SecretariatComponent},
  {path :'assistanceComp',component:AssistancecompComponent},
  {path :'conference',component:ConferenceComponent},
  {path :'tutoriel',component:TutorielComponent},
  {path :'Tuto',component:TutoComponent},
  {path :'CompteClient',component:CompteClientComponent},
  {path :'ChoixPack',component:ChoixPackComponent},
  {path :'InfoSociete',component:InfoSocieteComponent},
  {path :'ContratStep',component:ContratStepComponent},
  {path :'Paiement',component:PaiementComponent},
  {path :'ContratAdmin',component:ContratAdminComponent},
  {path :'login',component:LoginComponent},
  {path :'LandingPage',component:LandingPageComponent},
  {path :'Steps',component:StepsComponent},
  {path :'Inscription',component:  InscriptionComponent},
  
  {path :'CourrierUploadMain',component:CourrierUploadMainComponent},
  {path :'ChoixCategorie',component:  ChoixCategorieComponent},
  {path :'Contactt',component:  ContacttComponent},
  {path :'info',component:  InfoLegalsComponent},
  {path :'courr',component:  CourrComponent},




  


  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
