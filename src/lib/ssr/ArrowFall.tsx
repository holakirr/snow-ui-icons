import { CustomIconBase } from '../IconBase'
import { ArrowFallWeights } from '../defs'
import type { CustomIcon } from '../types'

const ArrowFallIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ArrowFallWeights} />
)

ArrowFallIcon.displayName = 'ArrowFallIcon'
export { ArrowFallIcon }
