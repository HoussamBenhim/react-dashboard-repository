import React, { useRef, useEffect, useState } from 'react';
import { select, geoMercator, geoPath } from 'd3'
import useResizeObserver from "use-resize-observer";


function GeoChart({ data, property, countries }) {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [selectedCountry, setSelectedCountry] = useState(null);


    useEffect(() => {
        const svg = select(svgRef.current);
        //const {width, height} = dimensions || wrapperRef.current.getBoudingClientRect();
        const projection = geoMercator().fitSize([650, 270],
            selectedCountry || data).precision(50);
        const geoPathGenerator = geoPath().projection(projection);

        // const minProp = min(data.features, feature=>feature.properties[property])
        // const maxProp = max(data.features, feature=>feature.properties[property])
        // const colorScale = scaleLinear().domain([minProp, maxProp]).range(["#ccc","red"]);


        svg
            .selectAll(".country")
            .data(data.features).join('path')
            .on('click', feature => {

                !selectedCountry ? setSelectedCountry(feature) : setSelectedCountry(null)

                if (!selectedCountry) {
                    svg
                        .selectAll('.label')
                        .text(
                            ''
                        )
                }

            })
            .attr('class', 'country')
            .transition()
            .duration(1000)
            .attr('fill', feature => countries[feature.properties[property]] ? '#B6C512' : 'rgb(23,32,45)')
            .attr('d', feature => geoPathGenerator(feature));


        svg
            .selectAll('.Label')
            .data([selectedCountry])
            .join('text')
            .attr('class', 'label')
            .text(
                feature => selectedCountry ? feature.properties.name + ' : ' + feature.properties[property] : ''
            )
            .attr('fill', 'white')
            .attr('x', 10)
            .attr('y', 25)

    }, [data, countries, dimensions, property, selectedCountry]);


    return (
        <div ref={wrapperRef} style={{ margin: '5px 0px 0px 0px', width: '100%', height: '100%' }}  >
            <svg ref={svgRef} style={{ margin: '0px 0px 0px 0px', width: '100%', height: '100%', stroke: 'white', strokeWidth: '0.3px', strokeOpacity: '0.9' }}></svg>
        </div>
    );

}

export default GeoChart;