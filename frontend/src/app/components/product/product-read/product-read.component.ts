import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []

  displayedColumns = ['id', 'name', 'price', 'edit']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.readListBook().subscribe(product => {
      this.products = product
      console.log(product)
    })
  }

}
