import React, { Component , useState, useEffect} from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export default function RatingBarCahrt({data, labels}) {

    const [donnee, setData] = useState();
    const [liblles, setLabels] = useState();
    
    useEffect(() => {
        setData(data);
        setLabels(labels)
    }, data, labels)
    
        return (
            <div className="chart-container" style={{ position: 'relative', height: '100%', width: '100%' }}>
                <HorizontalBar

                    data={{
                        datasets: [{
                            barPercentage: 0.2,
            
                            minBarLength: 2,
                            data: donnee,
                            backgroundColor: [
                                '#B6C512',
                                '#B6C512',
                                '#B6C512',
                                '#B6C512',
                                '#B6C512',
                                '#B6C512',
                                '#B6C512',    
                            ],
                            borderWidth: 0
                        }],
            
                        // These labels appear in the legend and in the tooltips when hovering different arcs
                        labels: liblles,     
                    }}
                    width={70}
                    height={35}
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
                                left: 10,
                                right: 10,
                                top: 20,
                                bottom: 40
                            }
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:true,
                                    color:'rgb(217,217,217)',
                                    lineWidth:0.5,
                                    zeroLineWidth:0,
                                    zeroLineColor :'rgb(30,72,125)',
                                    drawBorder: false,
                                    borderDash:[5,5]
                                },
                                ticks: {
                                    fontColor: '#edf0f1',
                                    fontSize: 12,
                                    fontFamily:'Helvetica Neue',
                                    stepSize: 10,
                                    beginAtZero: true
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false,
                                    
                                } ,
                                ticks: {
                                    fontColor: '#edf0f1',
                                    fontSize: 15,
                                    fontFamily:'Helvetica Neue',
                                    stepSize: 5,
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

