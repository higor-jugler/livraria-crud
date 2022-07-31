import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  // deletar(): void {
  //   this.colecaoService.exlcuirId(`${this.colecoes.id}`).subscribe(() => {
  //     this.colecaoService.mensagemSalvado('Pronto')
  //     this.router.navigate(['/colecoes'])
  //   }) 
  // }

  cancel(): void {
    this.router.navigate(["/products"])
  }
}
