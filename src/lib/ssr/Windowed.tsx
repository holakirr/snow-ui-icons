import { CustomIconBase } from '../IconBase'
import { WindowedWeights } from '../defs'
import type { CustomIcon } from '../types'

const WindowedIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={WindowedWeights} />
)

WindowedIcon.displayName = 'WindowedIcon'
export { WindowedIcon }
