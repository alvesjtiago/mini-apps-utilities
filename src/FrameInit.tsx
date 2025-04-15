import { useEffect, useState } from 'react'
import { sdk } from '@farcaster/frame-sdk'

export function FrameInit() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false)

  useEffect(() => {
    const load = async () => {
      await sdk.actions.ready()
    }

    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true)
      load()
    }
  }, [isSDKLoaded])

  return null
}
