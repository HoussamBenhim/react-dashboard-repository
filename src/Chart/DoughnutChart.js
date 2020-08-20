import React, { Component, useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import zIndex from '@material-ui/core/styles/zIndex';

export default function DoughnutChart({ datas :{data, labels},  handelClickActif }) {

    const [donnees, setDatas] = useState([]);
    const [liblles, setLabels] = useState([]);
    
    
    useEffect(() => {
        
        setDatas(data);
        setLabels(labels);
    }, data, labels)

    // useEffect(() => {
        
         
    //     console.log(data);
    //     console.log(label);
        
      
    // }, data, label)




    return (
        donnees ?
        <div className="chart" style={{ position: 'relative', height: '95%', width: '100%' }}>
            <Doughnut
                data={{
                    datasets: [{
                        data: donnees,
                        backgroundColor: [
                            'rgb(182,197,18)',
                            'rgb(65,161,51)',
                            'rgb(61,106,154)',
                            'rgb(25,159,166)'
                        ],
                        borderWidth: 0
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels:  liblles,

                }}
                getElementsAtEvent={dataset => {
                    dataset.length ? handelClickActif(dataset[0]._model.label, dataset[0]._model.backgroundColor) : console.log('Empty array');
                }}

                options={{
                    // onClick: (evt, item) => {
                    //     console.log(item);

                    //   },


                    maintainAspectRatio: false,
                    cutoutPercentage: 90,
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            fontColor: '#edf0f1',
                            boxWidth: 10,
                            padding: 20,
                            fontFamily: 'Helvetica Neue',

                        },
                        position: 'right',
                    },
                    layout: {
                        padding: {
                            left: 20,
                            right: 0,
                            top: 20,
                            bottom: 26
                        }
                    }

                }}

            />
        </div>
        : null
    );


}
