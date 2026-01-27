import { useState } from 'react'
import MacWindow from './MacWindow'

const TerminalWindow = () => {
    const [lines, setLines] = useState(["Welcome to mac-terminal-zsh",])

    const [input, setInput] = useState("")

    const inputHandler = (e) => {
        setInput(e.target.value)
    }

    const handleCommand = (cmd) => {
        let response = ""

        switch(cmd) {
            case "help":
                response = "Commands: help, user, clear, apps, date"
                break;

            case "user":
                response = "rayala@macos"
                break;

            case "apps":
                response = "Finder  Terminal  Notes  GitHub  Calendar  Mail"
                break;

            case "date":
                response = new Date().toString()
                break;

            case "clear":
                setLines(["Welcome to mac-terminal-zsh",])
                return

            default:
                response = `command not found ${cmd}`
        }

        setLines(prev => [...prev, `> ${cmd}`, response])
    }

    const submitHandler = (e) => {
        if(e.key === "Enter") {
            if(input.trim() !== "") {
                handleCommand(input.trim().toLowerCase())
                setInput("")
            }
        }
    }

    return (
        <div className='h-full flex flex-col text-white text-sm font-mono'>
            <div id='output' className='flex-1 overflow-y-auto p-3 flex flex-col gap-1'>
                {lines.map((line, idx) => (
                    <p key={idx} className='opacity-90'>{line}</p>
                ))}
            </div>

            <div id='input' className='border-t border-gray-700 px-3 py-2 flex items-center gap-2'>
                <span className='text-green-500'>user@macos</span>
                <span className='text-gray-400'>$</span>
                <input type="text" 
                value={input}
                onChange={inputHandler}
                placeholder='type help for more commands..'
                onKeyDown={submitHandler}
                className='bg-transparent outline-none flex-1 text-white text-sm'
                />
            </div>
        </div>
    )
}

const Terminal = () => {
  return (
    <MacWindow>
        <TerminalWindow />
    </MacWindow>
  )
}

export default Terminal
