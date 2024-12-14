import { CustomIconBase } from '../IconBase'
import { RightbarWeights as RightBarWeights } from '../defs'
import type { CustomIcon } from '../types'

const RightBarIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={RightBarWeights} />
)

RightBarIcon.displayName = 'RightbarIcon'
export { RightBarIcon as RightbarIcon }
