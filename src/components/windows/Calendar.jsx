import { useState } from 'react'
import MacWindow from './MacWindow'

const CalendarWindow = () => {
    const today = new Date()
    const [currentDate] = useState(today)

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    const weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]

    const daysArray = []

    const caldendarGrid = (firstDayOfMonth, daysInMonth) => {
    for(let i = 0; i < firstDayOfMonth; i++) {
        daysArray.push(null) 
    }

    for(let d = 1; d <= daysInMonth; d++) {
        daysArray.push(d)
    }
}

    caldendarGrid(firstDayOfMonth, daysInMonth)

    return (
        <div className='h-full w-full flex flex-col bg-[#f5f6f7] text-[#1e1e1e]'>
            <div id='header' className='px-3 py-2 border-b border-black/10 bg-white'>
                <p className='text-sm font-semibold'>{monthNames[month]} {year}</p>
                <p className='text-[11px] opacity-60'>Calendar</p>
            </div>

            <div id='week-days' className='grid grid-cols-7 text-[11px] text-black/60 px-2 pt-2 bg-[#f5f6f7]'>
                {weekDays.map((day) => (
                    <div key={day} className='text-center py-1 font-medium'>
                        {day}
                    </div>
                ))}
            </div>

            <div id='days-grid' className='flex-1 grid grid-cols-7 gap-1 p-2 text-xs bg-[#f5f6f7]'>
                {daysArray.map((day, i) => {
                    const isToday = day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear()

                    return (
                        <div key={i}
                        className={`rounded-md flex items-center justify-center cursor-pointer transition duration-300
                            ${day ? "text-black" : "text-transparent"}
                            ${isToday ? "bg-green-600 text-white font-semibold hover:bg-green-500" : day ? "hover:bg-black/10" : ""}
                            }`}
                        >
                            {day || ""}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Calendar = ({windowName, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
        <CalendarWindow />
    </MacWindow>
  )
}

export default Calendar
