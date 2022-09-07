import { useState } from 'react'
import Modal from 'react-modal'
import { useRecoilValue } from 'recoil'
import { useAddItem } from 'state/item'
import { currentListAtom } from 'state/list'

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

export function AddItem() {
    const currentListId = useRecoilValue(currentListAtom).id
    const [modalIsOpen, setIsOpen] = useState(false)
    const [name, setName] = useState('')
    const addItem = useAddItem()

    function onOpen() {
        setIsOpen(true)
    }

    function onClose() {
        setIsOpen(false)
        setName('')
    }

    function onCreate() {
        console.log(`Creating item named ${name}`)
        addItem({ name, listId: currentListId, completed: false })
            .then(() => setIsOpen(false))
            .catch(err => {
                throw err
            })
    }

    return (
        <>
            <button className="addButton" onClick={onOpen}>
                Add item to list {currentListId}
                <style jsx>{`
                    .addButton {
                        margin-bottom: 15px;
                    }
                `}</style>
            </button>
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
