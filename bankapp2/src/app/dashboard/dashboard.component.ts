import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

depositForm=this.fb.group({
  acnum:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pswrd:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]

})
Formwithdraw=this.fb.group({
  acnum1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  pswrd1:['',[Validators.required,Validators.pattern('[0-9]+')]],
  amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]

})

  constructor(private ds:DataService,private dp:DataService,private fb:FormBuilder) { 
    this.user=this.ds.currentUser
  }


  ngOnInit(): void {
  }
  deposit(){
var acnum=this.depositForm.value.acnum
var pswrd=this. depositForm.value.pswrd
var amnt=this.depositForm.value.amnt
const result=this.ds.deposit(acnum,pswrd,amnt)
if(this.depositForm.valid){
if(result){
  alert(`${amnt} is credited,new balance is ${result} `)
}
}
else{
  alert("form invalid")
}
  }

withdraw(){
  var acnum1=this.acnum1
  var pswrd1=this.pswrd1
  var amnt1=this.amnt1
  const result1=this.dp.withdraw(acnum1,pswrd1,amnt1)
  if(this.Formwithdraw.valid){
  if(result1){
    alert(`${amnt1} is debited,new balance is ${result1} `)

}
  }
 else{
  alert("invalid form")
 } 
}
}