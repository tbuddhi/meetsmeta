import React from 'react'
import { useTheme, useThemeUpdate } from '../context/ThemeContext'

const ThemeConfig = () => {
  const { title, title_color, menu_color, menu_text_color } = useTheme();

  const setNewTheme = useThemeUpdate();

  const changeTheme = () => {
    let r = document.querySelector(':root');
    r.style.setProperty('--menu-text-color', menu_text_color);
  }

  return (
    <div className='setting-theme'>
      <div className="page-header">
        <div>Setting-Theme</div>
        <div>Notify</div>
      </div>
      <div className='p-3'>
        <h5>General</h5>
        <div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-5">
              <input type='text' className='form-control' name='title' value={title} onChange={e => setNewTheme(e)} />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Title Color</label>
            <div className="col-sm-1">
              <input type='color' name='title_color' value={title_color} onChange={e => setNewTheme(e)} />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Menu Color</label>
            <div className="col-sm-1">
              <input type='color' name='menu_color' value={menu_color} onChange={e => setNewTheme(e)} />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Menu Text Color</label>
            <div className="col-sm-10 d-flex">
              <input type='color' name='menu_text_color' value={menu_text_color} onChange={e => setNewTheme(e)} />
              <i className='text-warning'>This will be applied after save</i>
            </div>
          </div>
        </div>
        <button className='btn btn-primary' onClick={changeTheme}>Save</button>
      </div>
    </div>
  )
}

export default ThemeConfig