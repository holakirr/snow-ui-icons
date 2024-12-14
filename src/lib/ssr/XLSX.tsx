import { CustomIconBase } from '../IconBase'
import { XLSXWeights } from '../defs'
import type { CustomIcon } from '../types'

const XLSXIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={XLSXWeights} />
)

XLSXIcon.displayName = 'XLSXIcon'
export { XLSXIcon }
