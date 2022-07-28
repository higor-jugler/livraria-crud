import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  product: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readListBook().subscribe(product => {
      this.product = product
      console.log(product)
    })
  }

}
