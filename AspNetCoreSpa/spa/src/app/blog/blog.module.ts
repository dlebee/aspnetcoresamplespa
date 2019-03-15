import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from './blog-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ApiModule } from '../api/api.module';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent
  }
];

@NgModule({
  declarations: [BlogPageComponent],
  imports: [
    CommonModule,
    ApiModule,
    RouterModule.forChild(routes),
  ]
})
export class BlogModule { }
