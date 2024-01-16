import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';



const routes: Routes = [

  // Ajout de la route qui permet d'acceder les produits
  {path : "produits", component : ProduitsComponent},
  
  // Ajout du routing de add-aproduit
  {path : "add-produit",component : AddProduitComponent},

  //Ajout d'un routing par defaut 
  {path : "",redirectTo:"produits", pathMatch :"full"}
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
