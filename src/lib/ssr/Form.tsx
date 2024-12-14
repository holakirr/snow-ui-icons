import { CustomIconBase } from '../IconBase'
import { FormWeights } from '../defs'
import type { CustomIcon } from '../types'

const FormIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={FormWeights} />
)

FormIcon.displayName = 'FormIcon'
export { FormIcon }
