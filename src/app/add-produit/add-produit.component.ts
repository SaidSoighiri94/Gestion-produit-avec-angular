import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  categories!: Categorie[];
  newIdCat!: number;
  message!: string;
  newCategorie!: Categorie;
  constructor(private produitService: ProduitService,
    private router: Router) { }

  addProduit(){
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
  }
  

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe(categorie => {console.log(categorie);
      this.categories = categorie._embedded.categories;
    })
  }

}
