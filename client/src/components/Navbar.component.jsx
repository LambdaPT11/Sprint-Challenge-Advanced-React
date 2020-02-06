import React from 'react';
import useImgMode from './useImgMode.component.jsx';

const Navbar = () => {
    const [imgMode, setImgMode] = useImgMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setImgMode(!imgMode);
    };

    return(
        <nav className="navbar">
            <h2>Women's World Cup</h2>
            <div className="image-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={imgMode ? 'toggle toggled' : 'toggle'}
                />
                </div>

        </nav>
    )
}

export default Navbar;