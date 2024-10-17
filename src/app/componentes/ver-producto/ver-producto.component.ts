import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-producto',
  standalone: true,
  imports: [],
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css'] // Corregir aquí
})
export class VerProductoComponent implements OnInit {
  product: any;
  private route = inject(ActivatedRoute); // Inyectar ActivatedRoute correctamente
  private Servicioproductos = inject(ProductsService); // Inyectar el servicio

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.paramMap.get('id')!, 10); // Convertir el ID a número, agregamos "!" para asegurarnos de que no sea null
    this.product = this.Servicioproductos.VerProducto(productId); // Obtener detalles del producto por ID
  }
}
