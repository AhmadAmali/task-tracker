import React from 'react'
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'To-do List Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header;
