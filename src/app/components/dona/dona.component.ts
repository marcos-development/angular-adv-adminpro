import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  
  @Input() title: string = 'Sin título';
  @Input('labels') doughnutChartLabels: string[] = ['data1', 'data2', 'data3'];
  @Input('data') dataset: number[] = [1, 2, 3];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: []
      }
    ]
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: this.dataset,
          backgroundColor: [
            '#6857E6', '#009FEE', '#F02059'
          ]
        },
      ]
    };
  }
}
