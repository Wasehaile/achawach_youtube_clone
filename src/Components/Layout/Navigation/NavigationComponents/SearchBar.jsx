import Icons from '../../../Assets/Icons';

export function SearchBar(props) {
  return (<div className='flex items-center justify-end'>
    <div className={`${props.isFocused ? 'w-fit rounded-l-full border-2 outline-red-500 border-red-100 inset-5 h-9 p-5 pr-0 text-red-400 flex border-r-0 items-center' : 'hidden'}`}>
      <Icons.Search />
    </div>
    <input type="search" name="" id="" placeholder='Search'
      onFocus={props.handleFocus}
      onBlur={props.handleBlur}
      className={`relative w-96 h-9 p-5 rounded-l-full ${props.isFocused ? 'rounded-l-none border-l-0' : ''} border-2 outline-none border-red-100`} />
    <div className='buttons w-fit rounded-r-full h-9 p-5 flex items-center border-2'>
      <Icons.Search />
    </div>
  </div>);
}
