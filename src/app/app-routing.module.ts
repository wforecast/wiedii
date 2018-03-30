import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { Services } from '@angular/core/src/view';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  }

];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
