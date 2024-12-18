import { IconBase } from '../IconBase'
import { ArrowsDownUpWeights } from '../defs'
import type { Icon } from '../types'

const ArrowsDownUpIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowsDownUpWeights} />
)

ArrowsDownUpIcon.displayName = 'ArrowsDownUpIcon'
export { ArrowsDownUpIcon }
