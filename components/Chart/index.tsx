'use client'
import React, {  useState } from 'react';

import Chart, {
  Series,

} from 'devextreme-react/chart';
import { Autocomplete, TextField } from '@mui/material';
import { flushSync } from 'react-dom';
import { getCountWithKey } from '../Utils';
import { useData } from '../DataProvider';

export default function ChartUI () {
  const data = useData();
  const chartOptions = [
    'State-wise',
    'Year-wise',
    'Type-wise']
  const [chat,setChart] =useState('State-wise');
  const handleChange = (value:string|null)=> {
    flushSync (()=>setChart(value ?? chat));
  }
  let dataSource  = getCountWithKey(chat,data)
  let chartName : string ;
  let chartColor :string ;
if(chat === 'State-wise'){
  chartName = 'State'
  chartColor = 'green'
}
else if(chat === 'Year-wise'){
  chartName='Year'
  chartColor = 'blue'
}
else {chartName='Sector' ; chartColor = "darkviolet"}
    return (
      <>
      <div className='m-5 p-2'>

      <Autocomplete
  disablePortal
  options={chartOptions}
  sx={{ width: 300 }}
  onChange={(_,value)=>{handleChange(value);}}
  renderInput={(params) => <TextField {...params} label="Select Chart"  />}
/>
      </div>
      <Chart id="chart" dataSource={dataSource!}>
      <Series
        valueField="noOfSectors"
        argumentField="states"
        name={chartName}
        type="bar"
        color={chartColor} />
    </Chart>
      </>
    );
}

