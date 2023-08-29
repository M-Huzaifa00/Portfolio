import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'
import { BiSolidBriefcase } from 'react-icons/bi';
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { NavIcons } from './NavIcons';
import { useShifterStore } from '../Zustand/useShifterStore';
export const NavBar = () => {
  const { Home , Contact , Skill , Project , Link }  = useShifterStore()
  const iconMap = [
    { icon: <AiFillHome/>, desc: 'Home' , flag:Home },
    { icon: <FaUserAlt/>, desc: 'Contacts' , flag:Contact  },
    { icon: <MdLocationOn/>, desc: 'Skill' , flag:Skill },
    { icon: <BiSolidBriefcase/>, desc: 'Project' , flag : Project },
    { icon: <BsFillEnvelopeFill/>, desc: 'Link' , flag : Link }
  ]
  return (
    <NavIcons iconArray={iconMap} />
  )



}


