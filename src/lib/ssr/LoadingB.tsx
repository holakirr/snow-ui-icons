import { CustomIconBase } from '../IconBase'
import { LoadingBWeights } from '../defs'
import type { CustomIcon } from '../types'

const LoadingBIcon: CustomIcon = (props) => (
  <CustomIconBase
    {...props}
    weights={LoadingBWeights}
    style={{
      animation: 'loaderB  1.5s infinite ease-in-out',
    }}
  />
)

LoadingBIcon.displayName = 'LoadingBIcon'
export { LoadingBIcon }
