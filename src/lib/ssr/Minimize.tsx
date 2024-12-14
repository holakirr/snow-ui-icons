import { CustomIconBase } from '../IconBase'
import { MinimizeWeights } from '../defs'
import type { CustomIcon } from '../types'

const MinimizeIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={MinimizeWeights} />
)

MinimizeIcon.displayName = 'MinimizeIcon'
export { MinimizeIcon }
