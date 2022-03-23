import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }
  
  cambiarValor(valor: number) {
    const sumaProgreso = this.progreso + valor;
    if (sumaProgreso >= 0 && sumaProgreso <= 100 ) {
      this.valorSalida.emit(sumaProgreso);
      this.progreso = sumaProgreso;
    }
  }

  onChange(newValue: number) {

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue < 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.valorSalida.emit(this.progreso);
  }
}
