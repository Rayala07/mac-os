import { RiAppleFill } from '@remixicon/react'


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
    <nav className='flex justify-between items-center px-3 py-[0.15rem] bg-[#1a1a1a54] backdrop-blur-md'>
        <div id='left' className='flex justify-between w-[22%]'>
            <RiAppleFill className={`${text} size-5`}/>
            <div id="nav-item" className='flex gap-6'>
                <p className={`${text} cursor-pointer`}>File</p>
                <p className={`${text} cursor-pointer`}>Edit</p>
                <p className={`${text} cursor-pointer`}>View</p>
                <p className={`${text} cursor-pointer`}>Window</p>
                <p className={`${text} cursor-pointer`}>Help</p>
            </div>
        </div>
        <div id='right' className='flex items-center gap-4'>
            <div className='h-7 w-7'>
                <img src="/Public/assets/icons/battery.png" alt="" />
            </div>
            <div className='h-5.5 w-5.5'>
                <img src="/Public/assets/icons/wifi.png" alt="" />
            </div>

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
