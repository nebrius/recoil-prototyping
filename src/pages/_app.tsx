// eslint-disable-next-line spaced-comment
/// <reference types="styled-jsx" />

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { RecoilRoot } from 'recoil'
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
                key={router.asPath}
                initializeState={({ set }) => {
                    set(initialStateAtom, pageProps)
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
