import { render, screen } from '@testing-library/react'

import { SiteHeader } from 'components/siteHeader'
import { TEST_USER } from 'server/db'

import { RecoilTestRoot } from 'test/util'

describe('Home', () => {
    it('renders a heading', () => {
        render(
            <RecoilTestRoot pagePath="/" pageProps={{ currentUser: TEST_USER }}>
                <SiteHeader />
            </RecoilTestRoot>,
        )

        const heading = screen.getByRole('banner')

        expect(heading).toBeInTheDocument()
    })
})
