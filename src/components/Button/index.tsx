import React from 'react'
import cn from 'classnames'

import './button.scss'

export interface ButtonProps {
  children: string
  className: string
  theme: string
  disabled: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Button = ({
  children,
  className = 'button-deafult',
  theme = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) => (
  <div
    className={cn(
      'button',
      className,
      disabled ? 'button--disabled' : `button--${theme}`,
    )}
    onClick={disabled ? undefined : onClick}
  >
    {children}
  </div>
)

export default Button
