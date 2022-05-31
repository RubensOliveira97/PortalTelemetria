import { Component, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid
} from 'ng-apexcharts';

export type salesChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
};

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html'
})
export class SalesSummaryComponent implements OnInit {
  @Input() categories : string[];
  @Input() dataChart : any ;



  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public salesChartOptions: Partial<salesChartOptions>;
  constructor() {
    this.salesChartOptions = {
      series: [
        {
          name: "xxxxx",
          data: [0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 250,
        type: 'line',
        toolbar: {
          show: false
        },
        stacked:true,
        animations: {
          enabled: false,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: false,
              delay: 150
          },
          dynamicAnimation: {
              enabled: false,
              speed: 350
          }
      }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: '1',
        curve: 'smooth',

      },
      grid: {
        strokeDashArray: 3,
      },

      xaxis: {
        type:'datetime',

      },
      yaxis:{
        min: 0,
        max: 100,
      },
      tooltip: {
        theme: 'dark'
      }
    };
  }

  ngOnInit(): void {

    this.salesChartOptions.series = this.dataChart;

  }

  ngOnChanges(c:any){
    this.salesChartOptions.series = c.dataChart.currentValue;
  }



}
