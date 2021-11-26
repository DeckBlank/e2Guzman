import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-imput-note',
  templateUrl: './imput-note.component.html',
  styleUrls: ['./imput-note.component.css']
})
export class ImputNoteComponent implements OnInit {
  @Output() onSave = new EventEmitter<any>();
  title:string = '';
  image:string = '';
  description:string = '';
  constructor() { }
  public guardar = ()=>{
    let {title,image,description} = this;
    this.onSave.emit({title,image,description,activa:true});
    this.title='';
    this.image='';
    this.description='';
  }
  ngOnInit(): void {
  }

}
