import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Hola Counter</h1>
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;
  static readonly COUNTER_DEFAULT_VALUE: number = 10;

  increaseBy( value: number = 1): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = CounterComponent.COUNTER_DEFAULT_VALUE;
  }
}
