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

export interface FieldConfig {
    name: keyof Client;    //using keyof ensures that each field name matches a valid property of the Client interface
    label: string;
    type: string;
    readonly: boolean;
    required?: boolean;
    minLength?: number;
    pattern?: string;
    section: string;  //to group related fields logically, making the form more structured and easier to read and maintain
}