import { CustomIconBase } from '../IconBase'
import { GotoWeights } from '../defs'
import type { CustomIcon } from '../types'

const GotoIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={GotoWeights} />
)

GotoIcon.displayName = 'GotoIcon'
export { GotoIcon }
