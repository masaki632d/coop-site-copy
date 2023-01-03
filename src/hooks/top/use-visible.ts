import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

export const useVisible = () => {
  const { y } = useWindowScroll()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return undefined
  return y > 0
}
