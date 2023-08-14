import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'
import { BiSolidBriefcase } from 'react-icons/bi';
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { NavIcons } from './NavIcons';
export const NavBar = () => {
  const iconMap = [
    { icon: <AiFillHome/>, desc: 'Home' },
    { icon: <FaUserAlt/>, desc: 'Contacts' },
    { icon: <MdLocationOn/>, desc: 'Skill' },
    { icon: <BiSolidBriefcase/>, desc: 'Project' },
    { icon: <BsFillEnvelopeFill/>, desc: 'Link' }
  ]
  return (
    <NavIcons iconArray={iconMap} />
  )



}


