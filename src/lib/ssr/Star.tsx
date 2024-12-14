import { CustomIconBase } from '../IconBase'
import { StarWeights } from '../defs'
import type { CustomIcon } from '../types'

const StarIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={StarWeights} />
)

StarIcon.displayName = 'StarIcon'
export { StarIcon }
