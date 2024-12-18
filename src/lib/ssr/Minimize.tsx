import { IconBase } from '../IconBase'
import { MinimizeWeights } from '../defs'
import type { Icon } from '../types'

const MinimizeIcon: Icon = (props) => (
  <IconBase {...props} weights={MinimizeWeights} />
)

MinimizeIcon.displayName = 'MinimizeIcon'
export { MinimizeIcon }
