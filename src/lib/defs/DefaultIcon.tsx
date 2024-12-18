import type { CustomIconWeights } from '../types'

export const DefaultIconWeights: CustomIconWeights = new Map([
  [
    'thin',
    <path
      key="DefaultIconThin"
      d="M19.5 5C19.5 4.72386 19.7239 4.5 20 4.5H24C25.933 4.5 27.5 6.067 27.5 8V12C27.5 12.2761 27.2761 12.5 27 12.5C26.7239 12.5 26.5 12.2761 26.5 12V8C26.5 6.61929 25.3807 5.5 24 5.5H20C19.7239 5.5 19.5 5.27614 19.5 5ZM17.0607 11.6464L20.4246 15.0103C21.0104 15.5961 21.0104 16.5458 20.4246 17.1316L17.0607 20.4956C16.4749 21.0814 15.5251 21.0814 14.9393 20.4956L11.5754 17.1316C10.9896 16.5459 10.9896 15.5961 11.5754 15.0103L14.9393 11.6464C15.5251 11.0606 16.4749 11.0606 17.0607 11.6464ZM16.3536 12.3535C16.1583 12.1582 15.8417 12.1582 15.6464 12.3535L12.2825 15.7174C12.0872 15.9127 12.0872 16.2293 12.2825 16.4245L15.6464 19.7885C15.8417 19.9838 16.1583 19.9838 16.3536 19.7885L19.7175 16.4245C19.9128 16.2293 19.9128 15.9127 19.7175 15.7174L16.3536 12.3535ZM12 27.5C12.2761 27.5 12.5 27.2761 12.5 27C12.5 26.7239 12.2761 26.5 12 26.5H8C6.61929 26.5 5.5 25.3807 5.5 24L5.5 20C5.5 19.7239 5.27614 19.5 5 19.5C4.72386 19.5 4.5 19.7239 4.5 20V24C4.5 25.933 6.067 27.5 8 27.5H12ZM5 12.5C4.72386 12.5 4.5 12.2761 4.5 12V8C4.5 6.067 6.067 4.5 8 4.5H12C12.2761 4.5 12.5 4.72386 12.5 5C12.5 5.27614 12.2761 5.5 12 5.5L8 5.5C6.61929 5.5 5.5 6.61929 5.5 8L5.5 12C5.5 12.2761 5.27614 12.5 5 12.5ZM27.5 20C27.5 19.7239 27.2761 19.5 27 19.5C26.7239 19.5 26.5 19.7239 26.5 20V24C26.5 25.3807 25.3807 26.5 24 26.5H20C19.7239 26.5 19.5 26.7239 19.5 27C19.5 27.2761 19.7239 27.5 20 27.5H24C25.933 27.5 27.5 25.933 27.5 24V20Z"
    />,
  ],
  [
    'light',
    <path
      key="DefaultIconLight"
      d="M19.25 5C19.25 4.58579 19.5858 4.25 20 4.25H24C26.0711 4.25 27.75 5.92893 27.75 8V12C27.75 12.4142 27.4142 12.75 27 12.75C26.5858 12.75 26.25 12.4142 26.25 12V8C26.25 6.75736 25.2426 5.75 24 5.75H20C19.5858 5.75 19.25 5.41421 19.25 5ZM17.4142 11.2929L20.7782 14.6568C21.5592 15.4379 21.5592 16.7042 20.7782 17.4853L17.4142 20.8492C16.6332 21.6303 15.3668 21.6303 14.5858 20.8492L11.2218 17.4853C10.4408 16.7042 10.4408 15.4379 11.2218 14.6568L14.5858 11.2929C15.3668 10.5118 16.6332 10.5118 17.4142 11.2929ZM16.3536 12.3535C16.1583 12.1583 15.8417 12.1583 15.6464 12.3535L12.2825 15.7175C12.0872 15.9128 12.0872 16.2293 12.2825 16.4246L15.6464 19.7886C15.8417 19.9838 16.1583 19.9838 16.3536 19.7886L19.7175 16.4246C19.9128 16.2293 19.9128 15.9128 19.7175 15.7175L16.3536 12.3535ZM12 27.75C12.4142 27.75 12.75 27.4142 12.75 27C12.75 26.5858 12.4142 26.25 12 26.25H8C6.75736 26.25 5.75 25.2426 5.75 24L5.75 20C5.75 19.5858 5.41421 19.25 5 19.25C4.58579 19.25 4.25 19.5858 4.25 20V24C4.25 26.0711 5.92893 27.75 8 27.75H12ZM5 12.75C4.58579 12.75 4.25 12.4142 4.25 12V8C4.25 5.92893 5.92893 4.25 8 4.25H12C12.4142 4.25 12.75 4.58579 12.75 5C12.75 5.41421 12.4142 5.75 12 5.75L8 5.75C6.75736 5.75 5.75 6.75736 5.75 8L5.75 12C5.75 12.4142 5.41421 12.75 5 12.75ZM27.75 20C27.75 19.5858 27.4142 19.25 27 19.25C26.5858 19.25 26.25 19.5858 26.25 20V24C26.25 25.2426 25.2426 26.25 24 26.25H20C19.5858 26.25 19.25 26.5858 19.25 27C19.25 27.4142 19.5858 27.75 20 27.75H24C26.0711 27.75 27.75 26.0711 27.75 24V20Z"
    />,
  ],
  [
    'regular',
    <path
      key="DefaultIconRegular"
      d="M19 5C19 4.44772 19.4477 4 20 4H24C26.2091 4 28 5.79086 28 8V12C28 12.5523 27.5523 13 27 13C26.4477 13 26 12.5523 26 12V8C26 6.89543 25.1046 6 24 6H20C19.4477 6 19 5.55228 19 5ZM17.7678 10.9393L21.1317 14.3033C22.108 15.2796 22.108 16.8625 21.1317 17.8388L17.7678 21.2028C16.7915 22.1791 15.2085 22.1791 14.2322 21.2028L10.8683 17.8388C9.89196 16.8625 9.89196 15.2796 10.8683 14.3033L14.2322 10.9393C15.2085 9.96303 16.7915 9.96303 17.7678 10.9393ZM16.3536 12.3536C16.1583 12.1583 15.8417 12.1583 15.6464 12.3536L12.2825 15.7175C12.0872 15.9128 12.0872 16.2294 12.2825 16.4246L15.6464 19.7886C15.8417 19.9838 16.1583 19.9838 16.3536 19.7886L19.7175 16.4246C19.9128 16.2294 19.9128 15.9128 19.7175 15.7175L16.3536 12.3536ZM12 28C12.5523 28 13 27.5523 13 27C13 26.4477 12.5523 26 12 26H8C6.89543 26 6 25.1046 6 24L6 20C6 19.4477 5.55229 19 5 19C4.44772 19 4 19.4477 4 20V24C4 26.2091 5.79086 28 8 28H12ZM5 13C4.44772 13 4 12.5523 4 12V8C4 5.79086 5.79086 4 8 4H12C12.5523 4 13 4.44771 13 5C13 5.55228 12.5523 6 12 6L8 6C6.89543 6 6 6.89543 6 8L6 12C6 12.5523 5.55229 13 5 13ZM28 20C28 19.4477 27.5523 19 27 19C26.4477 19 26 19.4477 26 20V24C26 25.1046 25.1046 26 24 26H20C19.4477 26 19 26.4477 19 27C19 27.5523 19.4477 28 20 28H24C26.2091 28 28 26.2091 28 24V20Z"
    />,
  ],
  [
    'bold',
    <path
      key="DefaultIconBold"
      d="M18.5 5C18.5 4.17157 19.1716 3.5 20 3.5H24C26.4853 3.5 28.5 5.51472 28.5 8V12C28.5 12.8284 27.8284 13.5 27 13.5C26.1716 13.5 25.5 12.8284 25.5 12V8C25.5 7.17157 24.8284 6.5 24 6.5H20C19.1716 6.5 18.5 5.82843 18.5 5ZM18.4749 10.2322L21.8388 13.5962C23.2057 14.963 23.2057 17.1791 21.8388 18.5459L18.4749 21.9099C17.108 23.2767 14.892 23.2767 13.5251 21.9099L10.1612 18.5459C8.79433 17.1791 8.79433 14.963 10.1612 13.5962L13.5251 10.2322C14.892 8.8654 17.108 8.8654 18.4749 10.2322ZM16.3536 12.3536C16.1583 12.1583 15.8417 12.1583 15.6464 12.3536L12.2825 15.7175C12.0872 15.9128 12.0872 16.2294 12.2825 16.4246L15.6464 19.7886C15.8417 19.9838 16.1583 19.9838 16.3536 19.7886L19.7175 16.4246C19.9128 16.2294 19.9128 15.9128 19.7175 15.7175L16.3536 12.3536ZM12 28.5C12.8284 28.5 13.5 27.8284 13.5 27C13.5 26.1716 12.8284 25.5 12 25.5H8C7.17157 25.5 6.5 24.8284 6.5 24L6.5 20C6.5 19.1716 5.82843 18.5 5 18.5C4.17157 18.5 3.5 19.1716 3.5 20V24C3.5 26.4853 5.51472 28.5 8 28.5H12ZM5 13.5C4.17157 13.5 3.5 12.8284 3.5 12V8C3.5 5.51472 5.51472 3.5 8 3.5H12C12.8284 3.5 13.5 4.17157 13.5 5C13.5 5.82843 12.8284 6.5 12 6.5H8C7.17157 6.5 6.5 7.17157 6.5 8L6.5 12C6.5 12.8284 5.82843 13.5 5 13.5ZM28.5 20C28.5 19.1716 27.8284 18.5 27 18.5C26.1716 18.5 25.5 19.1716 25.5 20V24C25.5 24.8284 24.8284 25.5 24 25.5H20C19.1716 25.5 18.5 26.1716 18.5 27C18.5 27.8284 19.1716 28.5 20 28.5H24C26.4853 28.5 28.5 26.4853 28.5 24V20Z"
    />,
  ],
  [
    'fill',
    <g key="DefaultIconFill">
      <path d="M16.7071 12.7071C16.3166 12.3166 15.6834 12.3166 15.2929 12.7071L12.636 15.364C12.2455 15.7545 12.2455 16.3877 12.636 16.7782L15.2929 19.435C15.6834 19.8256 16.3166 19.8256 16.7071 19.435L19.364 16.7782C19.7545 16.3877 19.7545 15.7545 19.364 15.364L16.7071 12.7071Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 5.79086 5.79086 4 8 4H24C26.2091 4 28 5.79086 28 8V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24V8ZM14.5858 10.4142C15.3668 9.63316 16.6332 9.63316 17.4142 10.4142L21.6569 14.6569C22.4379 15.4379 22.4379 16.7042 21.6569 17.4853L17.4142 21.7279C16.6332 22.509 15.3668 22.509 14.5858 21.7279L10.3431 17.4853C9.5621 16.7042 9.5621 15.4379 10.3431 14.6569L14.5858 10.4142Z"
      />
    </g>,
  ],
  [
    'duotone',
    <g key="DefaultIconDuotone">
      <path
        d="M19 5C19 4.44772 19.4477 4 20 4H24C26.2091 4 28 5.79086 28 8V12C28 12.5523 27.5523 13 27 13C26.4477 13 26 12.5523 26 12V8C26 6.89543 25.1046 6 24 6H20C19.4477 6 19 5.55228 19 5ZM13 27C13 27.5523 12.5523 28 12 28H8C5.79086 28 4 26.2091 4 24V20C4 19.4477 4.44772 19 5 19C5.55229 19 6 19.4477 6 20L6 24C6 25.1046 6.89543 26 8 26H12C12.5523 26 13 26.4477 13 27ZM4 12C4 12.5523 4.44772 13 5 13C5.55229 13 6 12.5523 6 12L6 8C6 6.89543 6.89543 6 8 6L12 6C12.5523 6 13 5.55228 13 5C13 4.44771 12.5523 4 12 4H8C5.79086 4 4 5.79086 4 8V12ZM27 19C27.5523 19 28 19.4477 28 20V24C28 26.2091 26.2091 28 24 28H20C19.4477 28 19 27.5523 19 27C19 26.4477 19.4477 26 20 26H24C25.1046 26 26 25.1046 26 24V20C26 19.4477 26.4477 19 27 19ZM16.3536 12.3536C16.1583 12.1583 15.8417 12.1583 15.6464 12.3536L12.2825 15.7175C12.0872 15.9128 12.0872 16.2294 12.2825 16.4246L15.6464 19.7886C15.8417 19.9838 16.1583 19.9838 16.3536 19.7886L19.7175 16.4246C19.9128 16.2294 19.9128 15.9128 19.7175 15.7175L16.3536 12.3536Z"
        opacity="0.1"
      />
      <path d="M17.7677 10.9394L21.1317 14.3034C22.108 15.2797 22.108 16.8626 21.1317 17.8389L17.7677 21.2029C16.7914 22.1792 15.2085 22.1792 14.2322 21.2029L10.8682 17.8389C9.89191 16.8626 9.89191 15.2797 10.8682 14.3034L14.2322 10.9394C15.2085 9.96309 16.7914 9.96309 17.7677 10.9394ZM16.3535 12.3536C16.1582 12.1584 15.8417 12.1584 15.6464 12.3536L12.2824 15.7176C12.0872 15.9128 12.0872 16.2294 12.2824 16.4247L15.6464 19.7886C15.8417 19.9839 16.1582 19.9839 16.3535 19.7886L19.7175 16.4247C19.9127 16.2294 19.9127 15.9128 19.7175 15.7176L16.3535 12.3536Z" />
    </g>,
  ],
])
