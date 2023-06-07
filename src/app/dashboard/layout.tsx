export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Dashboard layout</div>
      <div>{children}</div>
    </>
  );
}
