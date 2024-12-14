import { CustomIconBase } from '../IconBase'
import { TXTWeights } from '../defs'
import type { CustomIcon } from '../types'

const TXTIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={TXTWeights} />
)

TXTIcon.displayName = 'TXTIcon'
export { TXTIcon }
