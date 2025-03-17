import "../styles/globals.css";

import { ReactNode } from "react";
import React from "react";

import { ApolloWrapper } from "libs/ApolloWrapper";
import { ReactQueryProvider } from "middleware/reactQuery.middleware";

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>Mediage-stack-pdf</title>
        <meta name="description" content="This is an awesome website about healthcare." />
        <meta name="keywords" content="healthcare, health, web app" />
        <meta property="og:title" content="Mediage" />
        <meta property="og:description" content="This is an awesome website about healthcare." />
        <meta property="og:image" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      {/* font 추가 적용은 이후 body.classname으로 */}
      <body>
        <ApolloWrapper>
          <ReactQueryProvider>
            {children}
            <div id="modal" />
          </ReactQueryProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
