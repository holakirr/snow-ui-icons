import { CustomIconBase } from '../IconBase'
import { ExplainWeights } from '../defs'
import type { CustomIcon } from '../types'

const ExplainIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={ExplainWeights} />
)

ExplainIcon.displayName = 'ExplainIcon'
export { ExplainIcon }
