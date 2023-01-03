import { ReactNode } from 'react';
import { Header } from './Header';
import "./Layout.scss";

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="Layout">
    <Header className="Layout__header" />
    <main className="Layout__main">
      {children}
    </main>
  </div>
);
