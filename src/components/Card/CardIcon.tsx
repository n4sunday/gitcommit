import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface IProps {
  name: string
  icon: string
  color: string
  description: string
  onCopy: Function
}

const CardIcon: React.FC<IProps> = ({ icon, name, description, color, onCopy }) => {
  return (
    <CopyToClipboard text={`${icon} ${name}`} onCopy={() => onCopy(`${icon} ${name} `)}>
      <div className="cursor-pointer w-full md:w-30 bg-app rounded-lg overflow-hidden hover:bg-apphover active:scale-90 transition duration-150 select-none">
        <div className={`w-full h-32 flex items-center justify-center text-7xl ${color}`}>{icon}</div>
        <div className="flex justify-center items-center text-white h-10 text-lg font-bold">{name}</div>
        <div className="text-sm h-20 text-center text-white px-2">{description}</div>
      </div>
    </CopyToClipboard>
  )
}

export default CardIcon
