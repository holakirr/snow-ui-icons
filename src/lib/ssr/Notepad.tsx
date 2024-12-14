import { CustomIconBase } from '../IconBase'
import { NotepadWeights } from '../defs'
import type { CustomIcon } from '../types'

const NotepadIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={NotepadWeights} />
)

NotepadIcon.displayName = 'NotepadIcon'
export { NotepadIcon }
