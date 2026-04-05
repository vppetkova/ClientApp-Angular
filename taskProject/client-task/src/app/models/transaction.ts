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