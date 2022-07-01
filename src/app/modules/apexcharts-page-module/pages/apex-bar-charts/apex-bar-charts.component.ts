import { Component, OnInit } from '@angular/core';
import { basicBarChartOptions, groupedBarChartOptions, patternedBarChartOptions, reversedBaChartOptions } from '../../config/chart-options/bar-charts';
@Component({
  selector: 'app-apex-bar-charts',
  templateUrl: './apex-bar-charts.component.html',
  styleUrls: ['./apex-bar-charts.component.css']
})
export class ApexBarChartsComponent implements OnInit {
  basicBarChartOptions: basicBarChartOptions;
  groupedBarChartOptions: groupedBarChartOptions;
  patternedBarChartOptions: patternedBarChartOptions;
  reversedBaChartOptions: reversedBaChartOptions;
  constructor() {
    this.basicBarChartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      title: {
        text: "Basic Bar Chart"
      },
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "South Korea",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      }
    };
    this.groupedBarChartOptions = {
      series: [
        {
          name: "serie1",
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: "serie2",

          data: [53, 32, 33, 52, 13, 44, 32]
        }
      ],

      title: {
        text: "Grouped Bar Chart"
      },
      chart: {
        type: "bar",
        height: 430
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
      }
    };
    this.patternedBarChartOptions = {
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        dropShadow: {
          enabled: true,
          blur: 1,
          opacity: 0.25
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      title: {
        text: "Patterned Bar Chart"
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val: any) {
            return val + "K";
          }
        }
      },
      fill: {
        type: "pattern",
        opacity: 1
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      }
    };

    this.reversedBaChartOptions = {
      series: [
        {
          name: "reversed",
          data: [400, 430, 448, 470, 540, 580, 690]
        }
      ],

      title: {
        text: "Reversed Bar Chart"
      },
      chart: {
        type: "bar",
        height: 350
      },
      annotations: {
        xaxis: [
          {
            x: 500,
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396"
              },
              text: "X annotation"
            }
          }
        ],
        yaxis: [
          {
            y: "July",
            y2: "September",
            label: {
              text: "Y annotation"
            }
          }
        ]
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
