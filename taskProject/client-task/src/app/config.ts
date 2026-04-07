import { FieldConfig } from "./models/client"

export const ClientFormConfig: FieldConfig[] = [
    //Personal Info
    { name: 'name', label: 'First Name', type: 'text', readonly: false, required: true, section: 'Personal Info'},
    { name: 'secondName', label: 'Second Name', type: 'text', readonly: false, required: true, section: 'Personal Info'},

    //Contact Info
    { name: 'email', label: 'Email', type: 'email', readonly: false, required: true, section: 'Contact Info'},
    { name: 'phone', label: 'Phone', type: 'tel', readonly: false, required: true, minLength: 10, section: 'Contact Info'},

    //Address
    { name: 'address', label: 'Address', type: 'text', readonly: false, section: 'Address'},
    { name: 'city', label: 'City', type: 'text', readonly: false, section: 'Address'},
    { name: 'country', label: 'Country', type: 'text', readonly: false, section: 'Address'},

    //Bank Info
    { name: 'accountNumber', label: 'Account Number', type: 'text', readonly: true, section: 'Bank Info'},
    { name: 'bankCard', label: 'Bank Card', type: 'text', readonly: true, section: 'Bank Info'},
]