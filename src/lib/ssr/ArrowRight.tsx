import { CustomIconBase } from '../IconBase'
import { ArrowRightWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowRightIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowRightWeights} />
)

ArrowRightIcon.displayName = 'ArrowRightIcon'
export { ArrowRightIcon }
