import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, TranslocoModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
