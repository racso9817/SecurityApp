import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";
import { single } from './data';

@Component({
  templateUrl: "./dashboard1.component.html",
  styleUrls: ["./dashboard1.component.css"],
})
export class Dashboard1Component {

  @ViewChild('chartArea', { static: true }) chartArea: ElementRef;

  single: any[];

  view: any[] = [innerWidth, 400];//[1000, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Fechas';
  showYAxisLabel = true;
  yAxisLabel = 'Número de Entradas';

  colorScheme = {
    domain: ['#2FBAF0', '#FD7F24', '#6D57E5', '#FF2549', '#00C28F', '#2459F8']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }

  setViewSize() {
    this.view = this.single.length > 15 ?
    [Math.max(Math.floor(this.single.length / 5 ) * 200, this.chartArea.nativeElement.offsetWidth), 500] : null;
  }
  
}
