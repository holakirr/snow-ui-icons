import { CustomIconBase } from '../IconBase'
import { FourPointedStarWeights } from '../defs'
import type { CustomIcon } from '../types'

const FourPointedStarIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={FourPointedStarWeights} />
)

FourPointedStarIcon.displayName = 'FourPointedStarIcon'
export { FourPointedStarIcon }
