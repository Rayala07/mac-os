import React from 'react'
import MacWindow from './MacWindow'
import { useState } from 'react'
import { RiArrowLeftSLine, RiRestartLine } from '@remixicon/react'

const BrowserWindow = () => {

    const siteMap = {
        wikipedia: "https://www.wikipedia.org",
        canvas: "https://edit-it-oz5d.onrender.com/"
    }

    const [home, setIsHome] = useState(true)

    const [url, setUrl] = useState("")
    const [input, setInput] = useState("")

    const [reloadKey, setReloadKey] = useState(0)

    const loadSite = () => {
        const key = input.trim().toLowerCase()

        if(siteMap[key]) {
            setUrl(siteMap[key])
        } else {
            let finalUrl = key

            if(!finalUrl.startsWith("http")) {
                finalUrl = "https://" + finalUrl
            }

            setUrl(finalUrl)
        }

        setInput(siteMap[key])
        setIsHome(false)
    }

    const reloadSite = () => {
        setReloadKey(prev => prev + 1)
    }

    return (
        <div className='h-full w-full flex flex-col bg-[#f5f6f7] text-black'>
            <div id='toolbar' className='flex items-center gap-2 p-2 border-b border-black/10 bg-white'>
                <div className='flex items-center gap-1'>
                    <button className='cursor-pointer'>
                    <RiArrowLeftSLine className='size-[1.3rem]'/>
                    </button>
                    <button onClick={reloadSite} className='cursor-pointer'>
                    <RiRestartLine className='size-[1.1rem]'/>
                    </button>
                </div>
                

                <input 
                type="text" 
                value = {input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && loadSite()}
                placeholder='Search: wikipedia or canvas  -> Press: Enter'
                className='flex-1 border border-slate-300 p-1 rounded-lg text-[0.85em] focus:outline-none'
                />
            </div>

            <div className='flex-1 bg-[url("https://images.unsplash.com/photo-1614850523011-8f49ffc73908?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover overflow-hidden'>
                {home ? (
                    <div className='h-full w-full flex flex-col items-center justify-center text-center text-black/60 gap-3'>
                        <div className='w-9 h-9 rounded-full overflow-hidden'><img src="https://i.pinimg.com/736x/78/43/c6/7843c6bc850bf551c09d42971fc4721a.jpg" alt="" /></div>
                        <p className='text-md font-semibold text-white/80'>Mini Browser</p>
                    </div>
                ) : (
                    <iframe key={reloadKey} src={url} className='w-full h-full border-none'></iframe>
                )}
            </div>
        </div>
    )
}

const Browser = () => {
  return (
    <MacWindow>
        <BrowserWindow />
    </MacWindow>
  )
}

export default Browser
