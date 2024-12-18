import { IconBase } from '../IconBase'
import { RectangleWeights } from '../defs'
import type { Icon } from '../types'

const RectangleIcon: Icon = (props) => (
  <IconBase {...props} weights={RectangleWeights} />
)

RectangleIcon.displayName = 'RectangleIcon'
export { RectangleIcon }
