import { useAccountType } from '../state/accountType';

export function AccountType() {
  const accountType = useAccountType();
  return <div>Type: {accountType}</div>;
}
