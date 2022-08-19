import { useState } from 'react'
import Modal from 'react-modal'
import { addItemApi } from 'state/item'
import { useApi } from 'state/lib/api'
import { List } from 'types'

interface AddItemProps {
    currentListId: List['id']
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export function AddItem({ currentListId }: AddItemProps) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')
    const addItem = useApi(addItemApi)

    function onOpen() {
        setIsOpen(true)
    }

    function onClose() {
        setIsOpen(false)
        setName('')
    }

    function onCreate() {
        console.log(`Creating item named ${name}`)
        addItem(name)
    }

    return (
        <>
            <button onClick={onOpen}>Add item to list {currentListId}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                contentLabel="Add item"
                style={customStyles}
            >
                <div>
                    <label>Name: </label>
                    <input
                        className="name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.currentTarget.value)}
                    />
                    <style jsx>{`
                        .name {
                            margin-bottom: 10px;
                            padding: 5px;
                        }
                    `}</style>
                </div>
                <div className="container">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={onCreate}>Create</button>
                    <style jsx>{`
                        .container {
                            display: flex;
                            justify-content: space-between;
                        }
                    `}</style>
                </div>
            </Modal>
        </>
    )
}
