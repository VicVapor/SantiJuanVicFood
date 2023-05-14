export class User {
  _id?: number;
  nombre: string;
  apellidos: string;
  correo: string;
  contrasenia: string;
  mascota: {
    nombre: string;
    horarioAlimentacion: {
      lunes: string;
      martes: string;
      miercoles: string;
      jueves: string;
      viernes: string;
    };
  };

  constructor(
    nombre: string,
    apellidos: string,
    correo: string,
    contrasenia: string,
    mascota: {
      nombre: string;
      horarioAlimentacion: {
        lunes: string;
        martes: string;
        miercoles: string;
        jueves: string;
        viernes: string;
      };
    }
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correo = correo;
    this.contrasenia = contrasenia;
    this.mascota = mascota;
  }
}
