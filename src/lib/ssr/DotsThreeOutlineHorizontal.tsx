import { CustomIconBase } from '../IconBase'
import { DotsThreeOutlineHorizontalWeights } from '../defs'
import type { CustomIcon } from '../types'

const DotsThreeOutlineHorizontalIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={DotsThreeOutlineHorizontalWeights} />
)

DotsThreeOutlineHorizontalIcon.displayName = 'DotsThreeOutlineHorizontalIcon'
export { DotsThreeOutlineHorizontalIcon }
