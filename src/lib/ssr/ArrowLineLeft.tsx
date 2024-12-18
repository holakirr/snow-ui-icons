import { IconBase } from '../IconBase'
import { ArrowLineLeftWeights } from '../defs'
import type { Icon } from '../types'

const ArrowLineLeftIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowLineLeftWeights} />
)

ArrowLineLeftIcon.displayName = 'ArrowLineLeftIcon'
export { ArrowLineLeftIcon }
