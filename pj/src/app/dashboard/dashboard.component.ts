import { Component, OnInit } from '@angular/core';
import { DashboardService , Venta, Comentario, Chat} from '../servicios/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ventas:Venta[]=[];
  coment:Comentario[]=[];
  chats:Chat[]=[];
  
  constructor(private _dashboardService: DashboardService) {
    console.log("creando el componente dashboard..")
    console.log(_dashboardService.getVentas());
    this.ventas=_dashboardService.getVentas();
    console.log(this.ventas[0].nombre);

    console.log(_dashboardService.getComentarios());
    this.coment=_dashboardService.getComentarios();
    console.log(this.coment[0].nombre);

    console.log(_dashboardService.getChats());
    this.chats=_dashboardService.getChats();
    console.log(this.chats[0].nombre);
   }

  ngOnInit(): void {
  }

}
