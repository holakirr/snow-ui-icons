import { CustomIconBase } from '../IconBase'
import { PPTWeights } from '../defs'
import type { CustomIcon } from '../types'

const PPTIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={PPTWeights} />
)

PPTIcon.displayName = 'PPTIcon'
export { PPTIcon }
