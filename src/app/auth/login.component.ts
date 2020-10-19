import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { client } from "../../api"
import { AuthService } from "./auth.service"

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string
    password: string

    constructor(
        private router: Router,
        private authService: AuthService,
    ) { }

    ngOnInit() {
    }

    async login() {
        try {
            let result = await client.login(`${this.username}|||${this.password}`)
            console.log("result", result)
            this.authService.refresh()
            if (result) {
                this.router.navigateByUrl("/")                
            } else {
                alert("Не удалось войти")
            }
        } catch (err) {
            console.error(err)
        }
    }

}
