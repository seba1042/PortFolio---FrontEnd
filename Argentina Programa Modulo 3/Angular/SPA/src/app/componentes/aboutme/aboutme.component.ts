import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  aboutme1: any;
  constructor(private datos:DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe( data => {
      this.aboutme1 = data.aboutme
    })
  }

}
