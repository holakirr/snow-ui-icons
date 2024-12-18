import { IconBase } from '../IconBase'
import { DefaultIconWeights } from '../defs'
import type { Icon } from '../types'

const DefaultIcon: Icon = (props) => (
  <IconBase {...props} weights={DefaultIconWeights} />
)

DefaultIcon.displayName = 'DefaultIcon'
export { DefaultIcon }
