import "./globals.css";

export const metadata = {
  title: "Discount Deals",
  description: "Musoso Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
