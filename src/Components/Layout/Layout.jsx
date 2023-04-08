import { useState } from "react"
import  Navbar  from "./Navigation/navbar";
import SideBar from './SideBar/sidebar'

const Layout = ({ children }) => {
  const [expand, setExpand] = useState(false)
  const handleExpand = () => {
    setExpand(!expand)
  }
  return (
    <>
      <Navbar handleExpand={handleExpand}></Navbar>
      <SideBar isExpanded={expand} />
      <section className={`mt-20 ${!expand ? 'ml-[250px]' : 'ml-[20px]'} duration-300`}>
        {children}
      </section>
    </>
  )
}

export default Layout