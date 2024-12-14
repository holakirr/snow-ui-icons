import { CustomIconBase } from '../IconBase'
import { VerticalScreenWeights } from '../defs'
import type { CustomIcon } from '../types'

const VerticalScreenIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={VerticalScreenWeights} />
)

VerticalScreenIcon.displayName = 'VerticalScreenIcon'
export { VerticalScreenIcon }
