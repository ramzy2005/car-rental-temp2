import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"], 
  weight: ["400", "700"], 
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        
      >
        
        {children}
      </body>
        
    </html>
  );
}
