import { IconBase } from '../IconBase'
import { VerticalScreenWeights } from '../defs'
import type { Icon } from '../types'

const VerticalScreenIcon: Icon = (props) => (
  <IconBase {...props} weights={VerticalScreenWeights} />
)

VerticalScreenIcon.displayName = 'VerticalScreenIcon'
export { VerticalScreenIcon }
