import Logo from "./logo";
import NavCategories from "./navCategories";
const Header = () =>{
    return <header className="bg-green-900 px-20 sticky top-0 z-20 flex w-full items-center justify-between p-8 h-8">
        <Logo />
        <NavCategories />
    </header>
}
export default Header;