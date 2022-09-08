import { useRecoilState } from 'recoil'
import { filterAtom } from 'state/listPage/filter'
import { ItemFilter } from 'types/item'

const OPTIONS: ItemFilter[] = ['all', 'completed', 'uncompleted']

export function Filter() {
    const [filter, setFilter] = useRecoilState(filterAtom)
    return (
        <div className="container">
            <label>Viewing: </label>
            <select
                value={filter}
                onChange={e => setFilter(e.currentTarget.value as ItemFilter)}
            >
                {OPTIONS.map(f => (
                    <option key={f} value={f}>
                        {f}
                    </option>
                ))}
            </select>
            <style jsx>{`
                .container {
                    margin-bottom: 5px;
                }
            `}</style>
        </div>
    )
}
