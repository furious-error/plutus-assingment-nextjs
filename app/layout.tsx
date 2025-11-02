import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#05000f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
