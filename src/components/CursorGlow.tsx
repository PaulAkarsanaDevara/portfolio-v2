import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setCursor } from '../store/slices/uiSlice'

export default function CursorGlow() {
  const dispatch = useAppDispatch()
  const { cursorX, cursorY } = useAppSelector((s) => s.ui)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      dispatch(setCursor({ x: e.clientX, y: e.clientY }))
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [dispatch])

  return (
    <div
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-[400ms] ease-out"
      style={{
        left: cursorX || '50%',
        top: cursorY || '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
      }}
    />
  )
}
