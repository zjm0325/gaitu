import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dengji',
  templateUrl: './dengji.component.html',
  styleUrls: ['./dengji.component.less']
})
export class DengjiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listOfData = [
    {
      a:20,
      b:'CNLT8',
      c:10,
      d:20,
      e:40,
    },
    {
      a:20,
      b:'CNLT8',
      c:10,
      d:20,
      e:40,
    },
    {
      a:20,
      b:'CNLT8',
      c:10,
      d:20,
      e:40,
    },
  ]
}
