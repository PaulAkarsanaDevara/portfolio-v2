import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { ProjectCategory } from '../../types'
import { PROJECTS } from '../../data'

interface ProjectsState {
  activeFilter: ProjectCategory
  openExperienceId: number | null
}

const initialState: ProjectsState = {
  activeFilter: 'all',
  openExperienceId: null,
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<ProjectCategory>) => {
      state.activeFilter = action.payload
    },
    toggleExperience: (state, action: PayloadAction<number>) => {
      state.openExperienceId =
        state.openExperienceId === action.payload ? null : action.payload
    },
  },
})

export const { setFilter, toggleExperience } = projectsSlice.actions

export const selectFilteredProjects = (filter: ProjectCategory) =>
  filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

export default projectsSlice.reducer
