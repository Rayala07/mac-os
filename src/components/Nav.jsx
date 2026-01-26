import { RiAppleFill, RiBatteryFill, RiSearchLine, RiWifiLine } from '@remixicon/react'


const Nav = () => {
    const text = "text-white text-[0.9rem]"

    const now = new Date();
    
    const dayName = now.toLocaleString('en-us', {weekday: 'long'})
    const day = now.getDate()
    const month = now.toLocaleString('en-us', {month: 'short'})
    const time = now.toLocaleString('en-us', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })

  return (
    <nav className='flex justify-between items-center px-2 py-1 bg-[#24242451] backdrop-blur-2xl'>
        <div id='left' className='flex justify-between w-[22%]'>
            <RiAppleFill className={`${text} size-5`}/>
            <div id="nav-item" className='flex gap-6'>
                <p className={`${text}`}>File</p>
                <p className={`${text}`}>Edit</p>
                <p className={`${text}`}>View</p>
                <p className={`${text}`}>Window</p>
                <p className={`${text}`}>Help</p>
            </div>
        </div>
        <div id='right' className='flex gap-4'>
            <RiBatteryFill className={`${text} size-5`}/>
            <RiWifiLine className={`${text} size-5`}/>
            <RiSearchLine className={`${text} size-5`}/>
            <div className={`${text} flex gap-3`}>
                <div className='flex gap-1'>
                    <p>{dayName}</p>
                    <p>{day}</p>
                    <p>{month}</p>
                </div>
                <p>{time}</p>
            </div>
        </div>
    </nav>
  )
}

export default Nav
