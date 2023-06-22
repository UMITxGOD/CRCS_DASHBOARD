import ChartUI from "@/components/Chart";
import DataProvider from "@/components/DataProvider";

export default function Chart_(){
    return (
        <>
        <div className=" mt-20">
            <h1 className="italic text-4xl mb-16 text-center  drop-shadow-md ">Registered Societies from 1986 onwards under MSCS, 2002</h1>
            <div className="mx-20 p-2 shadow-md min-w-fit rounded-xl shadow-green-500">
            <DataProvider>
            <ChartUI/>
            </DataProvider>
         </div>
        </div>
        </>
    )
}
     