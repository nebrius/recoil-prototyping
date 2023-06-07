import { useState } from 'react';
import Modal from 'react-modal';
import { useRecoilValue } from 'recoil';
import { currentListSelector } from 'state/listPage/currentList';
import { useAddItem } from 'state/listPage/item';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function AddItem() {
  const currentListId = useRecoilValue(currentListSelector).id;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
    setName('');
  }

  // Use the useAddItem hook to make an API call that creates a new item. This
  // happens after the use clicks "Create" in the modal
  const addItem = useAddItem();
  function onCreate() {
    console.log(`Creating item named ${name}`);
    addItem({ name, listId: currentListId, completed: false })
      .then(() => setIsOpen(false))
      .catch(err => {
        throw err;
      });
  }

  return (
    <>
      <button className="addButton" onClick={onOpen}>
        Add item
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
  );
}
