import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { SwitchComponentComponent } from './components/switch-component/switch-component.component';
import { OutfitsComponent } from './pages/outfits/outfits.component';
import { InspirationsComponent } from './pages/inspirations/inspirations.component';
import { TitleComponent } from './components/title/title.component';
import { ImagesContainerComponent } from './components/images-container/images-container.component';
import { ImagesContainerItemComponent } from './components/images-container/images-container-item/images-container-item.component';
import { AddButtonComponent } from './components/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SwitchComponentComponent,
    OutfitsComponent,
    InspirationsComponent,
    TitleComponent,
    ImagesContainerComponent,
    ImagesContainerItemComponent,
    AddButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
