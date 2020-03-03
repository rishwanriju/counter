import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cnter',
  templateUrl: './cnter.component.html',
  styleUrls: ['./cnter.component.css']
})
export class CnterComponent implements OnInit {
  count : number ;
  constructor() { }

  ngOnInit():void { this.count = 0;
  }
    increment(){
      
      this.count +=1;

    }
    
    decrement(){
      this.count -=1
    }

}

  

