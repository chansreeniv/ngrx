import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from "../store/counter.actions";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: number;

  constructor(private store: Store<{ count: {count: number}}>) { 
    this.store.select('count').subscribe(
      response => {
        this.count$ = response.count}
    );
    console.log(this.count$);
    
  }

  increment(){
  this.store.dispatch(new CounterActions.Increment()); 
  console.log(this.count$);
  
  }

  decrement(){
    this.store.dispatch(new CounterActions.Decrement());
  }

  reset(){
    this.store.dispatch(new CounterActions.Reset());
  }
  ngOnInit(): void {
  }

}
