import { IconBase } from '../IconBase'
import { FourLeafCloverWeights } from '../defs'
import type { Icon } from '../types'

const FourLeafCloverIcon: Icon = (props) => (
  <IconBase {...props} weights={FourLeafCloverWeights} />
)

FourLeafCloverIcon.displayName = 'FourLeafCloverIcon'
export { FourLeafCloverIcon }
