
import { Metadata } from 'next'
import './globals.css'
import {Nunito} from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';


const nunito = Nunito({
    subsets:['latin','latin-ext'],
    weight:'500',
})

export const metadata:Metadata ={
    title:"CRCS DASHBOARD",
    authors:[{name:"Umit",url:"https://www.linkedin.com/in/umit-kumar-sahoo-737060240/"} ],
    description:"CRCS DASHBOARD",
    other:{company:"CRCS"}
}

export default function RootLayout({children}:{children:React.ReactNode}){
    
    return <html lang="en" className={nunito.className}>
        <body >
        
            <div className='flex '>
            <Sidebar/>
            <div className="homeContainer flex-[6]">
            <Navbar/>
            {children}
            </div>
            </div>
            
        </body>
    </html>
}