import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-rcherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RchercheParCategorieComponent implements OnInit {
  idCategorie!: number;
  constructor(private produitService: ProduitService) { }
  categories!: Categorie[];
  produits!: Produit[];

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(cats => {
      this.categories = cats._embedded.categories;
      console.log(cats);
    });
  }
  onChange() {
    this.produitService.rechercheParCategorie(this.idCategorie)
    .subscribe(prods => {
       this.produits = prods });
  }

}
