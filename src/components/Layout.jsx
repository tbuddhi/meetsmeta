import React from 'react'
import Footer from './Footer'
import SideBar from './SideBar'
import { useTheme } from '../context/ThemeContext'

const Layout = ({ children }) => {
    
    const { title, title_color } = useTheme();
    return (
        <div className='main-app'>
            <h1 className='pt-3' style={{ color: `${title_color}` }}>{title}</h1>
            <div className='main-app_content'>
                <SideBar />
                <div className='main-app_content--wrapper'>
                    <div className='white-box'>
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout