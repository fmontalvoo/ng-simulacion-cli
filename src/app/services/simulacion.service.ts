import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Simulacion } from '../models/simulacion.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SimulacionService {

  private url = `${environment.api_url}/simulaciones`;

  constructor(private http: HttpClient) { }

  obtenerSimulaciones() {
    return this.http.get<Simulacion[]>(this.url);
  }
}
