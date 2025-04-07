import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any[] = [];
  showModal = false;
  editMode = false;
  selectedProduct: any = { id: 0, name: '', description: '', price: 0 };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  openModal(product?: any) {
    if (product) {
      this.selectedProduct = { ...product };
      this.editMode = true;
    } else {
      this.selectedProduct = { id: (this.products.length + 1).toString(), name: '', description: '', price: 0 };
      this.editMode = false;
    }
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  saveProduct() {
    if (this.editMode) {
      this.productService.updateProduct(this.selectedProduct).subscribe(() => {
        this.loadProducts();
      });
    } else {
      this.productService.addProduct(this.selectedProduct).subscribe(() => {
        this.loadProducts();
      });
    }
    this.closeModal();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }
}
