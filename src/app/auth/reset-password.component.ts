import { Component, OnInit } from '@angular/core'
import { FormControl } from "@angular/forms"
import { BehaviorSubject } from "rxjs/index"
import { api } from 'src/api'
import { Router } from '@angular/router'

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    busy = new BehaviorSubject<boolean>(false)
    email = new FormControl("")    

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
    }

    get isBusy() {
        return this.busy.asObservable()
    }

    async buttonClicked() {       
        if(this.busy.getValue()) return
        this.busy.next(true)
        try {
            let email = this.email.value
            if(email) {
                let result = await api.users.passwordForgot(email)
                if(result) {
                    alert("Проверьте почту")
                    this.router.navigateByUrl("/login")
                } else {
                    alert("Пользователь не найден")
                }
            }
        } catch(err) {
            alert("Ошибка. Попробуйте еще раз позже.")
        }
        this.busy.next(false)
    }

}
