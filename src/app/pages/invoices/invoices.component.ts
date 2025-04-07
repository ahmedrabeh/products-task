import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceService } from '../../services/invoices.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {
  invoices: any[] = [];
  showModal = false;
  editMode = false;
  selectedInvoice: any = { id: 0, number: '', total: 0, date: '' };

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.loadInvoices();
  }

  loadInvoices() {
    this.invoiceService.getInvoices().subscribe(data => {
      this.invoices = data;
    });
  }

  openModal(invoice?: any) {
    if (invoice) {
      this.selectedInvoice = { ...invoice };
      this.editMode = true;
    } else {
      this.selectedInvoice = { id: (this.invoices.length + 1).toString(), number: '', total: 0, date: '' };
      this.editMode = false;
    }
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveInvoice() {
    if (this.editMode) {
      this.invoiceService.updateInvoice(this.selectedInvoice).subscribe(() => {
        this.loadInvoices();
      });
    } else {
      this.invoiceService.addInvoice(this.selectedInvoice).subscribe(() => {
        this.loadInvoices();
      });
    }
    this.closeModal();
  }

  deleteInvoice(id: number) {
    this.invoiceService.deleteInvoice(id).subscribe(() => {
      this.loadInvoices();
    });
  }
}
