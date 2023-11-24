"use client"; // It makes this file a client-side rendered component.
import { logIn, logOut } from "@/redux/actions/auth.actions";
import { AppDispatch } from "@/redux/store";
import { WithSessionProp } from "@/typings.d";
import { signIn, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import CustomButton from "./CustomButton";

function SignInButton({ session }: WithSessionProp) {
  const dispatch = useDispatch<AppDispatch>();

  // Get the username from the state (only for demo purposes)
  // const _username = useAppSelector((state: ReduxState) => state.auth.username);
  // const isModerator = useAppSelector((state: ReduxState) => state.auth.isModerator);

  const handleLogInBtnClick = async () => {
    const uniqueProvider = "google";
    await signIn(uniqueProvider);
    dispatch(logIn(session)); // Google oauth sign-in
  };

  const handleLogOutBtnClick = async () => {
    await signOut(); // Google oauth sign-out
    dispatch(logOut());
  };

  return !!session ? (
    <div className="flex flex-row">
      <h4 className="text-signed-in">
        Welcome {session?.user?.name?.toString() ?? ""}!
      </h4>
      <CustomButton
        label="Sign out"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] log-in-button"
        handleClick={handleLogOutBtnClick}
      />
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
