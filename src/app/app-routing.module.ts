import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RchercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [

  // Ajout de la route qui permet d'acceder les produits
  {path : "produits", component : ProduitsComponent},
  
  // Ajout du routing de add-aproduit
  {path : "add-produit",component : AddProduitComponent},

  //Route pour update-produit 
  {path: "updateProduit/:id", component: UpdateProduitComponent },

  {path:"rechercheParCategorie", component: RchercheParCategorieComponent},
  {path:"rechercheParNom", component:RechercheParNomComponent},
  //Ajout d'un routing par defaut 
  {path : "",redirectTo:"produits", pathMatch :"full"},
  {path :"listeCategorie",component: ListeCategoriesComponent},
  {path: "login",component: LoginComponent}
  
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
