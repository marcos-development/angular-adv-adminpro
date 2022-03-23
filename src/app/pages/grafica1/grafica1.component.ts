import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public data1: number[] = [ 350, 450, 100 ];
  
  public labels2: string[] = [ 'Compras', 'Ventas', 'Stock' ];
  public data2: number[] = [ 20, 15, 30 ];
  

}
