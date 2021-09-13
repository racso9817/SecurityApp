import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {

  closeResult = '';

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
      image:"assets/images/vehicles/hyundai.jpg",
      marca:"Hyundai",
      placa:"GTF-1234",
      conductor:"Julio Ramírez",
      fecha:"13/12/2020",
      horaEncendido:"08:00",
      horaApagado:"11:00",
      ubicacion:"https://www.google.com/maps/place/Box+Business+Intelligence+S.A./@-2.1563024,-79.8931564,17z/data=!3m1!4b1!4m5!3m4!1s0x902d6d93ad2d563f:0x552436c9a5571d36!8m2!3d-2.156227!4d-79.8909723",
    },
    {
      image:"assets/images/vehicles/aveo.jpg",
      marca:"Chevrolet",
      placa:"GPQ-3094",
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

  constructor(private modalService: NgbModal) {}

  openModal(text: string){
    this.modalService.open(text, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
  }

  private getDismissReason(reason: ModalDismissReasons): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
