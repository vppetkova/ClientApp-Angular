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
  clientDate: Client | null = null;

  constructor(private clientService: ClientService) {}
  
    ngOnInit(): void {
      this.clientService.getClient().subscribe((data) => {
        this.clientDate = data;
      });
    }

    get sections(): string[] {
      return ['Personal Info', 'Contact Info', 'Address', 'Bank Info'];
    }

    formConfig: FieldConfig[] = ClientFormConfig;

    fieldsBySection(section: string): FieldConfig[] {
      return this.formConfig.filter(f => f.section === section);
    }

    onSaveDate() {
      console.log('Successfully saved date');
    }
} 