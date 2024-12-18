import { IconBase } from '../IconBase'
import { MaximizeWeights } from '../defs'
import type { Icon } from '../types'

const MaximizeIcon: Icon = (props) => (
  <IconBase {...props} weights={MaximizeWeights} />
)

MaximizeIcon.displayName = 'MaximizeIcon'
export { MaximizeIcon }
