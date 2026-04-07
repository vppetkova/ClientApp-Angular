import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';
import { Client, FieldConfig } from '../../models/client';
import { ClientFormConfig } from '../../config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  fields: FieldConfig[] = ClientFormConfig;
  clientData: Client = {} as Client;
  // hasSuccessMessage: boolean = false;

  constructor(private clientService: ClientService) {}
  
    ngOnInit(): void {
      this.clientService.getClient().subscribe((data) => {
        this.clientData = data;
      });
    }

    // get sections(): string[] {
    //   return ['Personal Info', 'Contact Info', 'Address', 'Bank Info'];
    // }


    // fieldsBySection(section: string): FieldConfig[] {
    //   return this.formConfig.filter(f => f.section === section);
    // }

    onSaveDate(form: any) {
      if (form.valid) {
        console.log('Form updated successfully', this.clientData);
        // this.hasSuccessMessage = true;
      } else {
        console.log('Form invalid');
      }
    }
} 