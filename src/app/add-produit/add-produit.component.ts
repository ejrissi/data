import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();
  constructor(private produitService: ProduitService,private a:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['produits']);
    });
    }

  // addProduit() {
  //   //console.log(this.newProduit);
  //   this.produitService.ajouterProduit(this.newProduit);
  //   this.router.navigate(['produits']);

  // }

}
