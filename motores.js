class Motor {
  constructor(serial, fabricante) {
    this.serial = serial;
    this.fabricante = fabricante;
  }
  datosMotor () {
    return `El número serial es ${this.serial} y el fabricante es ${this.fabricante}`;
  }
}

class Electrico extends Motor {
  constructor(serial, fabricante, potencia, corriente) {
    super(serial, fabricante);
    this.potencia = potencia;
    this.corriente = corriente;
  }

  datosElectricos () {
    return `Este motor tiene una potencia de ${this.potencia}W y una corriente de ${this.corriente}A`
  }
}
class CA extends Electrico {
  constructor(serial, fabricante, potencia, corriente, fases, frecuencia) {
    super(serial, fabricante, potencia, corriente);
    this.fases = fases;
    this.frecuencia = frecuencia;
  }
}