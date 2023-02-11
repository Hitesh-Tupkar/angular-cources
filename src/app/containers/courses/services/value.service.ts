import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  public getValue(){
    return ['mango', 'apple'];
  }
}
