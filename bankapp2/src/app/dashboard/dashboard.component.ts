import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user=""
  acnum=""
pswrd=""
amnt=""

acnum1=""
pswrd1=""
amnt1=""
  userDetails: any;


  constructor(private ds:DataService,private dp:DataService) { 
    this.user=this.ds.currentUser
  }


  ngOnInit(): void {
  }
  deposit(){
var acnum=this.acnum
var pswrd=this.pswrd
var amnt=this.amnt
const result=this.ds.deposit(acnum,pswrd,amnt)
if(result){
  alert(`${amnt} is credited,new balance is ${result} `)
}

  }

withdraw(){
  var acnum1=this.acnum1
  var pswrd1=this.pswrd1
  var amnt1=this.amnt1
  const result1=this.dp.withdraw(acnum1,pswrd1,amnt1)
  if(result1){
    alert(`${amnt1} is debited,new balance is ${result1} `)

}
}
}