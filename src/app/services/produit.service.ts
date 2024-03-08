import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[]; //un tableau de Produits
  produit!: Produit;
  categories: Categorie[];  // un Tableau de categorie 
  constructor() {
    this.categories = [
      { idCat: 1, nomCat: "Pc" },
      { idCat: 1, nomCat: "Imprimante" }
    ];

    this.produits = [
      {
        idProduit: 1, nomProduit: "Pc Asus", prixProduit: 4600, dateCreation: new Date("12-23-2023"),
        categorie: { idCat: 1, nomCat: "PC" }
      },
      {
        idProduit: 2, nomProduit: "Samsung Tablette", prixProduit: 2333, dateCreation: new Date("11/16/2020"),
        categorie: { idCat: 1, nomCat: "Pc" }
      },
      {
        idProduit: 3, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"),
        categorie: { idCat: 2, nomCat: "Imprimante" }
      }
    ];
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
  trierProduits() {                        // Ajout d'une methode de tri des produits
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1
      }
      return 0;
    });
  }

  updateProduit(p: Produit) {
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }

  // Ajout de la listes des categorie dans le menu deroulant
  listeCategories():Categorie[] {
    return this.categories;
  }
  consulterCategorie(idCat:number): Categorie{
    return this.categories.find(cat => cat.idCat ==idCat)!;
  }
}
