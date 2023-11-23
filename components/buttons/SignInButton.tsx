"use client"; // It makes this file a client-side rendered component.
import { logIn, logOut } from "@/redux/features/auth.slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { ReduxState, WithSessionProp } from "@/typings.d";
import { signIn, signOut } from "next-auth/react";
// import { ChangeEvent, useState } from "react";
import { RedirectableProviderType } from "next-auth/providers/index";
import { useDispatch } from "react-redux";
import CustomButton from "./CustomButton";

function SignInButton({ session }: WithSessionProp) {
  const dispatch = useDispatch<AppDispatch>();

  // Get the username from the state (only for demo purposes)
  const _username = useAppSelector((state: ReduxState) => state.auth.username);
  // const isModerator = useAppSelector((state: ReduxState) => state.auth.isModerator);

  const handleLogInBtnClick = async () => {
    console.log("Signing in.");
    dispatch(logIn(session));
    return;
  };

  const handleLogOutBtnClick = async () => {
    console.log("Signing out.");
    dispatch(logOut());
    return;
  };

  return !!session ? (
    <div className="flex flex-row">
      <h4>Welcome {session?.user?.name?.toString() ?? ""}!</h4>
      <>
        <CustomButton
          label="Sign out"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] log-in-button"
          handleClick={handleLogOutBtnClick}
        />
      </>
    </div>
  ) : (
    <CustomButton
      label="Sign in"
      btnType="button"
      containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] log-in-button"
      handleClick={handleLogInBtnClick}
    />
  );
}

export default SignInButton;
