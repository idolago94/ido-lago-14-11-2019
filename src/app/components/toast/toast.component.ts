import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { ALERT } from 'src/assets/variables';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  alertIcon = ALERT;

  toastShow: boolean = false;
  toastContent: string = '';

  constructor( private toastService: ToastService ) { }

  ngOnInit() {
    this.toastService.showToast.subscribe((msg: string) => {
      this.toastContent = msg;
      this.toastShow = true;
      setTimeout(() => {
        this.toastShow = false;
      }, 5000);
    })
  }

}
