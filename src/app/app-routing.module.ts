import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RchercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';



const routes: Routes = [

  // Ajout de la route qui permet d'acceder les produits
  {path : "produits", component : ProduitsComponent},
  
  // Ajout du routing de add-aproduit
  {path : "add-produit",component : AddProduitComponent},

  //Route pour update-produit 
  {path: "updateProduit/:id", component: UpdateProduitComponent },

  {path:"rechercheParCategorie", component: RchercheParCategorieComponent},
  //Ajout d'un routing par defaut 
  {path : "",redirectTo:"produits", pathMatch :"full"}
  
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
