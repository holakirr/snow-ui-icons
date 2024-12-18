import { IconBase } from '../IconBase'
import { ArrowLineRightWeights } from '../defs'
import type { Icon } from '../types'

const ArrowLineRightIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowLineRightWeights} />
)

ArrowLineRightIcon.displayName = 'ArrowLineRightIcon'
export { ArrowLineRightIcon }
