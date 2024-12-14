import { CustomIconBase } from '../IconBase'
import { ArrowsDownUpWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowsDownUpIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowsDownUpWeights} />
)

ArrowsDownUpIcon.displayName = 'ArrowsDownUpIcon'
export { ArrowsDownUpIcon }
