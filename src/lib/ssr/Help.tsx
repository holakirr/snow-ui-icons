import { CustomIconBase } from '../IconBase'
import { HelpWeights } from '../defs'
import type { CustomIcon } from '../types'

const HelpIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={HelpWeights} />
)

HelpIcon.displayName = 'HelpIcon'
export { HelpIcon }
