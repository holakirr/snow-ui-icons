import { CustomIconBase } from '../IconBase'
import { DotWeights } from '../defs'
import type { CustomIcon } from '../types'

const DotIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={DotWeights} />
)

DotIcon.displayName = 'DotIcon'
export { DotIcon }
