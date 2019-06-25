import React from 'react'
import cn from 'classnames'

import './button.scss'

interface Props {
  children: any
  /**
   * Custom class name
   */
  className?: string
  /**
   * Theme for button
   * @default "primary"
   */
  theme?: string
  /**
   * Button disabled status
   */
  disabled?: boolean
  /**
   * On click callback
   * @default undefined
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

/** A button to use as example. */
export const Button = ({
  children,
  className = 'button-deafult',
  theme = 'primary',
  disabled = false,
  onClick,
}: Props) => (
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
