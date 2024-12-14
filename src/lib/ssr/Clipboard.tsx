import { CustomIconBase } from '../IconBase'
import { ClipboardWeights } from '../defs'
import type { CustomIcon } from '../types'

const ClipboardIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ClipboardWeights} />
)

ClipboardIcon.displayName = 'ClipboardIcon'
export { ClipboardIcon }
