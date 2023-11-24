import { moderators } from "@/config/constants";
import { AuthStateSlice } from "@/typings.d";
import { PayloadAction } from "@reduxjs/toolkit";
import { Session } from "next-auth";
import { initialState as authSliceInitialState } from "../features/auth.slice";

// Prepare the reducers
const authReducers = {
  logOut: () => authSliceInitialState,
  logIn: (
    currentSliceState: AuthStateSlice,
    action: PayloadAction<Session | null>
  ) => {
    const session: Session | null = action.payload;
    const email = (session?.user?.email ?? "").toLowerCase();
    const isModerator = moderators.map((m) => m.toLowerCase()).includes(email);
    return {
      ...currentSliceState,
      isModerator,
      session,
    };
  },
};

// Export the reducer as the default export
export default authReducers;
