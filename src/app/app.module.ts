import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';    
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SerieModule } from "./Series/Serie.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SerieModule,
        HttpClientModule
    ],
    providers:[
        provideClientHydration()
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }