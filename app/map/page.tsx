import DataProvider from "@/components/DataProvider";
import IndiaMap from "@/components/Map";

export default function Map_(){
    return (
        <>
        <div className="px-8 py-0">
            <DataProvider>
            <IndiaMap />
            </DataProvider>
         </div>

        </>
    )
     
}