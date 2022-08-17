import { useState } from 'react'
import Modal from 'react-modal'
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

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                Add item to list {currentListId}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
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
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                    <button onClick={() => console.log('saving')}>
                        Create
                    </button>
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
