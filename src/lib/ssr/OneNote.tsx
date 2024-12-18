import { IconBase } from '../IconBase'
import { OneNoteWeights } from '../defs'
import type { Icon } from '../types'

const OneNoteIcon: Icon = (props) => (
  <IconBase {...props} weights={OneNoteWeights} />
)

OneNoteIcon.displayName = 'OneNoteIcon'
export { OneNoteIcon }
