import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  showToast = new Subject();

  constructor() { }

  handleError(error) {
    if(error.status == 0 || 
       error.status == 400 || 
       error.status == 401 || 
       error.status == 403 || 
       error.status == 404 || 
       error.status == 500) {
      this.showToast.next('Connection Error...');
    }
    else if(error.code == 1) {
      this.showToast.next(`${error.message}. You can try search any other location.`)
    } else this.showToast.next(error.message);
  }
}
