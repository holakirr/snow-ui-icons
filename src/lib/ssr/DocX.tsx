import { CustomIconBase } from '../IconBase'
import { DocXWeights } from '../defs'
import type { CustomIcon } from '../types'

const DocXIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={DocXWeights} />
)

DocXIcon.displayName = 'DocXIcon'
export { DocXIcon }
