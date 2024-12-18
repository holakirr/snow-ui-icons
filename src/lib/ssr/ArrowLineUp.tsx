import { IconBase } from '../IconBase'
import { ArrowLineUpWeights } from '../defs'
import type { Icon } from '../types'

const ArrowLineUpIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowLineUpWeights} />
)

ArrowLineUpIcon.displayName = 'ArrowLineUpIcon'
export { ArrowLineUpIcon }
