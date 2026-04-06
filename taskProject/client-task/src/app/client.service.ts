import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "./models/client";
// import { catchError } from 'rxjs';
import { Transaction } from "./models/transaction";


@Injectable({
    providedIn: 'root'
})

export class ClientService {
    constructor(private http: HttpClient) {}

    // getClient() {
    //     return this.http.get<Client>('assets/client.json'); //handle errors
    // }

    getTransactions() {
        
        return this.http.get<Transaction[]>('transactions.json'); //handle errors
    }
}