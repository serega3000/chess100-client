import { Component } from '@angular/core';
import { api } from "../api"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'chess100-client';

    async callApi() {
        let result = await api.helloWorld("asd")
        alert(result)
    }
}
