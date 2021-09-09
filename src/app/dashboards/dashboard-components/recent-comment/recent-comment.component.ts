import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FireDataService } from 'src/app/appServices/dashboards/services/fire-data.service';
import { Carro } from 'src/app/interfaces/carro';

@Component({
  selector: 'app-recent-comment',
  templateUrl: './recent-comment.component.html'
})

export class RecentcommentComponent {

  recentcomments: Object[] = [];

  public config: PerfectScrollbarConfigInterface = {};
  
  constructor(private fireData: FireDataService) {}

  ngOnInit(): void {
    this.leerData();
  }

  leerData() {
    this.fireData.getCarros().subscribe(info => {
      var fecha: string;
      var hora: string;
      const lista = [];
      for(var i = 0; i < info.length; i++){
        if(info[i].stream.split('|')[2] === '1'){
          lista.push({
            image: 'assets/images/users/1.jpg',
            name: 'Pepito Pérez Gonzalez',
            comment: 'Ha abierto la puerta del auto',
            date: info[i].stream.split('|')[0]+" | "+info[i].stream.split('|')[1],
            status: 'Approved',
            labelColor: 'badge-light-success text-success'
          })
        }
        if (info[i].stream.split('|')[3] === '1') {
          lista.push({
            image: 'assets/images/users/4.jpg',
            name: 'Susana Romero',
            comment: 'Se ha sentado en el asiento',
            date: info[i].stream.split('|')[0]+" | "+info[i].stream.split('|')[1],
            status: 'Approved',
            labelColor: 'badge-light-success text-success'
          })
        }
      }
      this.recentcomments = lista;
    });
  }
}