import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../app/home/home.component';
import { NavComponent } from '../app/nav/nav.component';
import { TopComponent } from '../app/top/top.component';
import { CatComponent } from '../app/cat/cat.component';
import { SearchComponent } from '../app/search/search.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,NavComponent,TopComponent,CatComponent,SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
