import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// on doit importer le produit.component ici pour pouvoir l'utiliser
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

//Importation de Formsmodul pour pouvoir utiliser le ngModel(Two-way binding)
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    
    ProduitsComponent,
    AddProduitComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Ajout du formsModul a la rubrique import 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
