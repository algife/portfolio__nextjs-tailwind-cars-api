import { moderators } from "@/config/constants";
import { AuthStateSlice } from "@/typings.d";
import { PayloadAction } from "@reduxjs/toolkit";
import { createHash } from "crypto";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { initialState as authSliceInitialState } from "../features/auth.slice";

// Prepare the reducers
const authReducers = {
  logOut: () => {
    signOut();
    return authSliceInitialState;
  },
  logIn: (
    currentSliceState: AuthStateSlice,
    action: PayloadAction<Session | null>
  ) => {
    const uniqueProvider = "google";
    const session: Session | null = action.payload;
    const username = (session?.user?.email ?? "").toLowerCase();
    signIn(uniqueProvider);
    return {
      ...currentSliceState,
      isAuth: !!username,
      isModerator: moderators.map((m) => m.toLowerCase()).includes(username),
      username,
      uid: createHash("md5").update(username).digest("hex"),
    };
  },
};

// Export the reducer as the default export
export default authReducers;
