import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profile1: any;
  constructor(private datos:DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.profile1 = data.profile
    })

}
}