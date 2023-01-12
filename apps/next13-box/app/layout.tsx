import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Next.js 13</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
