import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: []
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

  // Ajout des champs de categorie 
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe( categorie =>{this.categories = categorie._embedded.categories;
      console.log(categorie)
    } )
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe(prod => {
      this.currentProduit = prod;
      this.updatedCatId = this.currentProduit.categorie.idCat;
    });
  }

  // Methode update produit
  updateProduit() {
    this.currentProduit.categorie = this.categories.find(cat => cat.idCat==this.updatedCatId)!;
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produits']);
    });
  }

}
