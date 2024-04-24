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
  /*addProduit() {
    console.log(this.newIdCat);
    //this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.produitService.ajouterProduit(this.newProduit);
    this.newProduit.categorie = this.newCategorie;      // Pour ajouter la nouvelle categorie qu'on vient de creer dans notre notre objet newProduit
    this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succés";
    this.router.navigate(['produits']);
  }*/

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
  }
  

  ngOnInit(): void {
    this.produitService.listeCategorie().subscribe(categorie=>{this.categories=categorie;
      console.log(categorie);
    })
  }

}
