import { CustomIconBase } from '../IconBase'
import { LineWeights } from '../defs'
import type { CustomIcon } from '../types'

const LineIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={LineWeights} />
)

LineIcon.displayName = 'LineIcon'
export { LineIcon }
