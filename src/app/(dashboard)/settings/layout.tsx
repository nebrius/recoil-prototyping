import styles from './style.module.css';

export default function Layout(props: {
  children: React.ReactNode;
  account: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      <div className={styles.settingsLayout}>
        {props.account}
        {props.profile}
      </div>
    </>
  );
}
