import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/globals.css";
import ThemeContextProvider from "./context/context";

export const metadata = {
  title: "Bencen",
  description: "Bencen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
        <ThemeContextProvider>
          <div className="headerContainer">
            <Header />
          </div>
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
