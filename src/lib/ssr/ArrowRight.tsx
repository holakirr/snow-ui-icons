import { IconBase } from '../IconBase'
import { ArrowRightWeights } from '../defs'
import type { Icon } from '../types'

const ArrowRightIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowRightWeights} />
)

ArrowRightIcon.displayName = 'ArrowRightIcon'
export { ArrowRightIcon }
