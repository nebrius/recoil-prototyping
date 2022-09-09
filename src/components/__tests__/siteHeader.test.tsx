import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SiteHeader } from 'components/siteHeader'
import { helpMessage } from 'pages/api/help'
import React from 'react'
import Modal from 'react-modal'
import { RecoilValue, useRecoilValue, useRecoilValueLoadable } from 'recoil'
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

function expectAtomToBeLoaded<T>(atom: RecoilValue<T>) {
    const { result } = renderHook(() => useRecoilValueLoadable(atom), {
        wrapper: HomePageRoot,
    })
    expect(result.current.state).toEqual('hasValue')
}

function expectAtomToHaveValue<T>(atom: RecoilValue<T>, value: T) {
    const { result } = renderHook(() => useRecoilValue(atom), {
        wrapper: HomePageRoot,
    })
    expect(result.current).toEqual(value)
}

describe('Home', () => {
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
        await waitFor(() => expectAtomToBeLoaded(helpTextAtom))

        expectAtomToHaveValue(helpTextAtom, helpMessage)
    })

    // TODO: test resetting an atom for a new test. I think it'll Just Work(tm)
})
