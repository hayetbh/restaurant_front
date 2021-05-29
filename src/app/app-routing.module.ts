import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'restaurant-categories',
    loadChildren: () => import('./restaurant-categories/restaurant-categories.module').then( m => m.RestaurantCategoriesPageModule)
  },
  {
    path: 'restaurant-list',
    loadChildren: () => import('./restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule)
  },
  {
    path: 'restaurant-details',
    loadChildren: () => import('./restaurant-details/restaurant-details.module').then( m => m.RestaurantDetailsPageModule)
  },

  {
    path: 'add-restaurant-category',
    loadChildren: () => import('./add-restaurant-category/add-restaurant-category.module').then( m => m.AddRestaurantCategoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
