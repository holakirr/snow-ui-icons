import { CustomIconBase } from '../IconBase'
import { AddWeights } from '../defs'
import type { CustomIcon } from '../types'

const AddIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={AddWeights} />
)

AddIcon.displayName = 'AddIcon'
export { AddIcon }
