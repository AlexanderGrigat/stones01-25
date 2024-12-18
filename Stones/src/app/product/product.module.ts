import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
  ],
  exports: [
    ProductComponent,
  ]
})
export class ProductModule { }
