import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transations',
  templateUrl: './transations.component.html',
  styleUrls: ['./transations.component.css']
})
export class TransationsComponent implements OnInit {
acno:any
transation:any
  constructor(private ds:DataService){ 
this.acno=this.ds.currentAcno
this.transation=this.ds.getTransation(this.acno)
console.log(this.transation);

 }

  ngOnInit(): void {
  }

}
