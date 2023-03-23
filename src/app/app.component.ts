import { Component } from '@angular/core';
import { Wallet } from 'src/model/Wallet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  wallet:Wallet=new Wallet();
  logid:string|undefined=this.wallet.logoutid;
  display(){
    localStorage.removeItem(this.logid!);
    window.alert("Logout Successfully!");
  }
}
