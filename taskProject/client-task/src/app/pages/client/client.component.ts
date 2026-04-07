import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Client, FieldConfig } from '../../models/client';
import { ClientFormConfig } from '../../config';
import { FormsModule, NgForm } from '@angular/forms';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, LoaderComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  fields: FieldConfig[] = ClientFormConfig;
  clientData: Client = {} as Client;
  errorMessage: string | null = null;
  isReady: boolean = false;

  constructor(private clientService: ClientService) {}

    ngOnInit(): void {
      this.clientService.getClient().subscribe({ 
        next: (data) => {
          this.clientData = data;
          this.isReady = true;
        }, 
        error: (err) => {
          this.errorMessage = err.message;
          this.isReady = true;
        }
      });
    }

    //Using to group fields logically for better UX
    get sections(): string[] {
      return ['Personal Info', 'Contact Info', 'Address', 'Bank Info'];
    }

    onSaveDate(form: NgForm) {
      if (form.valid) {
        console.log('Form updated successfully', this.clientData);
      } else {
        console.log('Form invalid');
      }
    }
} 