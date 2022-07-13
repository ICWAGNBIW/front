import {NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <header>
          <NavLink to='/'>Домой</NavLink>
            <NavLink to='/events'>Мероприятия</NavLink>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer>© Footer React 2022</footer>
        </>
    )
}

export default Layout