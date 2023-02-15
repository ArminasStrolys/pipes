import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  miles!: number;

  tester = {
    test1: 'TTT',
    test2: 'VVV',
    test3: 'CCC',
  };

  onNameChange(value: Event) {
    const target = value.target as HTMLInputElement;
    this.name = target.value;
  }
  onDateChange(value: Event) {
    const target = value.target as HTMLInputElement;
    this.date = target.value;
  }
  onAmountChange(value: Event) {
    const target = value.target as HTMLInputElement;
    this.amount = +target.value;
  }
  onMilesChange(value: Event) {
    const target = value.target as HTMLInputElement;
    this.miles = +target.value;
  }
}
