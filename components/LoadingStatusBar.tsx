"use client";
import { store } from "@/redux/store";
import { useEffect, useState } from "react";
const TOTAL_PROGRESS_DURATION_SECs = 1;
const PROGRESS_STEP_PERCENTAGE = 2;

const LoadingStatusBar = () => {
  const [progress, setProgress] = useState<number>(0);

  let checkerIntv: any;
  const globalUIStateSlice = store.getState().globalUI;

  const updateBarProgress = () => {
    if (checkerIntv === undefined) {
      checkerIntv = window.setInterval(() => {
        const isLoading = store.getState().globalUI.isLoading;

        if (isLoading) {
          setProgress((c) =>
            c >= 98 ? PROGRESS_STEP_PERCENTAGE : c + PROGRESS_STEP_PERCENTAGE
          );
        } else stopProgress();
      }, (100 / PROGRESS_STEP_PERCENTAGE) * TOTAL_PROGRESS_DURATION_SECs);
    }
  };

  const stopProgress = () => {
    setProgress(0);
    window.clearInterval(checkerIntv);
  };

  useEffect(() => {
    updateBarProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalUIStateSlice]);

  return (
    progress > 0 && (
      <div className="loading-status-bar">
        <div
          className="loading-status-bar__filled"
          style={{ width: `${progress}%` }}
        />
      </div>
    )
  );
};
export default LoadingStatusBar;
