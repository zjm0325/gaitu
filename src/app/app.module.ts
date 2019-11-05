import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TufiveComponent } from './pages/tufive/tufive.component';
import { ZczyComponent } from './pages/zczy/zczy.component';
import { CkxxxyckcdjhComponent } from './pages/ckxxxyckcdjh/ckxxxyckcdjh.component';
import { DengjiComponent } from './pages/dengji/dengji.component';
import { CkcdmxComponent } from './pages/ckcdmx/ckcdmx.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TufiveComponent,
    ZczyComponent,
    CkxxxyckcdjhComponent,
    DengjiComponent,
    CkcdmxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
