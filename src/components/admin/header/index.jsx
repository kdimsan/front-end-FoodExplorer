import { Link } from "react-router-dom";

import { Container, HeaderContent } from "./style"
import { useAuth } from "../../../hooks/auth";
import { Logo } from "../logo"

import Menu from "../../../assets/menu.svg"
import Logout from "../../../assets/logout.svg"

export function Header() {

    const { signOut } = useAuth();

    return(
        <Container> 
            <HeaderContent>
            <img src={ Menu } alt="Menu" />
            <Logo />
            <input type="text" placeholder="Busque por pratos ou ingredientes" />
            <Link to={ "/pratos" }>Novo prato</Link>
            <button onClick={ signOut }><img src={ Logout } alt="Sair da conta" /></button>
            </HeaderContent>
        </Container>
    )
}