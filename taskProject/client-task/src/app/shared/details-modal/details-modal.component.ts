import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { AmountPipe } from '../pipes/amount.pipe';
import { DateTransformPipe } from '../pipes/dateTransform.pipe';

@Component({
  selector: 'app-details-modal',
  standalone: true,
  imports: [AmountPipe, DateTransformPipe],
  templateUrl: './details-modal.component.html',
  styleUrl: './details-modal.component.css'
})
export class DetailsModalComponent {
    @Input() transactionInfo: Transaction | null = null;    //Receives data from the Transaction component

    @Output() closeModal = new EventEmitter<void>();        //Handles closing the modal

    onClose (): void {
        this.closeModal.emit();
    }

    getStatusColor(status: string | null) {
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