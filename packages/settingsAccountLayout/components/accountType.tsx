import { useCurrentUser } from 'packages/common/state/currentUser';

import { useAccountType } from '../state/accountType';

export function AccountType() {
  const currentUser = useCurrentUser();
  const accountType = useAccountType();
  return (
    <div>
      {currentUser.name}&apos;s account type: {accountType}
    </div>
  );
}
