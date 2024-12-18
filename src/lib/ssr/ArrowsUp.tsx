import { IconBase } from '../IconBase'
import { ArrowsUpWeights } from '../defs'
import type { Icon } from '../types'

const ArrowsUpIcon: Icon = (props) => (
  <IconBase {...props} weights={ArrowsUpWeights} />
)

ArrowsUpIcon.displayName = 'ArrowsUpIcon'
export { ArrowsUpIcon }
