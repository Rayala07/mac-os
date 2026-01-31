import { Children } from "react"
import {Rnd} from "react-rnd"

const MacWindow = ({children, windowName, setWindowState}) => {
  return (
    <Rnd
    default={
        {
            width:"35vw",
            height:"40vh",
            x:"300",
            y:"200"
        }
    }
    >
        <div id="window" className="bg-black text-[#adadad] font-sans h-full flex flex-col">
            <div id="nav" className="flex items-center gap-5 px-2 py-1 border-b border-gray-600">
                <div id="dots" className="flex gap-1.5">
                    <div 
                    id="red" 
                    className="h-3 w-3 rounded-[50%] bg-red-500 cursor-default"
                    onClick={() => (setWindowState((prev) => ({...prev, [windowName]: false})))}
                    ></div>
                    <div id="yellow" className="h-3 w-3 rounded-[50%] bg-yellow-300"></div>
                    <div id="green" className="h-3 w-3 rounded-[50%] bg-green-400"></div>
                </div>
                <div id="title">
                    <p className="text-[0.9rem]">rayalaviswanath - zsh</p>
                </div>
            </div>
            <div id="content" className="flex-1 overflow-y-auto">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
