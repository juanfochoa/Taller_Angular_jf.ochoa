import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../Serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './List-serie.component.html',
  standalone: false,
  styleUrls: ['./List-serie.component.css']
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];
  promedioTemporadas: number = 0;
  nombreSerie: string = '';
  descripcionSerie: string = '';
  urlSerie: string = '';
  imagenSerie: string = '';
  visibilidad: boolean = false;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.promedioTemporadas = this.calcularPromedioTemporadas();
    });
  }

  mostrarSerie(serie: Serie) {
    this.nombreSerie = serie.name;
    this.descripcionSerie = serie.description;
    this.urlSerie = serie.webpage;
    this.imagenSerie = serie.poster;
    this.visibilidad = true;
  }

  calcularPromedioTemporadas(): number {
    if (this.series.length === 0) return 0;
    const total = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return total / this.series.length;
  }
}