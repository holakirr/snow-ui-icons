import { CustomIconBase } from '../IconBase'
import { SearchWeights } from '../defs'
import type { CustomIcon } from '../types'

const SearchIcon: CustomIcon = (props) => (
  <CustomIconBase {...props} weights={SearchWeights} />
)

SearchIcon.displayName = 'SearchIcon'
export { SearchIcon }
