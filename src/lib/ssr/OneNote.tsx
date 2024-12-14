import { CustomIconBase } from '../IconBase'
import { OneNoteWeights } from '../defs'
import type { CustomIcon } from '../types'

const OneNoteIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={OneNoteWeights} />
)

OneNoteIcon.displayName = 'OneNoteIcon'
export { OneNoteIcon }
