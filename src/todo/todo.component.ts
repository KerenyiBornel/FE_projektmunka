import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private matDialog:MatDialog) {

  }
  openDialog(){
    this.matDialog.open(DialogComponent,{
      width: '500px',
    })
  }

}

