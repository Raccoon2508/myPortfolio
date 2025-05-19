import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-page',
        pathMatch: 'full'
    },
    {
        path: 'main-page',
        loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
    },
    {
        path: 'forms-page',
        loadChildren: () => import('./pages/forms-page/forms-page.module').then(m => m.FormsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
