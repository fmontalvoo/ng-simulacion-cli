// To parse this data:
//
//   import { Convert, Estudiante } from "./file";
//
//   const estudiante = Convert.toEstudiante(json);

export interface Estudiante {
  horas_cumplidas: number;
  duracion_pasantia: number;
  tramites_realizados: number;
  tiempo_promedio_por_tramite: number;
  id: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toEstudiante(json: string): Estudiante {
    return JSON.parse(json);
  }

  public static estudianteToJson(value: Estudiante): string {
    return JSON.stringify(value);
  }
}
