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
  categories! : Categorie[];
  updatedCatId! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private produitService: ProduitService) { }

  ngOnInit(): void {
   // console.log(this.activatedRoute.snapshot.params['id']);
    //this.categories = this.produitService.listeCategories();
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).subscribe( prod => {
      this.currentProduit = prod;
    });

    this.updatedCatId = this.currentProduit.categorie.idCat;
    //console.log(this.currentProduit);
  }

  //methode update produit
  updateProduit(){
    //this.currentProduit.categorie = this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(["produits"]);
  }

}
