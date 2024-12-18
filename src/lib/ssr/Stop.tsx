import { IconBase } from '../IconBase'
import { StopWeights } from '../defs'
import type { Icon } from '../types'

const StopIcon: Icon = (props) => <IconBase {...props} weights={StopWeights} />

StopIcon.displayName = 'StopIcon'
export { StopIcon }
