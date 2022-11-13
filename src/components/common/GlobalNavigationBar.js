import React from "react";
import './GlobalNavigationBar.css'

/**
 * Logo 변수화
 * Home 변수화
 * 오른쪽 메뉴들 변수화
 */
class GlobalNavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  setHover(isHover) {
    this.setState({ isHovered: isHover })
  }

  render() {
    return (
      <div className='global-navigation-divider'>
        <div className='global-navigation-bar'>
          <div className='title-and-icon'>
            <p className='icon'>🥔졸지마</p>
            <p className='title'>Potato.mk</p>
          </div>

          <div className='middle-space'/>

          <div className='right-menus'>
            <div className='menu-hover'>
              <p className='menu'>Design</p>
            </div>
          </div>
          <div className='right-menus'>
            <div className='menu-hover'>
              <p className='menu'>Interview</p>
            </div>
          </div>
          <div className='right-menus'>
            <div className='menu-hover'>
              <p className='menu'>Review</p>
            </div>
          </div>
          <div className='right-menus'>
            <div className='menu-hover'>
              <p className='menu'>About</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GlobalNavigationBar;