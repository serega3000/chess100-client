import { Injectable, NgZone } from '@angular/core';
import { client, api } from "../../api"

interface CurrentUser {
    id: number
    username: string
    email: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _isAuthorized: boolean = false
    private _currentUser: CurrentUser | undefined = undefined

    constructor(
        private ngZone: NgZone,
    ) { }

    refresh() {
        this.ngZone.runOutsideAngular(async () => {
            try {
                this._isAuthorized = await client.isLoggedIn()
                if (!this._isAuthorized) {
                    this._currentUser = undefined
                } else {
                    this._currentUser = await api.users.current()
                }
            } catch (err) {
                console.error(err)
            }
            this.ngZone.run(() => { })
        })
    }

    get isAuthorized() {
        return this._isAuthorized
    }

    get currentUser() {
        return this._currentUser
    }

}
