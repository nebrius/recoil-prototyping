import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics',
};

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Analytics page</div>;
}
