import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TufiveComponent } from './pages/tufive/tufive.component';
import { ZczyComponent } from './pages/zczy/zczy.component';
import { CkxxxyckcdjhComponent } from './pages/ckxxxyckcdjh/ckxxxyckcdjh.component';
import { DengjiComponent } from './pages/dengji/dengji.component';
import { CkcdmxComponent } from './pages/ckcdmx/ckcdmx.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/ckcdmx' },
  { path: 'tufour', loadChildren: './pages/welcome/welcome.module#WelcomeModule' },
  { path: 'tufive', component: TufiveComponent },
  { path: 'zczy', component: ZczyComponent },
  { path: 'ckxxxyckcdjh', component: CkxxxyckcdjhComponent },
  { path: 'dengji', component: DengjiComponent },
  { path: 'ckcdmx', component: CkcdmxComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
