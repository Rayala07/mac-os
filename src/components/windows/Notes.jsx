import { useState } from "react"
import MacWindow from "./MacWindow"

const NotesWindow = () => {
    const notesData = [
  {
    id: 1,
    title: "Welcome",
    content: "Welcome to the macOS Notes app simulation.\nThis is a UI system demo."
  },
  {
    id: 2,
    title: "Weekend Plan",
    content: "• Finish UI project\n• Clean room\n• Laundry\n• Watch movie\n• Go for evening walk"
  },
  {
    id: 3,
    title: "Ideas",
    content: "Build OS UI clone\nTerminal UI\nWindow manager\nDock physics\nSystem animations"
  },
  {
    id: 4,
    title: "Reminders",
    content: "Call electrician\nPay internet bill\nBook bike service\nUpdate resume"
  }
]

const [activeNote, setActiveNote] = useState(notesData[0])

    return (
        <div className="flex h-full text-white text-sm">
            <div id="sideBar" className="w-[29%] border-r border-gray-700 p-2 flex flex-col"> 
                {notesData.map((note) => {
                    return (
                        <div
                            key={note.id}
                            onClick={() => setActiveNote(note)}
                            className={`p-2 rounded-md cursor-pointer transition mb-2
                            ${activeNote.id === note.id
                                ? "bg-white/15"
                                : "hover:bg-white/10 transition duration-300"
                            }
                            `}
                        >
                            <p className="text-sm font-medium">{note.title}</p>
                        </div>
                    )
                })}
            </div>

            <div id="content" className="flex-1 p-3">
                <p className="text-sm font-medium mb-2 cursor-text">{activeNote.title}</p>
                <p className="text-[13px] opacity-80 whitespace-pre-wrap font-sans cursor-text">{activeNote.content}</p>
            </div>
        </div>
    ) 
}


const Notes = () => {
  return (
    <MacWindow>
        <NotesWindow />
    </MacWindow>
  )
}

export default Notes
