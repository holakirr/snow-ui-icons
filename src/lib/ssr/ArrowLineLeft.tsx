import { CustomIconBase } from '../IconBase'
import { ArrowLineLeftWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowLineLeftIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowLineLeftWeights} />
)

ArrowLineLeftIcon.displayName = 'ArrowLineLeftIcon'
export { ArrowLineLeftIcon }
