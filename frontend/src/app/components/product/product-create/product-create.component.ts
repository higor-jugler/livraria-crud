import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.service.showMenssage('Salvo!')
  } 

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
