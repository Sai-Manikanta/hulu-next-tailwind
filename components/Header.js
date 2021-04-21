import HeaderItem from "./HeaderItem"
import { 
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/solid'

function Header() {
    return (
        <header className="p-4 flex justify-between items-center">
            <div className="flex">
                <HeaderItem text="HOME" Icon={HomeIcon} />
                <HeaderItem text="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem text="VARIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem text="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem text="SEARCH" Icon={SearchIcon} />
                <HeaderItem text="ACCOUNT" Icon={UserIcon} />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="100" viewBox="-32.385 -17.8 280.67 106.8"><path fill="#1CE783" d="M132.3 71.2h17.2V0h-17.2zm-30.2-20.3c0 2.5-2.1 4.6-4.6 4.6h-10c-2.5 0-4.6-2.1-4.6-4.6V22.2H65.7v30.1c0 12.3 7.9 18.8 19.5 18.8H102c10.7 0 17.2-7.7 17.2-18.8V22.2H102c.1 0 .1 27.8.1 28.7zm96.7-28.7v28.7c0 2.5-2.1 4.6-4.6 4.6h-10c-2.5 0-4.6-2.1-4.6-4.6V22.2h-17.2v30.1c0 12.3 7.9 18.8 19.5 18.8h16.8c10.7 0 17.2-7.7 17.2-18.8V22.2zM34 22.2H23c-3.9 0-5.8 1-5.8 1V0H0v71.1h17.1V42.5c0-2.5 2.1-4.6 4.6-4.6h10c2.5 0 4.6 2.1 4.6 4.6v28.7h17.2v-31c0-13-8.7-18-19.5-18z"/></svg>
        </header>
    )
}

export default Header
