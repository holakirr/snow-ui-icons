import { IconBase } from '../IconBase'
import { ArrowsDownWeights } from '../defs'
import type { Icon } from '../types'

const ArrowsDownIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowsDownWeights} />
)

ArrowsDownIcon.displayName = 'ArrowsDownIcon'
export { ArrowsDownIcon }
