import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddamountComponent } from './components/addamount/addamount.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { DisplayComponent } from './components/display/display.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetAllWalletComponent } from './components/get-all-wallet/get-all-wallet.component';
import { GetWalletByIdComponent } from './components/get-wallet-by-id/get-wallet-by-id.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OperationsbuttonComponent } from './components/operationsbutton/operationsbutton.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { UpdateComponent } from './components/update/update.component';
import { UpdateidComponent } from './components/updateid/updateid.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'help', component: HelpComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: 'addAmount', component: AddamountComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'page-not-found',component:PageNotFoundComponent}, 
  { path: 'get-wallet-by-id',component:GetWalletByIdComponent},
  { path: 'getAllWallet',component:GetAllWalletComponent},
  {path: 'update/:id',component:UpdateComponent},
  {path: 'updateid',component:UpdateidComponent},
  {path: 'display/:wallet',component:DisplayComponent},
  { path: 'operationsbutton/:incorrect', component: OperationsbuttonComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
