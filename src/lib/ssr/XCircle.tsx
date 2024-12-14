import { CustomIconBase } from '../IconBase'
import { XCircleWeights } from '../defs'
import type { CustomIcon } from '../types'

const XCircleIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={XCircleWeights} />
)

XCircleIcon.displayName = 'XCircleIcon'
export { XCircleIcon }
