import { ReactNode } from 'react';
import React from 'react';
interface SimplePageLayoutProps {
  children: ReactNode;
}

export function SimplePageLayout({ children }: SimplePageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}