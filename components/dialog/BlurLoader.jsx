import React from 'react'
import ReactDOM from 'react-dom'
import { TailSpin } from 'react-loader-spinner'

function BlurLoader() {
    const container = document?.body
    return container ? ReactDOM.createPortal(
        <div className="blur-loader">
            <div className="blur"></div>
            <TailSpin />
        </div>, container) : null
    
    }

export default BlurLoader