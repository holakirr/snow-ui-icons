import type { IconProps } from '@phosphor-icons/react'
import type { FC, ReactElement } from 'react'

export type IconSize = 16 | 20 | 24 | 28 | 32 | 40 | 48 | 80

export type CustomIconWeights = Map<IconWeight, ReactElement>

export type IconWeight =
  | 'bold'
  | 'duotone'
  | 'fill'
  | 'light'
  | 'regular'
  | 'thin'

export interface IconBaseProps extends IconProps {
  weights: CustomIconWeights
}

/**
 * Represents the properties for a custom icon.
 */
export interface CustomIconProps extends IconProps {
  /**
   * The alternative text for the icon.
   */
  alt: string
}

export type CustomIcon = CustomIconType & { displayName: string }

export interface IconBaseProps extends IconProps {
  weights: CustomIconWeights
}

/**
 * Represents the properties for a custom icon.
 */
export interface CustomIconProps extends IconProps {
  /**
   * The alternative text for the icon.
   */
  alt: string

  /**
   * The size of the icon.
   */
  size: IconSize
}

type CustomIconType = FC<CustomIconProps>

export type Icon = CustomIconType & { displayName?: string }

export type BaseIcon = FC<IconBaseProps>
