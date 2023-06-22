'use client'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import { useRef, useState } from 'react';
import Link from 'next/link';
export default function Navbar(){
    const [isFullScreen ,setIsFullScreen] = useState(false);
    const searchInput = useRef<HTMLInputElement>(null);
    const handleSearch =()=>{
        searchInput.current?.focus();
    }
    return <nav>
        <div className="navbar h-14  border border-b-2 border-red-50 flex items-center text-sm  text-gray-600" >
            <div className="wrapper w-full flex p-4 justify-around">
                <div 
                className="search flex items-center border-2 p-2 border-gray-300 rounded-md placeholder:text-sm my-10 mx-3">
                <input 
                className='outline-none bg-transparent'
                ref={searchInput} 
                type="text" 
                placeholder="Search..." />
                <SearchOutlinedIcon onClick={handleSearch}
                />

                </div>
                
                <div className="items flex items-center">
                    <div className="item flex items-center m-5">
                        <LanguageOutlinedIcon className='text-lg'/>
                        English
                    </div>
                    <div className="item flex items-center m-5" onClick={async (e)=>{
                        if(isFullScreen){
                            setIsFullScreen(false);
                            document.exitFullscreen() ; 

                        }
                        else {
                            setIsFullScreen(true);
                            document.documentElement.requestFullscreen({navigationUI:'auto'});
                        }

                    }}>
                        <FullscreenExitOutlinedIcon  className='text-lg'/>
                    </div>
                    <Link href={'https://github.com/UMITxGOD'} target='_' rel='noopener noreferrer'>
                    <div className="item flex items-center m-5">
                        <img
                        className='rounded-[50%] w-8 h-8'
                        src={'https://avatars.githubusercontent.com/u/86766978?v=4'}
                        alt='Profile-Pic'
                        />
                    </div>
                    </Link>
                    
                </div>
                
            </div>
        </div>
    </nav>
}