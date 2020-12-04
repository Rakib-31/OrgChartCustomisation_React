import React, { useEffect } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

export default (props) => {

    const divRef = React.createRef();

    const handler = () => {
        console.log(props.nodes);
    }
    
    useEffect(() => {
        
        const chart = new OrgChart(divRef.current , {
            nodes: props.nodes,
            enableDragDrop: true,
            nodeBinding: {
                field_0: "question",
                field_1: "title",
                field_2: "menu",
                field_3: "partnarName"     
            },
            nodeMenu:{
                add: {text: 'add'},            
                call: {
                    text: 'Response',
                    icon: OrgChart.icon.add(18, 18, '#424242'),
                    onClick: handler
                },
            	edit: {text:"Edit"},
                remove: {text: "Remove"},
                details: {text: 'details'}         
            } 
        });
        chart.nodeMenuUI.menu.edit.onClick = (id) => {
            props.passIdForEdit(id);
        } 

        chart.nodeMenuUI.menu.add.onClick = (id) => {
            props.addChild(id);
        } 

        chart.on('click', (a, b) => {
            console.log(chart);
            props.openModal(true);
            props.nodeId(b.node.id);
        })
    });

    return(
        <div id="tree" ref={divRef} ></div>
    );  
}