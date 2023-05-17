import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'dialog-root',
  templateUrl: './newsticker.component.html',
  styleUrls: ['./newsticker.component.css']
})
export class NewstickerComponent {
  selected = '';

  constructor(
    public dialogRef: MatDialogRef<NewstickerComponent>
  ) {
  }

  // submitted = false;

  newstickerForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(new Date()),
    importance: new FormControl('Kevésbé fontos')
  });

  @Output() formValuesSubmitted: EventEmitter<any> = new EventEmitter<any>();
  onSubmit() {
    this.dialogRef.close(this.newstickerForm.value)
  }

  ngOnInit() {
    this.newstickerForm.get('name')?.setValidators([Validators.required]);
  }
}
