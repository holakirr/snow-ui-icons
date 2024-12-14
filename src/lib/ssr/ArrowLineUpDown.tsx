import { CustomIconBase } from '../IconBase'
import { ArrowLineUpDownWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowLineUpDownIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowLineUpDownWeights} />
)

ArrowLineUpDownIcon.displayName = 'ArrowLineUpDownIcon'
export { ArrowLineUpDownIcon }
