import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/books"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 1500,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  
  createNewBook(books: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, books)
  }

  readListBook(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  // readListId(): Observable<Product> {
  //   const url = `${this.baseUrl}/${}`
  //   return this.http.get<Product>(url)
  // }
}
