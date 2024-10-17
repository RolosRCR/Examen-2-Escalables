import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { products } from './Interface_Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public lista : string = 'Lista de Productos';
  public general: string = 'Vista General';
  private API = 'https://fakestoreapi.com/products';
  private HTTP = inject(HttpClient);
  private Prod : products[]=[];
  public ConsultaProductos(){
    this.HTTP.get<products[]>(this.API).subscribe({
      next: (datos) => {
          this.Prod = datos;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
  constructor() {
    this.ConsultaProductos();
  }
  public VerProducto(id: number) {
    return this.productos.find(product => product.id === id);
  }
  public get productos():products[] {
     return this.Prod;
  }
}
