import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavButton } from '.';
import { FiMap} from 'react-icons/fi';
import { RiMessage2Line } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';

const Sidebar = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed='bottom'>
            <Container>
                <Navbar.Brand href="/Transport">
                    <NavButton 
                        icon = {<FiMap size={30}/>}
                        //bgColor = "rgb(153, 171, 180)"
                        //color = "rgb(153, 171, 180)"
                        bgHoverColor = "light-gray"
                        text = "Transport"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/Messages">
                <NavButton 
                        icon = {<RiMessage2Line size={30}/>}
                        //bgColor = "rgb(153, 171, 180)"
                        //color = "rgb(153, 171, 180)"
                        bgHoverColor = "light-gray"
                        text = "Messages"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/Account">
                <NavButton 
                        icon = {<MdOutlineAccountCircle size={30}/>}
                        //bgColor = "rgb(153, 171, 180)"
                        //color = "rgb(153, 171, 180)"
                        bgHoverColor = "light-gray"
                        text = "Account"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Sidebar