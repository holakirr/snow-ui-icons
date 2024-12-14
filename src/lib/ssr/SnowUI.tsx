import { CustomIconBase } from '../IconBase'
import { SnowUIWeights } from '../defs'
import type { CustomIcon } from '../types'

const SnowUIIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={SnowUIWeights} />
)

SnowUIIcon.displayName = 'SnowUIIcon'
export { SnowUIIcon }
