import { MessagePageProps } from "@/typings.d";
import GoBackButton from "./buttons/GoBackButton";

const MessagePage = ({
  title,
  primaryText,
  secondaryText,
  hasBackButton = true,
}: MessagePageProps) => {
  return (
    <div className="flex message-page-container">
      <div className="text-center align-items-center justify-items-center h-[50vh] mt-[22.83vh] mx-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          {title}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          <span>{primaryText}</span>
          <br />
          <small>{secondaryText}</small>
        </p>
        {hasBackButton && <GoBackButton isSecondaryButton={false} />}
      </div>
    </div>
  );
};

export default MessagePage;
