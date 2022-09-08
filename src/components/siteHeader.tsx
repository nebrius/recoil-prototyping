import Link from 'next/link'
import { useState } from 'react'
import Modal from 'react-modal'
import { useRecoilStateLoadable, useRecoilValue } from 'recoil'
import { currentUserAtom } from 'state/currentUser'
import { helpTextAtom } from 'state/help'
import { GetHelpResponse } from 'types/api'
import { get } from 'utils'

const customStyles = {
    content: {
        top: '25%',
        left: '25%',
        right: '25%',
        bottom: '25%',
    },
}

export function SiteHeader() {
    const currentUser = useRecoilValue(currentUserAtom)
    const [helpText, setHelpText] = useRecoilStateLoadable(helpTextAtom)
    const [modalIsOpen, setIsOpen] = useState(false)

    function onOpen() {
        setIsOpen(true)
        if (helpText.state !== 'hasValue') {
            get<GetHelpResponse>('/help')
                .then(({ helpMessage }) => {
                    setHelpText(helpMessage)
                })
                .catch(() => console.error('Could not load help text'))
        }
    }

    function onClose() {
        setIsOpen(false)
    }

    return (
        <header className="headerContainer">
            <div className="headerTitleContainer">
                <Link href="/">
                    <a className="headerTitle">Recoil Prototyping</a>
                </Link>
            </div>
            <label>{currentUser.name}</label>
            <button onClick={onOpen}>help</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={onClose}
                contentLabel="Add item"
                style={customStyles}
            >
                {helpText.state !== 'hasValue' ? (
                    <div>Loading...</div>
                ) : (
                    <div>{helpText.contents}</div>
                )}
                <button onClick={onClose}>Close</button>
            </Modal>
            <style jsx>{`
                .headerContainer {
                    display: flex;
                    align-items: center;
                    background-color: black;
                    color: white;
                    padding: 10px;
                    gap: 10px;
                }
                .headerTitleContainer {
                    flex-grow: 1;
                }
                .headerTitle {
                    color: white;
                    text-decoration: none;
                }
            `}</style>
        </header>
    )
}
