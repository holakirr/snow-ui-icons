import { CustomIconBase } from '../IconBase'
import { ArrowsDownWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowsDownIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowsDownWeights} />
)

ArrowsDownIcon.displayName = 'ArrowsDownIcon'
export { ArrowsDownIcon }
