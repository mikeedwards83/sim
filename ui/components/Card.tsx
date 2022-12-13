import { ReactNode } from "react";

export const Card = (props: { children: ReactNode; imgSrc: string }) => {
  const { children, imgSrc } = props;

  return (
    <div
      className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col"
      data-testid="flowbite-card"
    >
      <img alt="" className="rounded-t-lg" src={imgSrc} />
      <div className="flex h-full flex-col justify-center gap-4 p-6">
        {children}
      </div>
    </div>
  );
};
