// To parse this data:
//
//   import { Convert, Simulacion } from "./file";
//
//   const simulacion = Convert.toSimulacion(json);

import { Estudiante } from "./estudiante.model";

export interface Simulacion {
  id?: number;
  fecha: Date;
  meta_clientes: number;
  clientes_g1: number;
  clientes_g2: number;
  estudiantes_g1: number;
  estudiantes_g2: number;
  clientes_atendidos: number;
  cantidad_estudiantes: number;
  estudiantes?: Estudiante[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toSimulacion(json: string): Simulacion {
    return JSON.parse(json);
  }

  public static simulacionToJson(value: Simulacion): string {
    return JSON.stringify(value);
  }
}
