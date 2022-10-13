import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
uname=""
acno=""
psw=""
// model to registration form
registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z+]')]],acno:['',[]],pswd:['',[]]
})
  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(): void{
  alert("registerd")
  var uname=this.registerForm.value.uname
  var acno=this.registerForm.value.acno
  var psw=this.registerForm.value.pswd
  const result= this.ds.register(acno,uname,psw)
if(result){
  alert("registered")
  this.router.navigateByUrl('')
}
else{
  alert('user already exist')
}
}
}
