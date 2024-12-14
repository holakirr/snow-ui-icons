import { CustomIconBase } from '../IconBase'
import { MaximizeWeights } from '../defs'
import type { CustomIcon } from '../types'

const MaximizeIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={MaximizeWeights} />
)

MaximizeIcon.displayName = 'MaximizeIcon'
export { MaximizeIcon }
