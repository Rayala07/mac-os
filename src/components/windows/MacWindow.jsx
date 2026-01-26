import { Children } from "react"
import {Rnd} from "react-rnd"

const MacWindow = ({children}) => {
  return (
    <Rnd
    default={
        {
            width:"40vw",
            height:"40vh",
            x:"300",
            y:"200"
        }
    }
    >
        <div id="window" className="bg-black h-80 w-90 text-[#adadad] font-sans h-[100%] overflow-hidden">
            <div id="nav" className="flex items-center gap-5 px-2 py-1 border-b border-gray-600">
                <div id="dots" className="flex gap-1.5">
                    <div id="red" className="h-3.75 w-3.75 rounded-[50%] bg-red-600"></div>
                    <div id="yellow" className="h-3.75 w-3.75 rounded-[50%] bg-yellow-400"></div>
                    <div id="green" className="h-3.75 w-3.75 rounded-[50%] bg-green-600"></div>
                </div>
                <div id="title">
                    <p className="text-[0.9rem]">rayalaviswanath - zsh</p>
                </div>
            </div>
            <div id="content" className="overflow-scroll">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
