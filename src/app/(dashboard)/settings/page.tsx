import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <div>Settings page</div>
      {props.children}
    </>
  );
}
