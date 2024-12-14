import { CustomIconBase } from '../IconBase'
import { ArrowLineRightWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowLineRightIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowLineRightWeights} />
)

ArrowLineRightIcon.displayName = 'ArrowLineRightIcon'
export { ArrowLineRightIcon }
