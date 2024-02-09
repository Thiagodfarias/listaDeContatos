import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/LabelEnum'

type FilterState = {
  term?: string
  criteria: 'label' | 'favorite' | 'all'
  value?: enums.LabelEnum | boolean
}

const initialState: FilterState = {
  term: '',
  criteria: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criteria = action.payload.criteria
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions
export default filterSlice.reducer
