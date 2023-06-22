'use client'
import Image from "next/image";
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import PieChartOutlineTwoToneIcon from '@mui/icons-material/PieChartOutlineTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import Link from "next/link";
export default function Sidebar(){
    const backgroundColor = 'bg-white'
    return <>
    <div className={`sidebar ${backgroundColor} min-h-screen border-r-2 border-red-50 flex flex-col flex-1`}>
        <div className="top h-11 flex items-center justify-center my-3 py-3 border-red-50 border-b-2">
            <Link href='/'>
            <span className="logo pt-3 pb-6" >
                <Image src={'/icon.svg' } 
                className="shadow-md shadow-gray-300 rounded-[50%]"
                alt={'CRCS-LOGO'} height={50} 
                width={50}/>
            </span>
            </Link>
        </div>
        <div className="center pl-2.5">
            <ul>
                <p className="title text-xs font-bold text-gray-500 mt-4 mb-1">MAIN</p>
                <Link href={'/'}>
                <li className="flex items-center p-2 cursor-pointer hover:bg-blue-100 rounded-l-xl">
            <DashboardIcon className="text-base text-blue-600" />
            <span className="text-base font-semibold ml-2.5 text-gray-600"> Dashboard</span>
        </li>
                </Link>
        <p className="title text-xs font-bold text-gray-500 mt-4 mb-1">LISTS</p>
        
        <Link href={'/chart'}>
        <li className="flex items-center p-2 cursor-pointer hover:bg-blue-100 rounded-l-xl">
            <InsertChartTwoToneIcon className="text-base text-blue-600" /> 
            <span className="text-base font-semibold ml-2.5 text-gray-600">Chart</span>
        </li>
        </Link>
        <Link href={'/table'}>
        <li className="flex items-center p-2 cursor-pointer hover:bg-blue-100 rounded-l-xl">
            <TableChartTwoToneIcon className="text-base text-blue-600" /> 
            <span className="text-base font-semibold ml-2.5 text-gray-600">Table</span>
        </li>
        </Link>
        <Link href={'/map'}>
        <li className="flex items-center p-2 cursor-pointer hover:bg-blue-100 rounded-l-xl">
            <MapTwoToneIcon  className="text-base text-blue-600" /> 
            <span className="text-base font-semibold ml-2.5 text-gray-600">map</span>
        </li>
        </Link>
        

        <Link href={'/pie'}>
        <li className="flex items-center p-2 cursor-pointer hover:bg-blue-100 rounded-l-xl">
            <PieChartOutlineTwoToneIcon  className="text-base text-blue-600" /> 
            <span className="text-base font-semibold ml-2.5 text-gray-600">Pie</span>
        </li>
        </Link>

            </ul>

        </div>
    </div>
       
    </>
}