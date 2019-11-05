import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckcdmx',
  templateUrl: './ckcdmx.component.html',
  styleUrls: ['./ckcdmx.component.less']
})
export class CkcdmxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 6; ++i) {
      this.listOfChildrenData.push({
        a: i+1,
        e: "20'",
        f:'GP',
        h:'IF',
        i:0,
        k:0,
        l:'QZAT'
      });
    }
  }

  listOfParentData:any=[
    {
      a:'ATLOZTJ0500381',
      b:'',
      c:'',
      d:'',
      e:'CNQZJ',
      f:'',
      g:'',
      h:'CNTSN',
      i:'',
    }
  ];
  listOfChildrenData:any=[];


}
