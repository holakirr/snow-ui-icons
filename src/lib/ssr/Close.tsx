import { IconBase } from '../IconBase'
import { CloseWeights } from '../defs'
import type { Icon } from '../types'

const CloseIcon: Icon = (props) => (
  <IconBase {...props} weights={CloseWeights} />
)

CloseIcon.displayName = 'CloseIcon'
export { CloseIcon }
