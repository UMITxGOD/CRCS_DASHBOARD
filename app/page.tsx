'use client'
import ChartUI from "@/components/Chart";
import DataProvider from "@/components/DataProvider";
import App from "@/components/Pie";
import Table from "@/components/Table";


import React from "react";
import IndiaMap from '@/components/Map/index'



export default function HomePage(){
  
return <>
<div className="mx-4 my-2.5 p-2.5 ">
<DataProvider>
<ChartUI/>
<Table/>
<App/>
<IndiaMap/>
</DataProvider>

</div>
</>
}
