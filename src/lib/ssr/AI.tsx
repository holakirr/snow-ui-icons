import { CustomIconBase } from '../IconBase'
import { AIWeights } from '../defs'
import type { CustomIcon } from '../types'

const AIIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={AIWeights} />
)

AIIcon.displayName = 'AIIcon'
export { AIIcon }
