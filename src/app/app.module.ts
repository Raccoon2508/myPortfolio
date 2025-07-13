import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { MockBackendInterceptor } from '@/shared/mock-backend/mock-backend.interceptor';
import { AngularMaterialModule } from '@/shared/modules/angular-material/angular-material.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularMaterialModule,
    ],
    exports: [AngularMaterialModule],
    providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
        { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
