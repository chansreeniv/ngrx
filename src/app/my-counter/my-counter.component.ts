import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CounterActions from "../store/counter.actions";

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  count$: Observable< number>;

  constructor(private store: Store<{count: number}>) { 
    this.count$ = this.store.select('count');
  }

  increment(){
  this.store.dispatch(new CounterActions.Increment()); 
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
