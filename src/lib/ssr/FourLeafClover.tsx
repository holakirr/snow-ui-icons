import { CustomIconBase } from '../IconBase'
import { FourLeafCloverWeights } from '../defs'
import type { CustomIcon } from '../types'

const FourLeafCloverIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={FourLeafCloverWeights} />
)

FourLeafCloverIcon.displayName = 'FourLeafCloverIcon'
export { FourLeafCloverIcon }
