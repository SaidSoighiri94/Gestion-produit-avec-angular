import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styles: [
  ]
})
export class ListeCategoriesComponent implements OnInit {
  categories! : Categorie[];
  updatedCat:Categorie = {"idCat":0,"nomCat":""};

  constructor( private produitSeverice: ProduitService) { }

  ngOnInit(): void {
    this.chargerCategorie();
  }

  chargerCategorie(){
    this.produitSeverice.listeCategories().subscribe(
      cats => {this.categories = cats._embedded.categories;
        console.log(cats);
      }
    );
  }

  categorieUpdated(categorie:Categorie){
    console.log("categrie recu deu composant updateCategorie",categorie);
    this.produitSeverice.ajouterCategorie(categorie).subscribe(()=>this.chargerCategorie())
  }
}
