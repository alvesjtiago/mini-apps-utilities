import sdk, { Context } from '@farcaster/frame-sdk'
import { useEffect, useState } from 'react'

export function Link({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const [context, setContext] = useState<Context.FrameContext>()

  useEffect(() => {
    const getContext = async () => {
      try {
        setContext(await sdk.context)
      } catch (err) {
        console.error('Error getting context:', err)
      }
    }

    getContext()
  }, [])

  if (context) {
    return (
      <div
        className={`${className} cursor-pointer`}
        onClick={() => sdk.actions.openUrl(href)}
      >
        {children}
      </div>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${className} cursor-pointer`}
    >
      {children}
    </a>
  )
}
