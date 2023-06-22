'use client'
import React from 'react';

import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from 'devextreme-react/pie-chart';
import { getCountWithKey } from '../Utils';
import { LegendClickEvent, PointClickEvent } from 'devextreme/viz/pie_chart';

export default function App ()  {
    
        const areas = getCountWithKey("Sector Type");
        function pointClickHandler(e:PointClickEvent) {
            toggleVisibility(e.target);
          }
        
         function legendClickHandler(e:LegendClickEvent) {
            const arg = e.target;
            const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
        
            toggleVisibility(item);
          }
        
         function toggleVisibility(item:any) {
            item.isVisible() ? item.hide() : item.show();
          }

   
    return (
      <PieChart
        id="pie"
        dataSource={areas}
        palette="Bright"
        title="Sectors"
        onPointClick={pointClickHandler}
        onLegendClick={legendClickHandler}
      >
        <Series
          argumentField="states"
          valueField="noOfSectors"
        >
          <Label visible={true}>
            <Connector visible={true} width={1} />
          </Label>
        </Series>

        <Size width={500} />
        <Export enabled={true} />
      </PieChart>
    );
  


}
