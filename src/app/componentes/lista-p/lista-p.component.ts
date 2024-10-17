import { Component,ChangeDetectionStrategy, inject, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductsService } from '../../products.service';
import { products } from '../../Interface_Products';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-lista-p',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,NgFor],
  templateUrl: './lista-p.component.html',
  styleUrl: './lista-p.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaPComponent {

   productos: products[] = [];
   private Servicioproductos = inject(ProductsService);
   public title = '';
   constructor() {
    this.Servicioproductos.ConsultaProductos();
    this.productos = this.Servicioproductos.productos;
    this.title = this.Servicioproductos.lista;
  }
  public get Productos(): products[] {
    return this.Servicioproductos.productos;
  }

}
