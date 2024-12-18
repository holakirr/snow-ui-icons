import { IconBase } from '../IconBase'
import { ClipboardWeights } from '../defs'
import type { Icon } from '../types'

const ClipboardIcon: Icon = (props) => (
  <IconBase {...props} weights={ClipboardWeights} />
)

ClipboardIcon.displayName = 'ClipboardIcon'
export { ClipboardIcon }
