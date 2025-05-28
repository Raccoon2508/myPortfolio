import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationPath } from '@/shared/constants/app.config';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-page',
        pathMatch: 'full'
    },
    {
        path: NavigationPath.MAIN_PAGE,
        loadChildren: () => import('./pages/main-page/main-page.module').then(module => module.MainPageModule)
    },
    {
        path: NavigationPath.FORMS_PAGE,
        loadChildren: () => import('./pages/forms-page/forms-page.module').then(module => module.FormsPageModule)
    },
    {
        path: NavigationPath.STYLES_LABORATORY,
        loadChildren: () => import('./pages/styles-laboratory/styles-laboratory.module').then(module => module.StylesLaboratoryModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
