import { Component } from "@angular/core";
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";
import { single } from './data';

@Component({
  templateUrl: "./dashboard1.component.html",
  styleUrls: ["./dashboard1.component.css"],
})
export class Dashboard1Component {

  single: any[];

  view: any[] = [1200, 400];

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


  
}
