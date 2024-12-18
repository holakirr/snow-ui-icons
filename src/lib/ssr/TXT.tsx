import { IconBase } from '../IconBase'
import { TXTWeights } from '../defs'
import type { Icon } from '../types'

const TXTIcon: Icon = (props) => <IconBase {...props} weights={TXTWeights} />

TXTIcon.displayName = 'TXTIcon'
export { TXTIcon }
