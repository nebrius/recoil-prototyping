export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>App layout</div>
      <div>{children}</div>
    </>
  );
}
