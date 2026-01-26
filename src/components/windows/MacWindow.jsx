import { Children } from "react"
import {Rnd} from "react-rnd"

const MacWindow = ({children}) => {
  return (
    <Rnd>
        <div id="window" className="bg-black h-80 w-90 text-[#adadad] font-sans">
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
            <div id="content">
                {children}
            </div>
            <div id="content"></div>
        </div>
    </Rnd>
  )
}

export default MacWindow
