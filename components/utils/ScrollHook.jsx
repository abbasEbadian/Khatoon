import { useEffect, useState } from 'react'
import { off, on } from '.'
/**
 * useScrollingUp
 * @returns {boolean}
 */
const useScrollingUp = () => {
  let prevScroll
  //if it is SSR then check you are now on the client and window object is available
  if (typeof window !== "undefined") {
    prevScroll = window.pageYOffset
  }
  const [scrollingUp, setScrollingUp] = useState(false)
  const [scrollAmount, setScrollAmount] = useState(false)
  const handleScroll = () => {
    const currScroll = window.pageYOffset
    const isScrolled = prevScroll > currScroll
    setScrollingUp(isScrolled)
    setScrollAmount(currScroll)
    prevScroll = currScroll
  }
  useEffect(() => {
    on(window, 'scroll', handleScroll, { passive: true })
    return () => {
      off(window, 'scroll', handleScroll, { passive: true })
    }
  }, [])
  return [scrollingUp, scrollAmount]
}

export default useScrollingUp
