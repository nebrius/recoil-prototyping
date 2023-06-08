export default function Layout(props: {
  children: React.ReactNode;
  account: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      <div>
        <div>
          <h4>Account</h4>
          {props.account}
        </div>
        <div>
          <h4>Profile</h4>
          {props.profile}
        </div>
      </div>
    </>
  );
}
