import { CustomIconBase } from '../IconBase'
import { CloseWeights } from '../defs'
import type { CustomIcon } from '../types'

const CloseIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={CloseWeights} />
)

CloseIcon.displayName = 'CloseIcon'
export { CloseIcon }
