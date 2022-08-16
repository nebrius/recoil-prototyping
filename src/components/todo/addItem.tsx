import { useState } from 'react'
import Modal from 'react-modal'
import { List } from 'types'

interface AddItemProps {
    currentListId: List['id']
}

export function AddItem({ currentListId }: AddItemProps) {
    const [modalIsOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                Add item to list {currentListId}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Add item"
            ></Modal>
        </>
    )
}
