import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

function Icon({ children, ...props }: IconProps) {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{children}</svg>
}

export function TelegramIcon(props: IconProps) { return <Icon {...props}><path d="m21 3-3.5 18-6.3-5-3.2 3 .5-5.1L18.7 5 6 12.5l-4.5-1.6z" /></Icon> }
export function EmailIcon(props: IconProps) { return <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon> }
export function DownloadIcon(props: IconProps) { return <Icon {...props}><path d="M12 3v11m0 0 4-4m-4 4-4-4M4 17v3h16v-3" /></Icon> }
export function GooglePlayIcon(props: IconProps) { return <Icon {...props}><path d="m4 3 11 9L4 21zM4 3l12 7M4 21l12-7m0-4 4 2-4 2" /></Icon> }
export function AppStoreIcon(props: IconProps) { return <Icon {...props}><path d="M12 4 5 17m5-9 5 9M8 14h8M15.5 4.5c.8-.8 1.8-1.1 2.5-1.2-.1.8-.5 1.8-1.2 2.5-.7.7-1.6 1.1-2.4 1" /></Icon> }
export function SteamIcon(props: IconProps) { return <Icon {...props}><circle cx="7" cy="16" r="3" /><circle cx="17" cy="7" r="3" /><path d="m9.5 14.5 5-5" /></Icon> }
export function YoutubeIcon(props: IconProps) { return <Icon {...props}><rect x="3" y="6" width="18" height="12" rx="3" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></Icon> }
export function ExternalArrowIcon(props: IconProps) { return <Icon {...props}><path d="M7 17 17 7m-7 0h7v7" /></Icon> }
export function UpArrowIcon(props: IconProps) { return <Icon {...props}><path d="m6 14 6-6 6 6" /></Icon> }
export function GameplayIcon(props: IconProps) { return <Icon {...props}><path d="M7 10h10l2 5a3 3 0 0 1-3 3h-1l-2-2h-2l-2 2H8a3 3 0 0 1-3-3zM9 13h3m-1.5-1.5v3M16 13h.01" /></Icon> }
export function LiveIcon(props: IconProps) { return <Icon {...props}><path d="M6 18a6 6 0 1 1 12 0M9 18a3 3 0 1 1 6 0M12 9v.01M4 5h.01M20 5h.01" /><path d="M4 18h16" /></Icon> }
export function PerformanceIcon(props: IconProps) { return <Icon {...props}><path d="M4 14a8 8 0 1 1 16 0" /><path d="m12 14 4-5M4 18h16M12 4v2" /></Icon> }
export function WorkflowIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M8 6h8M7.2 7.8 10.8 16M16.8 7.8 13.2 16" />
    </Icon>
  )
}
export function LinkedInIcon(props: IconProps) { return <Icon {...props}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6m0-9v.01m4 9v-3.3a2.2 2.2 0 0 1 4.4 0V16m-4.4-3v-3" /></Icon> }
export function GitHubIcon(props: IconProps) { return <Icon {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9c0-1.1.1-1.6-.5-2.3 2.2-.2 4.5-1.1 4.5-5a3.9 3.9 0 0 0-1-2.7 3.6 3.6 0 0 0-.1-2.7s-.9-.3-2.8 1.1a9.7 9.7 0 0 0-5.1 0C9.1 5.1 8.2 5.4 8.2 5.4a3.6 3.6 0 0 0-.1 2.7 3.9 3.9 0 0 0-1 2.7c0 3.9 2.3 4.8 4.5 5-.6.6-.6 1.2-.5 2.3V22" /></Icon> }
