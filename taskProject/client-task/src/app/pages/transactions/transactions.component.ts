import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
// export class TransactionsComponent implements OnInit {
  // transactions: Transaction[] | null = [];
  // filteredText: string = '';
  // openTransactionDetails: Transaction | null = null;

  // constructor(private clientService: ClientService) {}

  // ngOnInit(): void {
  //   this.clientService.getTransactions().subscribe((data) => {
  //     this.transactions = data;
  //   });
  // }

  // get filteredTransactions() {
  //   return this.transactions?.filter(t => 
  //     t.name.toLowerCase().includes(this.filteredText.toLowerCase()) || 
  //     t.status.toLowerCase().includes(this.filteredText.toLowerCase())) 
  // }

  // showModal(t: Transaction) {
  //   this.openTransactionDetails = t;
  // }

  // closeModal() {
  //   this.openTransactionDetails = null;
  // }

  // getStatusColor(status: string) {
  //   if (status === 'Completed') {
  //     return 'green';
  //   } else if (status === 'Pending') {
  //     return 'amber';
  //   } else if (status === 'Failed') {
  //     return 'red';
  //   } else {
  //     return 'black';
  //   }
  // }
}  