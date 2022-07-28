import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMenssage(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 1500,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }  
}
