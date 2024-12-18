import { IconBase } from '../IconBase'
import { ArrowRiseWeights } from '../defs'
import type { Icon } from '../types'

const ArrowRiseIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowRiseWeights} />
)

ArrowRiseIcon.displayName = 'ArrowRiseIcon'
export { ArrowRiseIcon }
