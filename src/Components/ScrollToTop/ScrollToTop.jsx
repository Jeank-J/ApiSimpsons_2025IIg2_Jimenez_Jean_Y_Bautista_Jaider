import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const { pathname, search, hash } = useLocation()

    useEffect(() => {
        const doScrollTop = () => {
            const el = document.scrollingElement || document.documentElement || document.body
            try {
                if (el && el.scrollTo) el.scrollTo({ top: 0, left: 0, behavior: 'auto' })
                else {
                    el.scrollTop = 0
                    el.scrollLeft = 0
                }
            } catch (e) {
                try {
                    el.scrollTop = 0
                    el.scrollLeft = 0
                } catch (err) {
                }
            }
        }
        doScrollTop()
        const rafId = requestAnimationFrame(() => doScrollTop())

        const tId = setTimeout(() => doScrollTop(), 50)
        return () => {
            cancelAnimationFrame(rafId)
            clearTimeout(tId)
        }
    }, [pathname, search, hash])

    return null
}

export default ScrollToTop
