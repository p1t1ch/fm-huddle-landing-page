import React from 'react'
import { IconType } from 'react-icons'

interface SocialProps extends React.HTMLProps<HTMLAnchorElement> {
  Icon: IconType
  name: string
  link: string
}

function Social({ Icon, name, link, className = '', ...props }: SocialProps) {
  return (
    <a
      href={link}
      className={`grid place-items-center w-10 h-10 rounded-full border hover:text-primary-bright focus-visible:text-primary-bright transition-colors ${className}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      {...props}
    >
      <Icon title={name} />
    </a>
  )
}

export default Social
