import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btt--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export default Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}
