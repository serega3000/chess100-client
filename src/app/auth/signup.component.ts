import { Component, OnInit } from '@angular/core';
import { api } from "../../api"

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    username: string = ""
    email: string = ""

    constructor() { }

    async signup() {
        try {
            let result = await api.users.register({
                username: this.username,
                email: this.email
            })
            if(result) {
                alert("Проверьте почту")
            } else {
                alert("Регистрация не удалася")
            }
        } catch(err) {
            alert("Ошибка сервера")
        }    
    }

    ngOnInit() {
    }

}
