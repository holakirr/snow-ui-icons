import { IconBase } from '../IconBase'
import { StarWeights } from '../defs'
import type { Icon } from '../types'

const StarIcon: Icon = (props) => <IconBase {...props} weights={StarWeights} />

StarIcon.displayName = 'StarIcon'
export { StarIcon }
