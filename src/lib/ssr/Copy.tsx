import { IconBase } from '../IconBase'
import { CopyWeights } from '../defs'
import type { Icon } from '../types'

const CopyIcon: Icon = (props) => <IconBase {...props} weights={CopyWeights} />

CopyIcon.displayName = 'CopyIcon'
export { CopyIcon }
