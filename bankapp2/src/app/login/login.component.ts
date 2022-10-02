import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="your perfect banking partner"
acnt="enter your acnumber"
acno=''
psw=''
  UserDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1000,username:"anu",password:122,balance:100000},
    1002:{acno:1000,username:"amaal",password:133,balance:100000},
    1003:{acno:1000,username:"ammu",password:113,balance:100000},
  }
  
  constructor(private router:Router,private ds:DataService) { 

    
    
  }

  ngOnInit(): void {
  }
  
login(){
  var acnum=this.acno
  var psw=this.psw
 const result= this.ds.login(acnum,psw)
if(result){
  alert("login success")
  this.router.navigateByUrl('dashboard')
}
}
}
// login(a:any,b:any){
//   console.log(a.value);
//   console.log(b.value);
  
  
//   var acnum=a.value
//   var psw=b.value
//   let userDetails=this.UserDetails
//   if(acnum in userDetails ){
//     if(psw==userDetails[acnum]['password']){
//       alert("login succcess")
//     }
//     else{
//       alert("password incorrect")
//     }
//   }
//   else{
//     alert("user not exist")
//   }
// }
// accnoChange(event:any){
// this.acno=event.target.value
// console.log(this.acno)
// }
// pswChange(event:any){
// this.psw=event.target.value
// console.log(this.psw);

// }
// }

