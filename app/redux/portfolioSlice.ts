import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";

export interface PortfolioStateProps {
  data: DocumentData[];
}

const initialState: PortfolioStateProps = {
  data: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolioData: (state, action: PayloadAction<DocumentData[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setPortfolioData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
