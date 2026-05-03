import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Page } from '../../types'

interface UIState {
  currentPage: Page
  cursorX: number
  cursorY: number
}

const initialState: UIState = {
  currentPage: 'home',
  cursorX: 0,
  cursorY: 0,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<Page>) => {
      state.currentPage = action.payload
    },
    setCursor: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.cursorX = action.payload.x
      state.cursorY = action.payload.y
    },
  },
})

export const { setPage, setCursor } = uiSlice.actions
export default uiSlice.reducer
