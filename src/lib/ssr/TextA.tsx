import { IconBase } from '../IconBase'
import { TextAWeights } from '../defs'
import type { Icon } from '../types'

const TextAIcon: Icon = (props) => (
  <IconBase {...props} weights={TextAWeights} />
)

TextAIcon.displayName = 'TextAIcon'
export { TextAIcon }
