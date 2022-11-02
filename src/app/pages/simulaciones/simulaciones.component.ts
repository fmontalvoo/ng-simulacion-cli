import { Component, OnInit } from '@angular/core';

import { Simulacion } from 'src/app/models/simulacion.model';

import { SimulacionService } from 'src/app/services/simulacion.service';

@Component({
  selector: 'app-simulaciones',
  templateUrl: './simulaciones.component.html',
  styles: [
  ]
})
export class SimulacionesComponent implements OnInit {

  simulaciones: Simulacion[] = [];

  constructor(private ss: SimulacionService) { }

  ngOnInit(): void {
    this.ss.obtenerSimulaciones()
      .subscribe(data => {
        this.simulaciones = data;
      });
  }

}
