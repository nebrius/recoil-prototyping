// eslint-disable-next-line spaced-comment
/// <reference types="styled-jsx" />

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { RecoilRoot } from 'recoil'
import { currentPageAtom } from 'state/currentPage'
import { initialStateAtom } from 'state/initialState'

Modal.setAppElement('#app')

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    return (
        <div id="app">
            <RecoilRoot
                // We need to reinitialize Recoil whenever we do a soft page
                // route, so we set a key equal to the current path to force an
                // unmount whenever the route changes. See
                // https://nextjs.org/docs/api-reference/next/router#resetting-state-after-navigation
                // TODO: is there a more elegant way to only reset initial data
                // atoms when the route changes? Perhaps hook into Next.js'
                // router and set the initialStateAtom value when the route
                // changes?
                key={router.asPath}
                initializeState={({ set }) => {
                    set(initialStateAtom, pageProps)
                    set(currentPageAtom, router.pathname)
                }}
            >
                <Component {...pageProps} />
            </RecoilRoot>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default MyApp
