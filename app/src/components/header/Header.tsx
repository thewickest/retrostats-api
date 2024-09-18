import { Link, Outlet } from "react-router-dom";

export default function Header () {
  return (
    <>
      <nav className="left-0 top-0 z-20 mx-auto flex h-[76px] w-full border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-darkNavBg p-4 m500:h-16 ">
        <div className="w-1/6"></div>
        <Link className="text-4xl m900:w-[unset] font-heading m500:text-xl" to="/">RETROSTATS</Link>
        <div className="flex items-center gap-10 m900:hidden">
          <Link className="text-xl font-base" to="/leaderboard">Leaderboard</Link>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}