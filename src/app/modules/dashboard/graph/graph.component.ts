import { AfterViewInit, Component, ElementRef,Input, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements AfterViewInit {
  @Input() graphData:any;
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  lineChart: any;
constructor() { }
ngAfterViewInit(): void {
    this.lineChartMethod();
  }
lineChartMethod() {
  var gradientChartOptionsConfigurationWithTooltipGreen: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: 'rgba(255,255,255, 0.5)',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(52, 122, 226, 0.0)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }],

      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(52, 122, 226, 0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }]
    }
  };

  var ctx = this.lineCanvas.nativeElement.getContext('2d');
  var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  gradientStroke.addColorStop(1, 'rgba(52, 122, 226, 0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(52, 122, 226,0.0 )');
    gradientStroke.addColorStop(0, 'rgba(52, 122, 226, 0)'); //red colors



    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.graphData.chartLabels,
        datasets: [
          {
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#347ae2',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#347ae2',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#000000',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.graphData.data,
          }
        ]
      },
      options: gradientChartOptionsConfigurationWithTooltipGreen
    });
  }


}
