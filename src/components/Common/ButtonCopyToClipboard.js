import React from 'react'
import { copy, showClipboardCopyToast } from '../../utils/copy'

const elementClass = 'sw-ButtonCopyToClipboard'

copy(`.${elementClass}`)

export const ButtonCopyToClipboard = ({
  buttonColor = '#8CE1D7',
  disabled,
  extraClassName = '',
  title = '',
  value
}) => (
  <button
    className={`${elementClass} ${extraClassName}`}
    data-clipboard-action="copy"
    data-clipboard-text={value}
    disabled={disabled}
    onClick={() => {
      showClipboardCopyToast(title)
    }}
    type="button"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
      <g fill={buttonColor} fillRule="nonzero">
        <path d="M10.867 3.493H1.602c-.87 0-1.575.707-1.575 1.579v13.32c0 .872.706 1.58 1.575 1.58h9.265c.87 0 1.576-.708 1.576-1.58V5.073a1.583 1.583 0 0 0-1.576-1.58zm.47 14.896a.474.474 0 0 1-.474.474H1.598a.474.474 0 0 1-.474-.474V5.072c0-.262.213-.475.474-.475h9.265c.261 0 .474.213.474.475v13.317z" />
        <path d="M14.41 0H5.145c-.87 0-1.576.708-1.576 1.579a.55.55 0 0 0 .551.552.55.55 0 0 0 .551-.552c0-.262.213-.475.474-.475h9.265c.261 0 .474.213.474.475v13.32a.474.474 0 0 1-.474.475.55.55 0 0 0-.55.552.55.55 0 0 0 .55.553c.87 0 1.576-.708 1.576-1.58V1.58C15.986.708 15.28 0 14.41 0z" />
      </g>
    </svg>
  </button>
)
