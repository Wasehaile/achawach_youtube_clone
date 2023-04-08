import { useState } from 'react';
import Icons from '../../Assets/Icons';
import Images from '../../Assets/Images';
import { SearchBar } from './NavigationComponents/SearchBar';


export default function Navbar(props) {
  const [isFocused, setFocus] = useState(false)
  const handleFocus = () => {
    setFocus(true)
  }
  const handleBlur = () => {
    setFocus(false)
  }
  return (
    <nav className='w-full fixed top-0 left-0 h-20 flex items-center justify-evenly border-b-2'>
      <div className='flex mx-8 my-5 w-full items-center'>
        <div className='buttons mr-5 w-8 h-8 flex items-center justify-center cursor-pointer p-2 rounded-full bg-transparent hover:bg-slate-400'>
        <Icons.Menu onClick={props.handleExpand} className='w-8 h-8' />
        </div>
        <div className='flex items-center'>
          <img className='w-7 mr-3' src={Images.achawachLogo} alt="" />
          <h1 className='font-semibold'>ACHAWACH</h1>
        </div>
      </div>
      <div className='flex items-center w-full'>
        <SearchBar isFocused={isFocused} handleFocus={handleFocus} handleBlur={handleBlur}/>
        <div className='buttons w-10 h-10 ml-2 flex justify-center rounded-full items-center'>
          <Icons.Mic />
        </div>
      </div>
      <div className='flex justify-end w-full items-center m-3'>
        <div className='m-2'>
          <Icons.AddVideo className=' w-7 h-6' />
        </div>
        <div className='m-2 flex items-end'>
          <div className='absolute bg-red-500 text-white flex p-2 h-1 items-center w-fit m-3 rounded-full'>
            <p className='text-xs'>5</p>
          </div>
          <Icons.Bell className=' w-7 h-6' />
        </div>
        <div className='m-2 bg-slate-300 w-10 h-10 flex items-center justify-center rounded-full'>
          <h1>W</h1>
        </div>
      </div>
    </nav>);
}
