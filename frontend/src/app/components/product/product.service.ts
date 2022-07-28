import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Prodruct } from './product.model';

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
  
  createNewBook(books: Prodruct): Observable<Prodruct> {
    return this.http.post<Prodruct>(this.baseUrl, books)
  }
}
