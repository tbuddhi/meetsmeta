import React from 'react'
import { SketchPicker, CirclePicker } from 'react-color'

const ThemeConfig = () => {
  return (
    <div className='setting-theme'>
        <div className="page-header">
            <div>Setting-Theme</div>
            <div>Notify</div>
        </div>
        <div className='p-3'>
            Color Picker
            <SketchPicker />
            {/* <CirclePicker /> */}
        </div>
    </div>
  )
}

export default ThemeConfig