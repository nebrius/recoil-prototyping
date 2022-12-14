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

// This component shows the site header. It pulls in the current user's name and
// displays it, and also has a "help" button for demonstrating dynamic loading
// of data. Once the help modal is opened, we then use a Loadable to set the
// help text. Once it's been loaded once from the server, it's never loaded
// again. See https://recoiljs.org/docs/api-reference/core/Loadable/
export function SiteHeader() {
    const currentUser = useRecoilValue(currentUserAtom)
    const [helpText, setHelpText] = useRecoilStateLoadable(helpTextAtom)
    const [modalIsOpen, setIsOpen] = useState(false)

    async function onOpen() {
        setIsOpen(true)
        if (helpText.state !== 'hasValue') {
            const { helpMessage } = await get<GetHelpResponse>('/help')
            setHelpText(helpMessage)
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
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
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
