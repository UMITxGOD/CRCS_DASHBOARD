'use client'
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useData } from '../DataProvider';


export default function Table() {
    const data = useData();  
    const keys = Object.keys(data[0])
    const column = keys.map((key)=>{
        if(key === "Sr. No." )
        return { field: key, headerName: key, width: 10 }
        return { field: key, headerName: key, width: 150}
    })
   

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid  rows={data} columns={column} rowCount={10} pageSizeOptions={[10]} slots={{ toolbar: GridToolbar }} getRowId={(row)=>row['Sr. No.']} />
    </div>
  );
}