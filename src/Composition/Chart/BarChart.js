import React, { Component, useEffect, useState } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export default function BarChart({ datas: { data, labels }, handelClickSecteur , colorSecteur}) {

    const [donnee, setData] = useState([]);
    const [liblles, setLabels] = useState([]);

    const re2 = new RegExp("0", "i");
    useEffect(() => { 
        setData(data);
        setLabels(labels)
    }, data, labels)

    return (
        <div className="chart-container" style={{ position: 'relative', height: '100%', width: '100%' }}>
            <HorizontalBar
                data={{
                    datasets: [{
                        barPercentage: 0.4,
                        minBarLength: 2,
                        data: donnee,
                        backgroundColor: [
                            'rgb(30,72,125)',
                            'rgb(47,85,151)',
                            'rgb(143,170,220)',
                            'rgb(180,199,231)',
                            'rgb(218,227,243)'
                        ],
                        borderWidth: 0
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: liblles,
                }}
                width={70}
                height={35}
                getElementsAtEvent={dataset => {
                    dataset.length ? handelClickSecteur(dataset[0]._model.label, dataset[0]._model.backgroundColor) : console.log('Empty array');
                }}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: 'red',
                            boxWidth: 10,
                            padding: 20,
                            fontFamily: 'Helvetica Neue',

                        }
                    },

                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 20,
                            bottom: 40
                        }
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: true,
                                color: 'rgb(217,217,217)',
                                lineWidth: 0.5,
                                zeroLineWidth: 0,
                                zeroLineColor: 'rgb(30,72,125)',
                                drawBorder: false,
                                borderDash: [5, 5]
                            },
                            ticks: {
                                fontColor: '#edf0f1',
                                fontSize: 12,
                                fontFamily: 'Helvetica Neue',
                                stepSize:1,
                                beginAtZero: true
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false,

                            },
                            ticks: {
                                fontColor: '#edf0f1',
                                fontSize: 13,
                                fontFamily: 'Helvetica Neue',
                                stepSize: 1,
                                beginAtZero: true
                            }
                        }]
                    }

                }
                }
            />
        </div>
    );

}

