import { useCurrentUser } from 'packages/common/state/currentUser';

import { ChangeEvent, useCallback } from 'react';

import styles from './accountType.module.css';
import { useAccountType, useSetAccountType } from '../state/accountType';
import { AccountType } from '../types/accountInitialState';

export function AccountType() {
  const currentUser = useCurrentUser();
  const accountType = useAccountType();
  const [{ status }, setAccountType] = useSetAccountType();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setAccountType(e.target.value as AccountType);
    },
    [setAccountType],
  );

  return (
    <div className={styles.accountTypeContainer}>
      <label>{currentUser.name}&apos;s account type:</label>
      <select
        value={accountType}
        onChange={onChange}
        disabled={status === 'updating'}
      >
        <option value="standard">Standard</option>
        <option value="pro">Pro</option>
      </select>
      {status === 'updating' && <span>Saving...</span>}
    </div>
  );
}
