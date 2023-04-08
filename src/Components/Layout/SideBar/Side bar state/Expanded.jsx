import React from 'react'

const Expanded = ({Links}) => {
    return (
        <div>
         <aside className={`border-r-2 h-full fixed top-0 left-0 w-[200px] duration-300 mt-20`}>
         
          {Links.map((links)=>(
            <div>
            <a className='flex  justify-start gap-4 p-3 m-3 w-contain bg-slate-200 items-center h-10 rounded-md' href={links.link}>
              {links.icon}
              {links.label}
            </a>
            </div>
          ))}
        </aside>
        </div>
      )
}

export default Expanded