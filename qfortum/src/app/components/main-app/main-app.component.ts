import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { buffer } from 'rxjs';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent {

  fileName = '';
  isActive = false;

  constructor(
    private http: HttpClient,
    public fb: FormBuilder,
    public form : FormGroup
  ){}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      photo: [null],
      guide: [null]
   })
 }

  onFileSelected(event : Event) {

    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
      console.log("file selected", input.files[0].name);
      this.fb.group.name.concat(this.fileName);
      input.files[0].arrayBuffer().then((buffer: ArrayBuffer) => {
      })
    }
  }

  activarFlecha() {
    this.isActive = !this.isActive;
  }
}
