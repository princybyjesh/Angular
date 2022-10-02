import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  UserDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000},
    1001:{acno:1000,username:"anu",password:122,balance:100000},
    1002:{acno:1000,username:"amaal",password:133,balance:100000},
    1003:{acno:1000,username:"ammu",password:113,balance:100000},
  }

  constructor( ) { }
  // logically data
  register(acno:any,username:any,password:any){
let userDetails=this.UserDetails
if(acno in userDetails){
  return false
}
else{
  userDetails[acno]={acno,username,password,balance:0}
  console.log(userDetails);

  return true
  

}
  }

login(acnum:any,psw:any){

  let userDetails=this.UserDetails
  if(acnum in userDetails ){
    console.log(userDetails[acnum]['password']);
    if(psw==userDetails[acnum]['password']){
   return true
    }
    else{
      alert("password incorrect")
      return false
    }
  }
  else{
    alert("user not exist")
    return false
  }
  }
}
