import React from 'react'
import { notification } from 'antd'

import CardIcon from './components/Card/CardIcon'
import { commit } from './constants/commit'
import Head from './components/Head'

function App() {
  const handleCopy = (text: string) => {
    notification.success({
      message: `${text} copied to the clipboard`,
    })
  }

  return (
    <div className="bg-bgapp flex flex-col items-center min-h-screen">
      <Head />
      <div className="w-full h-full overflow-y-auto container mb-10 grid grid-cols-4 gap-4 px-4">
        {commit?.map((item, index) => (
          <div className="col-span-4 sm:col-span-2 xl:col-span-1" key={index}>
            <CardIcon
              onCopy={handleCopy}
              name={item.name}
              icon={item.icon}
              color={item.color}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
