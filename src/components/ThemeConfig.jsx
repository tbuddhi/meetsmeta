import React, { useState } from 'react'
import { useTheme, useThemeUpdate } from '../context/ThemeContext'

const ThemeConfig = () => {
  const { title, title_color, menu_color, menu_text_color } = useTheme();

  // const [ titleColor, setTitleColor ] = useState(title_color)
  // const [ menuColor, setMenuColor ] = useState(menu_color)
  // const [ menuTextColor, setMenuTextColor ] = useState( menu_text_color)

  const setNewTheme = useThemeUpdate();

  const changeTheme = () => {
    console.log({title_color}, {menu_color}, {menu_text_color});
  }

  return (
    <div className='setting-theme'>
        <div className="page-header">
            <div>Setting-Theme</div>
            <div>Notify</div>
        </div>
        <div className='p-3'>
            <h3>Color Picker</h3>
            <div>
              <input type='text' defaultValue={title}/>
              {/* <p>{title_color}, {titleColor}, {menuColor}, {menuTextColor} </p> */}
              <p>{title_color}, {menu_color}, {menu_text_color} </p>

              <p>Title Color</p>
              <input type='color' name='title_color' value={title_color} onChange={e => setNewTheme(e)} />

              <p>Menu Color</p>
              <input type='color' name='menu_color' value={menu_color} onChange={e => setNewTheme(e)}/>

              <p>Menu Text Color</p>
              <input type='color' name='menu_text_color' value={menu_text_color} onChange={e => setNewTheme(e)}/>
            </div>
            <button className='btn btn-info' onClick={changeTheme}>Save</button>
        </div>
    </div>
  )
}

export default ThemeConfig