import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexMarkers, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { basicAreaChartOptions, nullvaluesAreaChartOptions, splineAreaChartOptions, stackedAreaChartOptions } from '../../config/chart-options/area-charts';
import { series } from '../../data';

@Component({
  selector: 'app-apex-area-charts',
  templateUrl: './apex-area-charts.component.html',
  styleUrls: ['./apex-area-charts.component.css']
})
export class ApexAreaChartsComponent implements OnInit {
  basicAreaChartOptions: basicAreaChartOptions;
  splineAreaChartOptions: splineAreaChartOptions;
  stackedAreaChartOptions: stackedAreaChartOptions;
  nullvaluesAreaChartOptions: nullvaluesAreaChartOptions;
  constructor() {
    this.basicAreaChartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Basic Area Chart",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };

    this.splineAreaChartOptions = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      title: {
        text: "SpLine Area Chart",
        align: "left"
      },
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };

    this.stackedAreaChartOptions = {
      series: [
        {
          name: "South",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 60
            }
          )
        },

        {
          name: "North",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 20
            }
          )
        },
        {
          name: "Central",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017 GMT").getTime(),
            20,
            {
              min: 10,
              max: 15
            }
          )
        }
      ],
      title: {
        text: "Stacked Area Chart",
        align: "left"
      },
      chart: {
        type: "area",
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min));
          }
        }
      },
      colors: ["#008FFB", "#00E396", "#CED4DC"],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8
        }
      },
      legend: {
        position: "top",
        horizontalAlign: "left"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {

      }
    };

    this.nullvaluesAreaChartOptions = {
      series: [
        {
          name: "Network",
          data: [
            {
              x: "Dec 23 2017",
              y: null
            },
            {
              x: "Dec 24 2017",
              y: 44
            },
            {
              x: "Dec 25 2017",
              y: 31
            },
            {
              x: "Dec 26 2017",
              y: 38
            },
            {
              x: "Dec 27 2017",
              y: null
            },
            {
              x: "Dec 28 2017",
              y: 32
            },
            {
              x: "Dec 29 2017",
              y: 55
            },
            {
              x: "Dec 30 2017",
              y: 51
            },
            {
              x: "Dec 31 2017",
              y: 67
            },
            {
              x: "Jan 01 2018",
              y: 22
            },
            {
              x: "Jan 02 2018",
              y: 34
            },
            {
              x: "Jan 03 2018",
              y: null
            },
            {
              x: "Jan 04 2018",
              y: null
            },
            {
              x: "Jan 05 2018",
              y: 11
            },
            {
              x: "Jan 06 2018",
              y: 4
            },
            {
              x: "Jan 07 2018",
              y: 15
            },
            {
              x: "Jan 08 2018",
              y: null
            },
            {
              x: "Jan 09 2018",
              y: 9
            },
            {
              x: "Jan 10 2018",
              y: 34
            },
            {
              x: "Jan 11 2018",
              y: null
            },
            {
              x: "Jan 12 2018",
              y: null
            },
            {
              x: "Jan 13 2018",
              y: 13
            },
            {
              x: "Jan 14 2018",
              y: null
            }
          ]
        }
      ],
      chart: {
        type: "area",
        height: 350,
        animations: {
          enabled: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      fill: {
        opacity: 0.8,
        type: "pattern",
        pattern: {
          style: "horizontalLines",
          width: 5,
          height: 5,
          strokeWidth: 3
        }
      },
      markers: {
        size: 5,
        hover: {
          size: 9
        }
      },
      title: {
        text: "Missing / Null values Area Chart"
      },
      tooltip: {
        intersect: true,
        shared: false
      },
      theme: {
        palette: "palette1"
      },
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        title: {
          text: "Bytes Received"
        }
      }
    };

  }

  ngOnInit(): void {

  }

  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  public generateDayWiseTimeSeries = function (baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({ x, y });
      baseval += 86400000;
      i++;
    }
    return series;
  };

}
