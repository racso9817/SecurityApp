import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { FireDataService } from "src/app/appServices/dashboards/services/fire-data.service";
import { Carro } from "src/app/interfaces/carro";


//Lista para recolectar datos de firebase
var listaPuerta = [];
var listaAsiento = [];

@Component({
  templateUrl: "./dashboard1.component.html",
  styleUrls: ["./dashboard1.component.css"],
})
export class Dashboard1Component {

  listaPuerta;
  listaAsiento;

  //@ViewChild('chartArea', { static: true }) chartArea: ElementRef;
  carros: Carro[];
  single: any[];
  view: any[] = [1000, 500];
  view2: any[] = [1000, 500];

  // options grafico puertas
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Fechas';
  showYAxisLabel = true;
  yAxisLabel = 'Número de veces con puerta abierta';
  // options grafico asientos
  showXAxis2 = true;
  showYAxis2 = true;
  gradient2 = false;
  showLegend2 = false;
  showXAxisLabel2 = true;
  xAxisLabel2 = 'Fechas';
  showYAxisLabel2 = true;
  yAxisLabel2 = 'Número de veces con movimiento en asiento';

  colorScheme = {
    domain: ['#2FBAF0', '#FD7F24', '#6D57E5', '#FF2549', '#00C28F', '#2459F8']
  };

  constructor(private fireData: FireDataService){}

  ngOnInit(): void {
     this.contarPuerta();
     this.contarAsiento();
  }

  onSelect(event) {
    console.log(event);
  }

  contarPuerta(){
    this.fireData.getCarros().subscribe(carros => {
      const lista = [];      
      this.carros = carros;
      var longitudCarros = carros.length;
      var fechas = [];      
      const conteo = {};
      for(var i = 0; i < (longitudCarros); i++){
        if(carros[i].stream.split('|')[2] === '1') {
          fechas.push(carros[i].stream.split('|')[0]);
        }        
      }
      fechas.sort();
      console.log(fechas);
      fechas.forEach(function (x) {conteo[x] = (conteo[x] || 0) + 1});
      console.log(conteo);
      for(var x = 0; x < Object.keys(conteo).length; x++){
        lista.push({
          name: Object.keys(conteo)[x],
          value: Object.values(conteo)[x]
        })
      }
      listaPuerta = lista;
      Object.assign(this, {listaPuerta})
    });
  }

  contarAsiento(){
    this.fireData.getCarros().subscribe(carros => {
      const lista = [];      
      this.carros = carros;
      var longitudCarros = carros.length;
      var fechas = [];      
      const conteo = {};
      for(var i = 0; i < (longitudCarros); i++){
        if(carros[i].stream.split('|')[3] === '1') {
          fechas.push(carros[i].stream.split('|')[0]);
        }        
      }
      fechas.sort();
      console.log(fechas);
      fechas.forEach(function (x) {conteo[x] = (conteo[x] || 0) + 1});
      console.log(conteo);
      for(var x = 0; x < Object.keys(conteo).length; x++){
        lista.push({
          name: Object.keys(conteo)[x],
          value: Object.values(conteo)[x]
        })
      }
      listaAsiento = lista;
      Object.assign(this, {listaAsiento})
    });
  }

  // setViewSize() {
  //   this.view = this.single.length > 15 ?
  //   [Math.max(Math.floor(this.single.length / 5 ) * 200, this.chartArea.nativeElement.offsetWidth), 500] : null;
  // }
  
}
