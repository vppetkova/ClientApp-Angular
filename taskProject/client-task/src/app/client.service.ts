import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "./models/client";
// import { catchError } from 'rxjs';
import { Transaction } from "./models/transaction";
import { catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class ClientService {
    constructor(private http: HttpClient) {}

    getClient() {
        return this.http.get<Client>('client.json').pipe(
            catchError(error => {
                console.log('Error in client requiest', error);
                return throwError(() => new Error('Failed to load client data'));
            })
        ); 
    }

    getTransactions() {
        
        return this.http.get<Transaction[]>('transactions.json'); //handle errors
    }
}