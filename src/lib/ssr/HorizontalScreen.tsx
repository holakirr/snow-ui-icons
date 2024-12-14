import { CustomIconBase } from '../IconBase'
import { HorizontalScreenWeights } from '../defs'
import type { CustomIcon } from '../types'

const HorizontalScreenIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={HorizontalScreenWeights} />
)

HorizontalScreenIcon.displayName = 'HorizontalScreenIcon'
export { HorizontalScreenIcon }
