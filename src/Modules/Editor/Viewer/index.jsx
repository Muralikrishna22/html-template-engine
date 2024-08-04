import React from 'react'
import convertElementsToHtml from '../../../utils/convertElementsToHtml'
import './styles.css'

const Viewer = ({rootElements}) => {
    console.log(rootElements)
  return (
    <div className='viewer-container'>
        <div dangerouslySetInnerHTML={{__html :convertElementsToHtml(rootElements)}} />
    </div>
  )
}

export default Viewer