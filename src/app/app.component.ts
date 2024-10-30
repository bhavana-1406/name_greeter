import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import {actionfun} from './name.action'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:Observable<{uname:string}>
  bool:boolean=false
  constructor(private store:Store<{uname:any}>){
    this.name=this.store.select("uname")
    console.log(this.name)
  }
  
  getinginfo(info:HTMLInputElement){
    this.bool=!this.bool
    let info1:any=info.value
    this.store.dispatch(actionfun({uname:info1}))
  }
}
