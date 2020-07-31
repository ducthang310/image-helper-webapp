import { Component, OnInit } from '@angular/core';

interface ZippedItem {
  state: 'none' | 'processing' | 'done';
  url?: string;
}

@Component({
  selector: 'app-landing-page-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  zippedItems: ZippedItem[];

  constructor() {
    this.zippedItems = [
      {state: 'none'}, {state: 'processing'}, {state: 'done'}
    ];
  }

  ngOnInit(): void {
  }

}
