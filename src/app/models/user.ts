export class User {
  _id?: number;
  nombre: string;
  apellidos: string;
  correo: string;
  contrasenia: string;
  mascota: {
    nombre: string;
    horarioAlimentacion: {
      lunes: Date;
      martes: Date;
      miercoles: Date;
      jueves: Date;
      viernes: Date;
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
        lunes: Date;
        martes: Date;
        miercoles: Date;
        jueves: Date;
        viernes: Date;
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
