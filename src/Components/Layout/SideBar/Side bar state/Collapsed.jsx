import React from 'react'

const Collapsed = ({Links}) => {
    return (
        <div>
         <aside className={`border-r-2 h-full fixed top-0 left-0 w-[50px] duration-300 mt-20`}>
         {Links.map((links)=>(
            <div>
            <a className='flex  justify-start gap-4 p-3 mt-3 w-contain items-center h-10 rounded-md' href={links.link}>
              {links.icon}
            </a>
            </div>
          ))}
        </aside>
        </div>
      )
}

export default Collapsed