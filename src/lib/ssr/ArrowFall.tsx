import { IconBase } from '../IconBase'
import { ArrowFallWeights } from '../defs'
import type { Icon } from '../types'

const ArrowFallIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowFallWeights} />
)

ArrowFallIcon.displayName = 'ArrowFallIcon'
export { ArrowFallIcon }
