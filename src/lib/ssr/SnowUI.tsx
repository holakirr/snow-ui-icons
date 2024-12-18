import { IconBase } from '../IconBase'
import { SnowUIWeights } from '../defs'
import type { Icon } from '../types'

const SnowUIIcon: Icon = (props) => (
  <IconBase {...props} weights={SnowUIWeights} />
)

SnowUIIcon.displayName = 'SnowUIIcon'
export { SnowUIIcon }
