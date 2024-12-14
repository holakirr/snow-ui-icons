import { CustomIconBase } from '../IconBase'
import { ArrowsUpWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowsUpIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowsUpWeights} />
)

ArrowsUpIcon.displayName = 'ArrowsUpIcon'
export { ArrowsUpIcon }
