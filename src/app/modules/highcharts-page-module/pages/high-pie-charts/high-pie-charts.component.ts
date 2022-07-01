import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Variablepie from "highcharts/modules/variable-pie";
HighchartsMore(Highcharts);
Variablepie(Highcharts);

@Component({
    selector: 'app-high-pie-charts',
    templateUrl: './high-pie-charts.component.html',
    styleUrls: ['./high-pie-charts.component.css']
})
export class HighPieChartsComponent implements OnInit {
    constructor() { }

    ngAfterViewInit() {
        this.createChartPie();
        this.createSemiDonutPieChart();
        this.createDonutPieChart();
        this.createVariablePieChart();
    }

    private createChartPie(): void {
        const chart = Highcharts.chart('chart-pie', {
            chart: {
                type: 'pie',
            },
            title: {
                text: 'Pie Chart',
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
                pointFormat: '<span>Amount: {point.y}</span>',
                useHTML: true,
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Sogou Explorer',
                    y: 1.64
                }, {
                    name: 'Opera',
                    y: 1.6
                }, {
                    name: 'QQ',
                    y: 1.2
                }, {
                    name: 'Other',
                    y: 2.61
                }]
            }],
        } as any);
    }

    private createSemiDonutPieChart(): void {
        const chart = Highcharts.chart('semi-pie', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            credits: {
                enabled: false,
            },
            title: {
                text: 'Browser<br>shares<br>2017',
                align: 'center',
                verticalAlign: 'middle',
                y: 60
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    ['Chrome', 58.9],
                    ['Firefox', 13.29],
                    ['Internet Explorer', 13],
                    ['Edge', 3.78],
                    ['Safari', 3.42],
                    {
                        name: 'Other',
                        y: 7.61,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            }]
        } as any);
    }

    createDonutPieChart() {
        var colors = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
            '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
            categories = [
                'Chrome',
                'Firefox',
                'Internet Explorer',
                'Safari',
                'Edge',
                'Opera',
                'Other'
            ],
            data = [
                {
                    y: 62.74,
                    color: colors[2],
                    drilldown: {
                        name: 'Chrome',
                        categories: [
                            'Chrome v65.0',
                            'Chrome v64.0',
                            'Chrome v63.0',
                            'Chrome v62.0',
                            'Chrome v61.0',
                            'Chrome v60.0',
                            'Chrome v59.0',
                            'Chrome v58.0',
                            'Chrome v57.0',
                            'Chrome v56.0',
                            'Chrome v55.0',
                            'Chrome v54.0',
                            'Chrome v51.0',
                            'Chrome v49.0',
                            'Chrome v48.0',
                            'Chrome v47.0',
                            'Chrome v43.0',
                            'Chrome v29.0'
                        ],
                        data: [
                            0.1,
                            1.3,
                            53.02,
                            1.4,
                            0.88,
                            0.56,
                            0.45,
                            0.49,
                            0.32,
                            0.29,
                            0.79,
                            0.18,
                            0.13,
                            2.16,
                            0.13,
                            0.11,
                            0.17,
                            0.26
                        ]
                    }
                },
                {
                    y: 10.57,
                    color: colors[1],
                    drilldown: {
                        name: 'Firefox',
                        categories: [
                            'Firefox v58.0',
                            'Firefox v57.0',
                            'Firefox v56.0',
                            'Firefox v55.0',
                            'Firefox v54.0',
                            'Firefox v52.0',
                            'Firefox v51.0',
                            'Firefox v50.0',
                            'Firefox v48.0',
                            'Firefox v47.0'
                        ],
                        data: [
                            1.02,
                            7.36,
                            0.35,
                            0.11,
                            0.1,
                            0.95,
                            0.15,
                            0.1,
                            0.31,
                            0.12
                        ]
                    }
                },
                {
                    y: 7.23,
                    color: colors[0],
                    drilldown: {
                        name: 'Internet Explorer',
                        categories: [
                            'Internet Explorer v11.0',
                            'Internet Explorer v10.0',
                            'Internet Explorer v9.0',
                            'Internet Explorer v8.0'
                        ],
                        data: [
                            6.2,
                            0.29,
                            0.27,
                            0.47
                        ]
                    }
                },
                {
                    y: 5.58,
                    color: colors[3],
                    drilldown: {
                        name: 'Safari',
                        categories: [
                            'Safari v11.0',
                            'Safari v10.1',
                            'Safari v10.0',
                            'Safari v9.1',
                            'Safari v9.0',
                            'Safari v5.1'
                        ],
                        data: [
                            3.39,
                            0.96,
                            0.36,
                            0.54,
                            0.13,
                            0.2
                        ]
                    }
                },
                {
                    y: 4.02,
                    color: colors[5],
                    drilldown: {
                        name: 'Edge',
                        categories: [
                            'Edge v16',
                            'Edge v15',
                            'Edge v14',
                            'Edge v13'
                        ],
                        data: [
                            2.6,
                            0.92,
                            0.4,
                            0.1
                        ]
                    }
                },
                {
                    y: 1.92,
                    color: colors[4],
                    drilldown: {
                        name: 'Opera',
                        categories: [
                            'Opera v50.0',
                            'Opera v49.0',
                            'Opera v12.1'
                        ],
                        data: [
                            0.96,
                            0.82,
                            0.14
                        ]
                    }
                },
                {
                    y: 7.62,
                    color: colors[6],
                    drilldown: {
                        name: 'Other',
                        categories: [
                            'Other'
                        ],
                        data: [
                            7.62
                        ]
                    }
                }
            ],
            browserData = [],
            versionsData = [],
            i,
            j,
            dataLen = data.length,
            drillDataLen,
            brightness;
        for (i = 0; i < dataLen; i += 1) {
            // add browser data
            browserData.push({
                name: categories[i],
                y: data[i].y,
                color: data[i].color
            });
            // add version data
            drillDataLen = data[i].drilldown.data.length;
            for (j = 0; j < drillDataLen; j += 1) {
                brightness = 0.2 - (j / drillDataLen) / 5;
                versionsData.push({
                    name: data[i].drilldown.categories[j],
                    y: data[i].drilldown.data[j],
                    color: Highcharts.color(data[i].color).brighten(brightness).get()
                });
            }
        }
        const chart = Highcharts.chart('donut-pie',
            {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: 'Browser market share, January, 2018'
                },
                credits: {
                    enabled: false,
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
                },
                tooltip: {
                    valueSuffix: '%'
                },
                series: [{
                    name: 'Browsers',
                    data: browserData,
                    size: '60%',
                    dataLabels: {
                        formatter: function (): any {
                            var temp = this as any;
                            return temp.y > 5 ? temp.point.name : null;
                        },
                        color: '#ffffff',
                        distance: -30
                    }
                }, {
                    name: 'Versions',
                    data: versionsData,
                    size: '80%',
                    innerSize: '60%',
                    dataLabels: {
                        formatter: function (): any {
                            // display only if larger than 1
                            var temp = this as any;
                            return temp.y > 1 ? '<b>' + temp.point.name + ':</b> ' +
                                temp.y + '%' : null;
                        }
                    },
                    id: 'versions'
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 400
                        },
                        chartOptions: {
                            series: [{
                            }, {
                                id: 'versions',
                                dataLabels: {
                                    enabled: false
                                }
                            }]
                        }
                    }]
                }
            } as any);
    }

    private createVariablePieChart(): void {
        const chart = Highcharts.chart('variable-pie', {
            chart: {
                type: 'variablepie'
            },
            title: {
                text: 'Countries compared by population density and total area.'
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                    'Area (square km): <b>{point.y}</b><br/>' +
                    'Population density (people per square km): <b>{point.z}</b><br/>'
            },
            series: [{
                minPointSize: 10,
                innerSize: '20%',
                zMin: 0,
                name: 'countries',
                data: [{
                    name: 'Spain',
                    y: 505370,
                    z: 92.9
                }, {
                    name: 'France',
                    y: 551500,
                    z: 118.7
                }, {
                    name: 'Poland',
                    y: 312685,
                    z: 124.6
                }, {
                    name: 'Czech Republic',
                    y: 78867,
                    z: 137.5
                }, {
                    name: 'Italy',
                    y: 301340,
                    z: 201.8
                }, {
                    name: 'Switzerland',
                    y: 41277,
                    z: 214.5
                }, {
                    name: 'Germany',
                    y: 357022,
                    z: 235.6
                }]
            }]
        } as any);
    }

    ngOnInit(): void {
    }

}
