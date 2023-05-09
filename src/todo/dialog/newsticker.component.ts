import { Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'dialog-root',
  templateUrl: './newsticker.component.html',
  styleUrls: ['./newsticker.component.css']
})
export class NewstickerComponent {
  selected = '';

  newstickerForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    importance: new FormControl('')
  });

  onSubmit(){
    console.log(this.newstickerForm.value);
  }


}

