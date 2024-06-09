import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metaData = {
  title: 'Promptopia',
  description: 'Discover & share AI prompts',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          <Provider />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
