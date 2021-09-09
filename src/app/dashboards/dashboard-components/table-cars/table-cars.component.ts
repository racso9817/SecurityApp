import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-cars',
  templateUrl: './table-cars.component.html',
  styleUrls: ['./table-cars.component.css']
})
export class TableCarsComponent implements OnInit {

  vehiculos = [
    {
      image:"assets/images/vehicles/luvdmax.jpeg",
      marca:"Chevrolet",
      placa:"GTY-6078",
      conductor:"Julio Ramírez",
      fecha:"13/12/2020",
      horaEncendido:"08:00",
      horaApagado:"11:00",
      ubicacion:"https://www.google.com/maps/place/Box+Business+Intelligence+S.A./@-2.1563024,-79.8931564,17z/data=!3m1!4b1!4m5!3m4!1s0x902d6d93ad2d563f:0x552436c9a5571d36!8m2!3d-2.156227!4d-79.8909723",
    },
    {
      image:"assets/images/vehicles/luvdmax.jpeg",
      marca:"Chevrolet",
      placa:"GTY-6078",
      conductor:"Julio Ramírez",
      fecha:"13/12/2020",
      horaEncendido:"08:00",
      horaApagado:"11:00",
      ubicacion:"https://www.google.com/maps/place/Box+Business+Intelligence+S.A./@-2.1563024,-79.8931564,17z/data=!3m1!4b1!4m5!3m4!1s0x902d6d93ad2d563f:0x552436c9a5571d36!8m2!3d-2.156227!4d-79.8909723",
    },
    {
      image:"assets/images/vehicles/luvdmax.jpeg",
      marca:"Chevrolet",
      placa:"GTY-6078",
      conductor:"Julio Ramírez",
      fecha:"13/12/2020",
      horaEncendido:"08:00",
      horaApagado:"11:00",
      ubicacion:"https://www.google.com/maps/place/Box+Business+Intelligence+S.A./@-2.1563024,-79.8931564,17z/data=!3m1!4b1!4m5!3m4!1s0x902d6d93ad2d563f:0x552436c9a5571d36!8m2!3d-2.156227!4d-79.8909723",
    },
    {
      image:"assets/images/vehicles/luvdmax.jpeg",
      marca:"Chevrolet",
      placa:"GTY-6078",
      conductor:"Julio Ramírez",
      fecha:"13/12/2020",
      horaEncendido:"08:00",
      horaApagado:"11:00",
      ubicacion:"https://www.google.com/maps/place/Box+Business+Intelligence+S.A./@-2.1563024,-79.8931564,17z/data=!3m1!4b1!4m5!3m4!1s0x902d6d93ad2d563f:0x552436c9a5571d36!8m2!3d-2.156227!4d-79.8909723",
    },
    {
      image:"assets/images/vehicles/luvdmax.jpeg",
      marca:"Chevrolet",
      placa:"GTY-6078",
      conductor:"Julio Ramírez",
      fecha:"13/12/2020",
      horaEncendido:"08:00",
      horaApagado:"11:00",
      ubicacion:"https://www.google.com/maps/place/Box+Business+Intelligence+S.A./@-2.1563024,-79.8931564,17z/data=!3m1!4b1!4m5!3m4!1s0x902d6d93ad2d563f:0x552436c9a5571d36!8m2!3d-2.156227!4d-79.8909723",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
