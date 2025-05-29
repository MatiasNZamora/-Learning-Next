'use client';

import { setCookie } from "cookies-next";
import { useState } from "react";



const tabOptions = [ 1,2,3,4,5 ];

interface Props {
    currentTap?: number,
    tapsOptions?: number[],
};

export const TabBar = ({ tapsOptions = [1,2,3,4,5], currentTap = 1 }:Props) => {

    const [ selected, setSelected ] = useState(currentTap);
    
    const onTabSelected = ( tab:number ) => {
        setSelected(tab);
        setCookie( 'selectedTab', tab.toString() );
    };

    return (
        <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 ${ 'grid-cols-' + tabOptions.length }`}>

            {
                tabOptions.map(
                    tab => (
                        <div key={tab}>
                            <input 
                                type="radio"
                                checked={ selected === tab }
                                onChange={ () => {} }
                                id={ tab.toString() } 
                                className="peer hidden" 
                            />
                            <label 
                                className=" transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                                onClick={ ()=> onTabSelected(tab) }
                            >
                                {tab}
                            </label>
                        </div>
                    )
                )
            }

        </div>
    )
}