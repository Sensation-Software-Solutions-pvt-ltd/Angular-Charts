import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HC_exporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts);
HC_exporting(Highcharts);
@Component({
    selector: 'app-high-mixed-charts',
    templateUrl: './high-mixed-charts.component.html',
    styleUrls: ['./high-mixed-charts.component.css']
})
export class HighMixedChartsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.createBasicMixedChart();
    }

    createBasicMixedChart() {
        Highcharts.chart('basic-Mixed-Chart', {
            title: {
                text: 'Mixed Chart'
            },
            credits: {
                enabled: false,
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
            },
            labels: {
                items: [{
                    html: 'Total fruit consumption',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: ( // theme
                            Highcharts.defaultOptions.title?.style &&
                            Highcharts.defaultOptions.title.style.color
                        ) || 'black'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'Jane',
                data: [3, 2, 1, 3, 4]
            }, {
                type: 'column',
                name: 'John',
                data: [2, 3, 5, 7, 6]
            }, {
                type: 'column',
                name: 'Joe',
                data: [4, 3, 3, 9, 0]
            }, {
                type: 'spline',
                name: 'Average',
                data: [3, 2.67, 3, 6.33, 3.33],
                marker: {
                    lineWidth: 2,
                    lineColor: '#3ec0c9',
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total consumption',
                data: [{
                    name: 'Jane',
                    y: 13,
                    color: '#3cc0cf' // Jane's color
                }, {
                    name: 'John',
                    y: 23,
                    color: '#b58b2a' // John's color
                }, {
                    name: 'Joe',
                    y: 19,
                    color: '#4aa33b' // Joe's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        } as any);


    }
}
