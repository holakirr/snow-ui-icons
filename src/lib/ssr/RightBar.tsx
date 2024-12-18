import { IconBase } from '../IconBase'
import { RightBarWeights } from '../defs'
import type { Icon } from '../types'

const RightBarIcon: Icon = (props) => (
  <IconBase {...props} weights={RightBarWeights} />
)

RightBarIcon.displayName = 'RightbarIcon'
export { RightBarIcon }
