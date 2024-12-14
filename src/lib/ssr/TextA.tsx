import { CustomIconBase } from '../IconBase'
import { TextAWeights } from '../defs'
import type { CustomIcon } from '../types'

const TextAIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={TextAWeights} />
)

TextAIcon.displayName = 'TextAIcon'
export { TextAIcon }
