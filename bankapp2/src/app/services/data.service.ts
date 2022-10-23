import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  UserDetails:any={
    1000:{acno:1000,username:"amal",password:123,balance:100000,transation:[]},
    1001:{acno:1001,username:"anu",password:122,balance:100000 ,transation:[]},
    1002:{acno:1002,username:"amaal",password:133,balance:100000 ,transation:[]},
    1003:{acno:1003,username:"ammu",password:113,balance:100000 ,transation:[]}
  }

  constructor( ) { 
    this.getDetails()
  }
saveDetails(){


  if(this.UserDetails){
    localStorage.setItem('database',JSON.stringify(this.UserDetails))
  }
  if(this.currentUser){
    localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
  }
  if(this.currentAcno){
    localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
  }
}
getDetails(){
  if(localStorage.getItem('database')){
    this.UserDetails=JSON.parse(localStorage.getItem('database')||'')
  }
  if(localStorage.getItem('currentUser')){
    this.currentUser=JSON.parse(localStorage.getItem('currentUser')||'')
  }
  if(localStorage.getItem('currentAcno')){
    this.UserDetails=JSON.parse(localStorage.getItem('currentAcno')||'')
  }

}


  // logically data
register(acno:any,username:any,password:any){
let userDetails=this.UserDetails
console.log("jjjj");

console.log(userDetails);


if(acno in userDetails){
  return false
}
else{
  userDetails[acno]={acno,username,password,balance:0,transation:[]}
console.log(userDetails);

  this .saveDetails()
  return true
  

}
  }

login(acno:any,psw:any){

  let userDetails=this.UserDetails  
  if(acno in userDetails ){
    console.log(userDetails[acno]['password']);
    if(psw==userDetails[acno]['password']){
      this.currentUser=userDetails[acno]['username']
      this.currentAcno=acno
      this .saveDetails()
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



deposit(acnum:any,pswrd:any,amnt:any){
  let userDetails=this.UserDetails
  var amount=parseInt(amnt)
  if(acnum in userDetails){
  if(pswrd==userDetails[acnum]['password']){
    userDetails[acnum]['balance']+=amount
userDetails[acnum] ['transation'].push({type:'CREDIT',amount})
console.log(this.getTransation);
this .saveDetails()

    return userDetails[acnum]['balance']
  }

  else{
    alert("incurrect password")
  }
}
else{
  alert("user not exist")
  return false
}

}




withdraw(acnum1:any,pswrd1:any,amnt1:any): any{
  let userDetails=this.UserDetails
  var amount=parseInt(amnt1)
  if(acnum1 in userDetails){
  if(pswrd1==userDetails[acnum1]['password']){
    if(userDetails[acnum1]['balance']>=amnt1){
    userDetails[acnum1]['balance']-=amount
    userDetails[acnum1]['transation'].push({type:'DEBIT',amount})
    this .saveDetails()

    return userDetails[acnum1]['balance']
    }
    else{
      alert("insufficient balance")
      return false
    }
  }
  else{
    alert("incurrect password")
  }
  }
else{
  alert("user not exist")
  return false
}
}
getTransation(acno:any){
  this .saveDetails()

return this.UserDetails[acno]['transation']

}
}

