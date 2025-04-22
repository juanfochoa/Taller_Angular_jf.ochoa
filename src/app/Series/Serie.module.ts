import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SerieListComponent } from './List-Series/list-serie.component'

@NgModule({
    imports: [CommonModule],
    declarations: [SerieListComponent],
    exports: [SerieListComponent],
    
})

export class SerieModule { }