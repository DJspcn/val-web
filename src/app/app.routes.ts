import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './thank-you/thank-you.component'; // Import Thank You component
import { IntroComponent } from './intro/intro.component'; // Import Intro component
import { GalleryComponent } from './gallery/gallery.component';
import { FinalMessageComponent } from './final-message/final-message.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


export const routes: Routes = [
  { path: '', component: IntroComponent }, // Default path
  { path: 'thank-you', component: ThankYouComponent }, // Route to Thank You page
  { path: 'gallery', component: GalleryComponent},
  { path: 'final-message', component: FinalMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
