import { CustomIconBase } from '../IconBase'
import { StopWeights } from '../defs'
import type { CustomIcon } from '../types'

const StopIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={StopWeights} />
)

StopIcon.displayName = 'StopIcon'
export { StopIcon }
