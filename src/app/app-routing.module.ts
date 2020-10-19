import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { IndexComponent } from "./index.component"
import { LoginComponent } from "./auth/login.component"
import { ResetPasswordComponent } from "./auth/reset-password.component"
import { SignupComponent } from "./auth/signup.component"

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'reset_password', component: ResetPasswordComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
