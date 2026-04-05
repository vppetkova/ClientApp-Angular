export interface Client {
    //Personal Info
    name: string;
    secondName: string;
    //Contact Info
    email: string;
    phone: string;      //string because phone numbers may contain leading zeros, plus signs, etc.
    //Address
    address?: string;   //optional 
    city?: string;      //optional
    country?: string;   //optional
    //Bank Info
    accountNumber: string;
    bankCard: string;
}