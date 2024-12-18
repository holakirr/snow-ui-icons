import { IconBase } from '../IconBase'
import { ArrowLineDownWeights } from '../defs'
import type { Icon } from '../types'

const ArrowLineDownIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowLineDownWeights} />
)

ArrowLineDownIcon.displayName = 'ArrowLineDownIcon'
export { ArrowLineDownIcon }
