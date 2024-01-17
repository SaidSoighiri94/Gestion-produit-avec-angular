import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[]; //un tableau de Produi
  produit!: Produit;
  constructor() {
    this.produits = [
      { idProduit: 1, nomProduit: "Pc Asus", prixProduit: 4600, dateCreation: new Date("12-23-2023") },
      { idProduit: 2, nomProduit: "Samsung Tablette", prixProduit: 2333, dateCreation: new Date("11/16/2020") },
      { idProduit: 3, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010") }
    ]
  }

  // on va creer une methode qui va qui va nous retourner un tablea de produit
  listeProduit(): Produit[] {
    return this.produits;
  }
  ajouterProduit(produit: Produit) {
    this.produits.push(produit);
  }
  supprimerProduit(prod: Produit) {
    //Supprimer le produit du tableau 

    const index = this.produits.indexOf(prod, 0);
    if (index > -1) {
      this.produits.splice(index, 1);
    }
  }

  //Ajout d'une methode consulter produit
  consulterProduit(id: number): Produit {
    return this.produit = this.produits.find(p => p.idProduit == id)!;
    // return this.produit;

  }
  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.ajouterProduit(p);
  }
}
