export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>App Layout</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
