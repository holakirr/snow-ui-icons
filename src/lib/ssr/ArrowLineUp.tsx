import { CustomIconBase } from '../IconBase'
import { ArrowLineUpWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowLineUpIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowLineUpWeights} />
)

ArrowLineUpIcon.displayName = 'ArrowLineUpIcon'
export { ArrowLineUpIcon }
