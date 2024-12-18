import type { IconProps, IconWeight } from '@phosphor-icons/react'
import type { FC, ReactElement } from 'react'

export type IconSize = 16 | 20 | 24 | 28 | 32 | 40 | 48 | 80

export type CustomIconWeights = Map<IconWeight, ReactElement>

export interface IconBaseProps extends IconProps {
  weights: CustomIconWeights
}

/**
 * Represents the properties for a custom icon.
 */
export interface CustomIconProps extends IconProps {
  /**
   * The size of the icon.
   */
  size?: IconSize
}

export type Icon = FC<CustomIconProps>

export type BaseIcon = FC<IconBaseProps>
