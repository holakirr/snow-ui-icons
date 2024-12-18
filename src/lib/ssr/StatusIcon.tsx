import { Check, Warning } from '@phosphor-icons/react/dist/ssr'
import { type IconSize, STATUSES, type Status } from 'holakirr-snow-ui'

import { LoadingBIcon } from './LoadingB'

type StatusIconProps = {
  status: Status
  className?: string
  size: IconSize
}

const StatusIcon = ({ status, className, size, ...props }: StatusIconProps) => {
  switch (status) {
    case STATUSES.progress:
      return (
        <LoadingBIcon
          alt={`Icon for status ${status}`}
          size={size}
          className={`fill-black-100 ${className}`}
          style={{
            fill: 'rgba(var(--color-black))',
          }}
          {...props}
        />
      )
    case STATUSES.error:
      return (
        <Warning
          alt={`Icon for status ${status}`}
          size={size}
          className={`fill-secondary-red ${className}`}
          role="img"
          {...props}
        />
      )
    case STATUSES.success:
      return (
        <Check
          alt={`Icon for status ${status}`}
          size={size}
          className={`fill-secondary-green ${className}`}
          role="img"
          {...props}
        />
      )
    default:
      return null
  }
}

StatusIcon.displayName = 'StatusIcon'
export { StatusIcon }
