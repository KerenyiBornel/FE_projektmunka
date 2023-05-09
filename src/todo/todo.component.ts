import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NewstickerComponent} from "./dialog/newsticker.component";

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private matDialog:MatDialog) {

  }
  openDialog(){
    const dialogAdatok = this.matDialog.open(NewstickerComponent,{
      maxHeight: '80vh',
      width: '500px',
    });

    dialogAdatok.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    });
  }

}

