import { Space } from 'antd'
import React from 'react'

const Head: React.FC = () => {
  return (
    <div className="flex items-center h-32 text-white text-6xl font-semibold space-x-4">
      <div>
        <span className="text-[#FF0202]">G</span>
        <span>I</span>
        <span>T</span>
      </div>
      <div>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>I</span>
        <span className="text-yellow-400">T</span>
        <span>🚀 </span>
      </div>
    </div>
  )
}

export default Head
