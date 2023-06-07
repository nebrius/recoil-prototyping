import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Link href="/settings">Settings</Link>
        <Link href="/analytics">Analytics</Link>
      </div>
      <div>{children}</div>
    </>
  );
}
