export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <>Profile content</>;
}
