import { IconBase } from '../IconBase'
import { XCircleWeights } from '../defs'
import type { Icon } from '../types'

const XCircleIcon: Icon = (props) => (
  <IconBase {...props} weights={XCircleWeights} />
)

XCircleIcon.displayName = 'XCircleIcon'
export { XCircleIcon }
