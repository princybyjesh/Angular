import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9+]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]

})
  UserDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1001,username:"anu",password:122,balance:100000},
    1002:{acno:1002,username:"amaal",password:133,balance:100000},
    1003:{acno:1003,username:"ammu",password:113,balance:100000},
  }
  
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
login(){
  var acnum=this.loginForm.value.acno
  var psw=this.loginForm.value.psw
 const result= this.ds.login(acnum,psw)
if(this.loginForm.valid){
 if(result){
  alert("login success")
  this.router.navigateByUrl('dashboard')
}
}
else{
  alert("invalid form")
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

