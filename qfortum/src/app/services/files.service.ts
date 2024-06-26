import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(

    private http: HttpClient
  ) { }

   private formUpdate(file : File){
    const form = new FormData();
    form.append('file', file);
    return this.http.post('http://localhost:3333//upload', form);
  }

}
