import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { currentUserAtom } from 'state/user'

export function SiteHeader() {
    const currentUser = useRecoilValue(currentUserAtom)
    return (
        <div className="headerContainer">
            <div className="headerTitleContainer">
                <Link href="/">
                    <a className="headerTitle">Recoil Prototyping</a>
                </Link>
            </div>
            <label>{currentUser.name}</label>
            <style jsx>{`
                .headerContainer {
                    display: flex;
                    background-color: black;
                    color: white;
                    padding: 10px;
                }
                .headerTitleContainer {
                    flex-grow: 1;
                }
                .headerTitle {
                    color: white;
                    text-decoration: none;
                }
            `}</style>
        </div>
    )
}
