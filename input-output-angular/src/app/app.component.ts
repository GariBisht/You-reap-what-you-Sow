import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  channelParent = "";

  filterByType = '';
  filteredItems = [];
  items = [
    { name: 'White is often associated with purity, innocence, and goodness', type: 'color' },
    { name: 'Consistently practicing honesty and integrity resulted in earning trust and respect', type: 'good' },
    { name: 'Positive actions lead to positive outcomes in the long run', type: 'good' },
    { name: 'Choosing to be kind and compassionate towards others', type: 'good' },
    { name: 'Hatred: Souls poisoned, compassion forsaken.', type: 'bad' },
    { name: 'Green is often associated with growth, renewal, and vitality', type: 'color' },
    { name: 'Cruelty: Hearts wounded, kindness forgotten.', type: 'bad' },
    { name: 'Purple is often associated with royalty, spirituality, and luxury', type: 'color' },
    { name: 'Karma echoes: Deeds return, shadows linger', type: 'bad' },
    { name: 'Suffering multiplies: Pain spreads, empathy lost.', type: 'bad' },
    { name: 'Black is often associated with darkness, mystery, and negativity', type: 'color' },
    { name: 'Embracing gratitude and expressing appreciation for the blessings in life', type: 'good' },
    { name: 'Investing time and effort into self-improvement and personal growth', type: 'good' },
  ];
  selectedItem: any;

  ngOnInit() {
    this.filteredItems = [...this.items];
  }

  filterBy(type) {
    this.filteredItems = [...this.items.filter((x) => x.type === type)];
  }

  selectItem(item) {
    this.selectedItem = item;
  }
}
