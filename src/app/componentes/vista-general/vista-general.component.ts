import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { products } from '../../Interface_Products';
import { ProductsService } from '../../products.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vista-general',
  standalone: true,
  imports: [MatMenuModule,MatCardModule,NgFor,RouterLink],
  templateUrl: './vista-general.component.html',
  styleUrl: './vista-general.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class VistaGeneralComponent {
    productos: products[] = [];
    private Servicioproductos = inject(ProductsService);
    public title = '';
    constructor() {
    this.Servicioproductos.ConsultaProductos();
    this.productos = this.Servicioproductos.productos;
    this.title = this.Servicioproductos.general;
  }
  public get Productos(): products[] {
    return this.Servicioproductos.productos;
  }
}
