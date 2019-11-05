import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zczy',
  templateUrl: './zczy.component.html',
  styleUrls: ['./zczy.component.less']
})
export class ZczyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listOfData = [
    {
      key: '1',
      name: "20'",
      a:0,
      b:0,
      c:279,
      d:0,
      e:279,

    },
    {
      key: '2',
      name: "40'",
      a:0,
      b:62,
      c:0,
      d:0,
      e:62,

    },
    {
      key: '3',
      name: "45'",
      a:0,
      b:0,
      c:0,
      d:0,
      e:0,

    },
    {
      key: '4',
      name: "合计'",
      a:0,
      b:341,
      c:0,
      d:0,
      e:341,

    },
  ];

  listOfData2 = [
    {
      key: '1',
      name2: "20'",
      a2:0,
      b2:0,
      c2:22,
      d2:0,
      e2:22,

    },
    {
      key: '2',
      name2: "40'",
      a2:0,
      b2:0,
      c2:0,
      d2:0,
      e2:0,

    },
    {
      key: '3',
      name2: "45'",
      a2:0,
      b2:0,
      c2:0,
      d2:0,
      e2:0,

    },
    {
      key: '4',
      name2: "合计'",
      a2:0,
      b2:22,
      c2:0,
      d2:0,
      e2:22,

    },
  ];
}
