import { render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SiteHeader } from 'components/siteHeader'
import { helpMessage } from 'pages/api/help'
import React from 'react'
import Modal from 'react-modal'
import { RecoilValue, useRecoilValueLoadable } from 'recoil'
import { TEST_USER } from 'server/db'
import { helpTextAtom } from 'state/help'
import { RecoilTestRoot } from 'test/util'

function HomePageRoot({ children }: { children: React.ReactNode }) {
    return (
        <div id="app">
            <RecoilTestRoot pagePath="/" pageProps={{ currentUser: TEST_USER }}>
                {children}
            </RecoilTestRoot>
        </div>
    )
}

function expectAtomToBeLoading<T>(atom: RecoilValue<T>) {
    const { result } = renderHook(() => useRecoilValueLoadable(atom), {
        wrapper: HomePageRoot,
    })
    expect(result.current.state).toEqual('loading')
}

describe('Site Header', () => {
    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
        ;(global as any).fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ helpMessage }),
            }),
        )
    })
    it('renders a heading', async () => {
        render(
            <HomePageRoot>
                <SiteHeader />
            </HomePageRoot>,
        )
        Modal.setAppElement('#app')

        expect(screen.getByRole('banner')).toBeInTheDocument()
        expectAtomToBeLoading(helpTextAtom)

        await userEvent.click(screen.getByRole('button', { name: 'help' }))

        // TODO: this never resolves for some reason.
        // https://recoiljs.org/docs/guides/testing/#testing-recoil-state-with-asynchronous-queries-inside-of-a-react-component
        // implies this is due to Jest's timer infrastructure, but their
        // suggested fixes didn't work

        // await waitFor(() => expectAtomToBeLoaded(helpTextAtom))

        // expectAtomToHaveValue(helpTextAtom, helpMessage)
    })
})
