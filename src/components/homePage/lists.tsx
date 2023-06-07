import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { allListsAtom } from 'state/homePage/list';

export function Lists() {
  const lists = useRecoilValue(allListsAtom);
  return (
    <div>
      {lists.map(list => (
        <li className="item" key={list.id}>
          <Link href={`list/${list.id}`}>
            <a>{list.name}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}
