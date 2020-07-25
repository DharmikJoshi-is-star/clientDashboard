import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthenticatedResponse } from "app/model/AuthenticatedResponse";
import { CredentialResponse } from "app/model/CredentialResponse";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    rootUrl = "http://localhost:8081";
    signedin$ = new BehaviorSubject<AuthenticatedResponse>({
        authenticated: false,
        username: null,
    });
    constructor(private http: HttpClient) {}

    login(credentials: CredentialResponse) {
        return this.http
            .post(`${this.rootUrl}/oauth/custom/token`, credentials, {
                params: {
                    username: credentials.username,
                    password: credentials.password,
                    grant_type: "password",
                },
                headers: {
                    Authorization: "Basic " + btoa("IAM:1234"),
                    "Content-Type": "application/json",
                },
            })
            .pipe(
                tap(() => {
                    this.signedin$.next({
                        username: credentials.username,
                        authenticated: true,
                    });
                })
            );
    }

    checkAuth() {
        return this.http.get<AuthenticatedResponse>(
            `${this.rootUrl}/authenticated`
        );
    }
}
