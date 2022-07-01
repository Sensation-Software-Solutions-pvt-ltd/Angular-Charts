import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
@Component({
    selector: 'app-high-bar-charts',
    templateUrl: './high-bar-charts.component.html',
    styleUrls: ['./high-bar-charts.component.css']
})
export class HighBarChartsComponent implements OnInit {
    categories = [
        '0-4', '5-9', '10-14', '15-19',
        '20-24', '25-29', '30-34', '35-39', '40-44',
        '45-49', '50-54', '55-59', '60-64', '65-69',
        '70-74', '75-79', '80-84', '85-89', '90-94',
        '95-99', '100 + '
    ];
    constructor() { }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        this.createBasicBarChart();
        this.createStackedBarChart();
        this.createNegativeStackBarChart();

    }

    createBasicBarChart() {
        Highcharts.chart('basic-Bar-Chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: '(Basic-Bar-Chart)-Historic World Population by Region'
            },


            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                    Highcharts.defaultOptions.legend?.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Year 1800',
                data: [107, 31, 635, 203, 2]
            }, {
                name: 'Year 1900',
                data: [133, 156, 947, 408, 6]
            }, {
                name: 'Year 2000',
                data: [814, 841, 3714, 727, 31]
            }, {
                name: 'Year 2016',
                data: [1216, 1001, 4436, 738, 40]
            }]
        } as any);
    }


    createStackedBarChart() {

        Highcharts.chart('stacked-Bar-Chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Stacked bar chart'
            },
            credits: {
                enabled: false,
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: 'John',
                data: [5, 3, 4, 7, 2]
            }, {
                name: 'Jane',
                data: [2, 2, 3, 2, 1]
            }, {
                name: 'Joe',
                data: [3, 4, 4, 2, 5]
            }]
        } as any);
    }

    createNegativeStackBarChart() {
        Highcharts.chart('negativeStack-Bar-Chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: '(Bar With Negative Stack)-Population pyramid for Germany, 2018'
            },
            credits: {
                enabled: false,
            },

            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
                }
            },
            xAxis: [{
                categories: this.categories,
                reversed: false,
                labels: {
                    step: 1
                },
                accessibility: {
                    description: 'Age (male)'
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: this.categories,
                linkedTo: 0,
                labels: {
                    step: 1
                },
                accessibility: {
                    description: 'Age (female)'
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function (): any {
                        var data = this as any;
                        return Math.abs(data.value) + '%';
                    }
                },
                accessibility: {
                    description: 'Percentage population',
                    rangeDescription: 'Range: 0 to 5%'
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function (): any {
                    var data = this as any
                    return '<b>' + data.series.name + ', age ' + data.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(data.point.y), 1) + '%';
                }
            },

            series: [{
                name: 'Male',
                data: [
                    -2.2, -2.1, -2.2, -2.4,
                    -2.7, -3.0, -3.3, -3.2,
                    -2.9, -3.5, -4.4, -4.1,
                    -3.4, -2.7, -2.3, -2.2,
                    -1.6, -0.6, -0.3, -0.0,
                    -0.0
                ]
            }, {
                name: 'Female',
                data: [
                    2.1, 2.0, 2.1, 2.3, 2.6,
                    2.9, 3.2, 3.1, 2.9, 3.4,
                    4.3, 4.0, 3.5, 2.9, 2.5,
                    2.7, 2.2, 1.1, 0.6, 0.2,
                    0.0
                ]
            }]
        } as any);

    }
}
