import React from 'react'
import Expanded from './Side bar state/Expanded'
import Collapsed from './Side bar state/Collapsed'
import { SideBarLinks } from '../../Utils/Links'

const sidebar = ({isExpanded}) => {
  return (
    <>
     {!isExpanded?<Expanded Links={SideBarLinks}/>:<Collapsed Links={SideBarLinks}/>}
    </>
  )
}

export default sidebar