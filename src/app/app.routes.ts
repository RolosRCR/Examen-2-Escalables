import { Routes } from '@angular/router';
import { VistaGeneralComponent } from './componentes/vista-general/vista-general.component';
import { ListaPComponent } from './componentes/lista-p/lista-p.component';
import { VerProductoComponent } from './componentes/ver-producto/ver-producto.component';

export const routes: Routes = [
  {path:  'General', component: VistaGeneralComponent },
    {path:  'Lista', component: ListaPComponent},
    {path: 'product/:id', component: VerProductoComponent},
    {path: '', redirectTo: 'General', pathMatch: 'full'},

];
