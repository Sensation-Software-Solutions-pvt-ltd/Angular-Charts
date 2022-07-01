import { Component, OnInit } from '@angular/core';
import { basicLineChartOptions, dashedLineChartOptions, lineWithAnnotationsChartOptions, lineWithDataLabelsChartOptions } from '../../config/chart-options/line-charts';
import { series } from '../../data';
@Component({
  selector: 'app-apex-line-charts',
  templateUrl: './apex-line-charts.component.html',
  styleUrls: ['./apex-line-charts.component.css']
})
export class ApexLineChartsComponent implements OnInit {
  basicLineChartOptions: basicLineChartOptions;
  lineWithDataLabelsChartOptions: lineWithDataLabelsChartOptions;
  lineWithAnnotationsChartOptions: lineWithAnnotationsChartOptions;
  dashedLineChartOptions: dashedLineChartOptions;
  constructor() {
    this.basicLineChartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
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
        text: "Basic Line Chart",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };

    this.lineWithDataLabelsChartOptions = {
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Line With DataLables",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Temperature"
        },
        min: 5,
        max: 40
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
    this.lineWithAnnotationsChartOptions = {
      series: [
        {
          name: "series",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      annotations: {
        yaxis: [
          {
            y: 8200,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396"
              },
              text: "Support"
            }
          },
          {
            y: 8600,
            y2: 9000,
            borderColor: "#000",
            fillColor: "#FEB019",
            opacity: 0.2,
            label: {
              borderColor: "#333",
              style: {
                fontSize: "10px",
                color: "#333",
                background: "#FEB019"
              },
              text: "Y-axis range"
            }
          }
        ],
        xaxis: [
          {
            x: new Date("23 Nov 2017").getTime(),
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "Anno Test"
            }
          },
          {
            x: new Date("26 Nov 2017").getTime(),
            x2: new Date("28 Nov 2017").getTime(),
            fillColor: "#B3F7CA",
            opacity: 0.4,
            label: {
              borderColor: "#B3F7CA",
              style: {
                fontSize: "10px",
                color: "#fff",
                background: "#00E396"
              },
              offsetY: -10,
              text: "X-axis range"
            }
          }
        ],
        points: [
          {
            x: new Date("01 Dec 2017").getTime(),
            y: 8607.55,
            marker: {
              size: 8,
              fillColor: "#fff",
              strokeColor: "red",
              radius: 2,
              cssClass: "apexcharts-custom-class"
            },
            label: {
              borderColor: "#FF4560",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#FF4560"
              },

              text: "Point Annotation"
            }
          }
        ]
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        padding: {
          right: 30,
          left: 20
        }
      },
      title: {
        text: "Line with Annotations",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      }
    };

    this.dashedLineChartOptions = {
      series: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Dashed Line Chart",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val: any) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function (val: any) {
                return val + " per session";
              }
            }
          },
          {
            title: {
              formatter: function (val: any) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      },
      yaxis: {
        title: {
          text: "Page Statistics"
        },
      }
    };


  }
  ngOnInit(): void {
  }

}
