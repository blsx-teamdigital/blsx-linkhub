import { useCallback, useEffect, useRef, useState } from 'react'

export default function useCopyToClipboard(resetMs = 1500) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setCopied(false), resetMs)
      } catch {
        setCopied(false)
      }
    },
    [resetMs]
  )

  return { copied, copy }
}
