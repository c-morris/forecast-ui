import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyDescriptionsComponent } from './policy-descriptions/policy-descriptions.component'

const routes: Routes = [
    { path: 'policy-descriptions', component: PolicyDescriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
