import { List } from 'types'

interface MetadataProps {
    list: List
}

export const Metadata = ({ list: { name } }: MetadataProps) => <h1>{name}</h1>
