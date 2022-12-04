import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  education: any = [];
  constructor(private datos:DatosService) {}

  ngOnInit(): void {
    this.datos.getDatos().subscribe(data => {
      this.education = data.educations
    })

}
}