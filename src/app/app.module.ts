import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// on doit importer le produit.component ici pour pouvoir l'utiliser
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

//Importation de Formsmodul pour pouvoir utiliser le ngModel(Two-way binding)
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

import {HttpClientModule} from '@angular/common/http';
import { RchercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RchercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCategoriesComponent,
    UpdateCategorieComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,               // Ajout du formsModul a la rubrique import 
    HttpClientModule           // import de HttpClientModule pour la cosnsomation de nos apiRest 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
