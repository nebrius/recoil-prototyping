export default function Layout(props: {
  children: React.ReactNode;
  details: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      <div>
        <div>{props.details}</div>
      </div>
    </>
  );
}
