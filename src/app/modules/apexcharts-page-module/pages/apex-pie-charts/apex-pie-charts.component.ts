import { Component, OnInit, ViewChild } from '@angular/core';
import { donutwithPatternPieChartOptions, monochromePieChartOptions, simpleDonutChartOptions, simplePieChartOptions } from '../../config/chart-options/pie-chart';

@Component({
  selector: 'app-apex-pie-charts',
  templateUrl: './apex-pie-charts.component.html',
  styleUrls: ['./apex-pie-charts.component.css']
})
export class ApexPieChartsComponent implements OnInit {
  simplePieChartOptions: simplePieChartOptions;
  simpleDonutChartOptions: simpleDonutChartOptions;
  monochromePieChartOptions: monochromePieChartOptions;
  donutwithPatternPieChartOptions: donutwithPatternPieChartOptions;
  constructor() {
    this.donutwithPatternPieChartOptions = {
      series: [44, 55, 41, 17, 15],
      legend: {
        position: "bottom"
      },
      chart: {
        width: 380,
        type: "donut",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines"
          ]
        }
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
      theme: {
        palette: "palette2"
      },
      title: {
        text: "Favourite Movie Type"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.simplePieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      title: {
        text: "Simple Pie Chart"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.simpleDonutChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      title: {
        text: "Simple Donnut Chart"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.monochromePieChartOptions = {
      series: [25, 15, 44, 55, 41, 17],
      chart: {
        width: "100%",
        type: "pie"
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      title: {
        text: "Monochrome-Pie-Chart"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  ngOnInit(): void {
  }
}
