import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e2Guzman';
  status: Boolean = true;
  cardsActivos: Array<any> = [];
  cardsNoActivos: Array<any> = [];
  doSave = (card:any)=>{
    console.log(card);
    this.cardsActivos = [
      ...this.cardsActivos, card
    ]
  }
  setStatus = (status:any)=>{
    this.status = status;
    
  }
}
