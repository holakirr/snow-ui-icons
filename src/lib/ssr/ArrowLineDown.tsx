import { CustomIconBase } from '../IconBase'
import { ArrowLineDownWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowLineDownIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowLineDownWeights} />
)

ArrowLineDownIcon.displayName = 'ArrowLineDownIcon'
export { ArrowLineDownIcon }
