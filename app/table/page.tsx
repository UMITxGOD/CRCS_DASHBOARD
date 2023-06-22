import DataProvider from "@/components/DataProvider";
import Table from "@/components/Table";

export default function Table_(){
    return (
        <>
        <div className=" mt-20">
            <h1 className="italic text-6xl mb-16 text-center  drop-shadow-md ">Registered Societies</h1>
            <div className="mx-20 p-2 shadow-md min-w-fit rounded-xl shadow-green-500">
            <DataProvider>
            <Table />
            </DataProvider>
         </div>
        </div>
        </>
    )
     
}