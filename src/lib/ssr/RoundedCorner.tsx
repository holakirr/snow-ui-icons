import { CustomIconBase } from '../IconBase'
import { RoundedCornerWeights } from '../defs'
import type { CustomIcon } from '../types'

const RoundedCornerIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={RoundedCornerWeights} />
)

RoundedCornerIcon.displayName = 'RoundedCornerIcon'
export { RoundedCornerIcon }
