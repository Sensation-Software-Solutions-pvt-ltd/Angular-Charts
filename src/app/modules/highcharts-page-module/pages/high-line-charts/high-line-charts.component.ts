import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-high-line-charts',
    templateUrl: './high-line-charts.component.html',
    styleUrls: ['./high-line-charts.component.css']
})
export class HighLineChartsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.createBasicLineChart();
        this.createSplineChart();
        this.createSpLineWithSymbols();
        this.createLineChartWithDatalabels();
    }


    createBasicLineChart(): void {

        const chart = Highcharts.chart('basic-line-chart', {

            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },
            credits: {
                enabled: false,
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },

            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2017'
                }
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Installation',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: 'Manufacturing',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: 'Sales & Distribution',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: 'Project Development',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: 'Other',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        } as any);
    }

    createSplineChart() {
        Highcharts.chart('spLine-Chart', {
            chart: {
                type: 'spline',
                inverted: true
            },
            title: {
                text: 'Atmosphere Temperature by Altitude'
            },
            credits: {
                enabled: false,
            },

            xAxis: {
                reversed: false,
                title: {
                    enabled: true,
                    text: 'Altitude'
                },
                labels: {
                    format: '{value} km'
                },
                accessibility: {
                    rangeDescription: 'Range: 0 to 80 km.'
                },
                maxPadding: 0.05,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    format: '{value}°'
                },
                accessibility: {
                    rangeDescription: 'Range: -90°C to 20°C.'
                },
                lineWidth: 2
            },
            legend: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br/>',
                pointFormat: '{point.x} km: {point.y}°C'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enable: false
                    }
                }
            },
            series: [{
                name: 'Temperature',
                data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
            }]
        } as any);
    }

    createSpLineWithSymbols() {
        Highcharts.chart('SpLine-Symbols-Chart', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            credits: {
                enabled: false,
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                accessibility: {
                    description: 'Months of the year'
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {

                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: 'Tokyo',
                marker: {
                    symbol: 'square'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                    y: 26.5,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    },
                    accessibility: {
                        description: 'Sunny symbol, this is the warmest point in the chart.'
                    }
                }, 23.3, 18.3, 13.9, 9.6]

            }, {
                name: 'London',
                marker: {
                    symbol: 'diamond'
                },
                data: [{
                    y: 3.9,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                    },
                    accessibility: {
                        description: 'Snowy symbol, this is the coldest point in the chart.'
                    }
                }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        } as any);
    }

    createLineChartWithDatalabels() {
        Highcharts.chart('lineChart-With-Datalabels', {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            credits: {
                enabled: false,
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        } as any);
    }
}
