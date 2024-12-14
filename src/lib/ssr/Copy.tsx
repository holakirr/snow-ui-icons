import { CustomIconBase } from '../IconBase'
import { CopyWeights } from '../defs'
import type { CustomIcon } from '../types'

const CopyIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={CopyWeights} />
)

CopyIcon.displayName = 'CopyIcon'
export { CopyIcon }
