import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  nomProduit!: string;
  produits!: Produit[];
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(produit => {
      console.log(produit);
      // this.allProduits = produit;  on remplace par la ligne suivante 
      this.produits = produit;
    });
  }

  rechercherProduits() {
    this.produitService.rechercherParNom(this.nomProduit).subscribe(produit => {
      this.produits = produit;
    }
    )
  }

  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter(item =>
      item.nomProduit && item.nomProduit.toLowerCase().includes(filterText) // verification si nomProduit est defini 
    );
  }

}
