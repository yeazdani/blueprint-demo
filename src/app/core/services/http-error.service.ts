import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(
  ) { }

  showError(errors: string): void {
    // to show the errors using snackbar or dialog
  }
}
