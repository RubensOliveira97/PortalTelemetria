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
  ApexGrid,
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
  playPause:boolean =true;



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
        zoom: {
          enabled: false,
        },
        stacked:false ,
        animations: {
          enabled: false,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: true,
              delay: 150
          },
          dynamicAnimation: {
              enabled: true,
              speed: 350
          }
      }
      },
      dataLabels: {
        offsetX:5,
        enabled:false,
        background:{
        borderRadius: 8,
        }
      },
      stroke: {
        width: '2',
        curve: 'smooth',

      },
      grid: {
        strokeDashArray: 3,
      },

      xaxis: {
        type:'datetime',

      },
      yaxis:{
        tickAmount:8,

      },
      tooltip: {
        enabled:true,
        theme: 'dark',
      }
    };
  }

  ngOnInit(): void {

    this.salesChartOptions.series = this.dataChart;

  }

  ngOnChanges(c:any){
    if(!this.playPause)
      return;
    this.salesChartOptions.series = c.dataChart.currentValue;
    if(this.salesChartOptions.series?.length && this.salesChartOptions.dataLabels && this.salesChartOptions.series?.length > 1){
      this.salesChartOptions.dataLabels.enabled = true;
      this.salesChartOptions.yaxis = {max:500};
    }
}





}
