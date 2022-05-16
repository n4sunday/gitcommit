import React from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos'

import App from './App'

import 'antd/dist/antd.css'
import './index.css'
import 'aos/dist/aos.css'

AOS.init()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
