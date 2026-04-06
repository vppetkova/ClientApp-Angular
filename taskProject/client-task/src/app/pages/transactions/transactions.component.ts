import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { ClientService } from '../../client.service';
import { AmountPipe } from '../../shared/pipes/amount.pipe';
import { DateTransformPipe } from '../../shared/pipes/dateTransform.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [AmountPipe, DateTransformPipe, FormsModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
// export class TransactionsComponent {
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] | null = [];
  filteredText: string = '';
  openTransactionDetails: Transaction | null = null;
  showDetailsModal: boolean = false;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getTransactions().subscribe((data) => {
      this.transactions = data;
    });
  }

  get filteredTransactions() {
    return this.transactions?.filter(t => 
      t.name.toLowerCase().includes(this.filteredText.toLowerCase()) || 
      t.status.toLowerCase().includes(this.filteredText.toLowerCase())) 
  }

  // showModal(t: Transaction) {
  //   this.openTransactionDetails = t;
  // }

  // closeModal() {
  //   this.openTransactionDetails = null;
  // }

  // onDetailsToggle(t: Transaction): void {
  //   this.showDetailsModal = !this.showDetailsModal;
  //   this.openTransactionDetails = t;
  // }

  getStatusColor(status: string) {
    if (status === 'Completed') {
      return 'green';
    } else if (status === 'Pending') {
      return 'orange';      // I am not using any external libraries, so the color is set to standard CSS orange instead of amber
    } else if (status === 'Failed') {
      return 'red';
    } else {
      return 'black';
    }
  }
}  