export type TransactionType = 'Credit' | 'Debit';
export type TransactionStatus = 'Completed' | 'Pending' | 'Failed';

export interface Transaction {
    id: number;
    date: string;
    name: string;
    city: string;
    bic: string;
    bankCard: string; //string because contains masked characters and spaces
    amount: number;
    type: TransactionType;
    status: TransactionStatus;
}

// I kept the original order because it reflects a logical grouping of transaction information:
// the identifiers first (id, date), then recipient info (name, city, bic, bankCard), and finally 
// transaction details (amount, type, status). This way, the data is structured consistently and is
// easy to read. If we wanted to prioritize user-relevent info, we could reorder fields like date,
// name, and amount to highlight the most important details.