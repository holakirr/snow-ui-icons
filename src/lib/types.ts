import type { IconProps, IconWeight } from '@phosphor-icons/react'
import type { JSX, ReactElement } from 'react'

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
   * The alternative text for the icon.
   */
  alt: string
}

type CustomIconType = (props: CustomIconProps) => JSX.Element

export type CustomIcon = CustomIconType & { displayName: string }

export type BaseIcon = (props: IconBaseProps) => JSX.Element

export type Status = 'success' | 'error' | 'progress'
