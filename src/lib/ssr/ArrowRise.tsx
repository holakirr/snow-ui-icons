import { CustomIconBase } from '../IconBase'
import { ArrowRiseWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowRiseIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowRiseWeights} />
)

ArrowRiseIcon.displayName = 'ArrowRiseIcon'
export { ArrowRiseIcon }
