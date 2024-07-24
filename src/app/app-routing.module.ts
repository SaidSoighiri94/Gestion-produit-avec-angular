import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RchercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';

const routes: Routes = [
  {path : "produits", component : ProduitsComponent},                   // Ajout de la route qui permet d'acceder les produits
  {path : "add-produit",component : AddProduitComponent, 
          canActivate:[ProduitGuard]},                                  // Ajout du routing de add-aproduit
  {path: "updateProduit/:id", component: UpdateProduitComponent },      //Route pour update-produit
  {path:"rechercheParCategorie", component: RchercheParCategorieComponent},
  {path:"rechercheParNom", component:RechercheParNomComponent},
  
  {path : "",redirectTo:"produits", pathMatch :"full"},                 //Ajout d'un routing par defaut 
  {path :"listeCategorie",component: ListeCategoriesComponent},
  {path: "forbidden",component:ForbiddenComponent },
  {path: "login",component: LoginComponent}
  
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
