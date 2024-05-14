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

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
}

rechercherProduits(){
  this.produitService.rechercherParNom(this.nomProduit).subscribe(produit =>this.produits=produit);
}
}