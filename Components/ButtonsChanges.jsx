import React, { useEffect } from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa';


import {useProjectStore} from '../zustand/ModalStore'
const hover = 'hover:text-[red] duration-300 cursor-pointer'


  const {activeImge, setActiveImge,activeProject,setActiveProject} = useProjectStore((state) => {{
    activeImge : state.activeImge,
    setActiveImge : state.setActiveImge,
    activeProject:state.activeProject,
    setActiveProject:state.setActiveProject

  }});


const handelDown = e => {
  e.stopPropagation()
  setActiveProject(activeProject + 1)
}

const handelUp = e =>{
  e.stopPropagation()
  setActiveProject(activeProject - 1)
}

const handelLeft = e => {
  e.stopPropagation();
  setActiveImge(activeImge - 1)

}

const handelRight = e => {  
    e.stopPropagation();
    setActiveImge(activeImge + 1)
}



export function ButtonUp() {
  return (
    <FaArrowUp  onClick={handelUp} className={`${hover}`} />
  )
}

export function ButtonDown() {
  return (
    <FaArrowDown onClick={handelDown} className={`${hover}`}/>
  )
}
export function ButtonRight() {
  return (
    <FaArrowRight onClick={handelRight} className={`${hover}`}/>
  )
}
export function ButtonLeft() {
  return (
    <FaArrowLeft onClick={handelLeft} className={`${hover}`}/>

  )
}

