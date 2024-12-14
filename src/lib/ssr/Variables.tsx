import { CustomIconBase } from '../IconBase'
import { VariablesWeights } from '../defs'
import type { CustomIcon } from '../types'

const VariablesIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={VariablesWeights} />
)

VariablesIcon.displayName = 'VariablesIcon'
export { VariablesIcon }
