import React, { FC } from 'react';

export const Layout: FC = ({ children }) => {
  return <div className="min-h-screen font-sans bg-lightTheme dark:bg-darkTheme transition-colors">{children}</div>;
};
