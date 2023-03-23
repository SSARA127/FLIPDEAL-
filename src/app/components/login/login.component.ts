import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/model/Wallet';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){}
  wallet:Wallet=new Wallet(); 
  id:number | string="";
  name:String="";
  lockimagesrc="../assets/images/lock.jpg";
  iconimagesrc="../assets/images/greenicon.jpg";
  incorrect:string="";
  registeredid:string=this.id as string;
  register:Wallet=new Wallet();
  registeredObject:string|null="";
  displayDetails():void{
    console.log("displayDetails()");
    console.log("details clicked:" + JSON.stringify(this.wallet));
    this.registeredObject=localStorage.getItem(this.registeredid);
    if(this.registeredObject!=null){
        this.register=JSON.parse(this.registeredObject);
        console.log(this.wallet.password);
        console.log(this.register.password);
        if(this.wallet.password==this.register.password){
            this.incorrect= "Hi, "+this.wallet.name+".You Successfully Logged to Wallet Account!";
            window.alert("Hi, "+this.wallet.name+".You Successfully Logged to Wallet Account!");
            this.router.navigate(['operationsbutton',this.incorrect]);
        }
        else 
            this.incorrect= "Incorrect UserId or Password";
    }
    else 
      this.incorrect= "Incorrect UserId or Password";
    

  }
}
