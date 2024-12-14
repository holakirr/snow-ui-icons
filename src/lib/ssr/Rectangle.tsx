import { CustomIconBase } from '../IconBase'
import { RectangleWeights } from '../defs'
import type { CustomIcon } from '../types'

const RectangleIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={RectangleWeights} />
)

RectangleIcon.displayName = 'RectangleIcon'
export { RectangleIcon }
