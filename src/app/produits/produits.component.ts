// Importation de dépendances nécessaires depuis Angular Core
import { Component, OnInit } from '@angular/core';

// Importation de nos classes et services personnalisés
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

// Décoration du composant avec un sélecteur et un chemin vers le template HTML
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})

// Définition de la classe ProduitsComponent qui implémente OnInit
export class ProduitsComponent implements OnInit {

  // Déclaration d'une variable 'produits' de type 'Produit[]' (un tableau de produits)
  produits? : Produit[];

  // Injection du service ProduitService dans le constructeur du composant
  constructor(private produitService: ProduitService) { 
    
    // On peut faire ca ou ajouter un ? dans l'attribut produit
    // this.produits = [];

    
  }

  // Méthode du cycle de vie du composant, appelée lors de son initialisation
  ngOnInit(): void {
   
    // Initialisation de la variable 'produits' en utilisant le service pour récupérer la liste de produits
    this.produits = this.produitService.listeProduit();
  }
}
