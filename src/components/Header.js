import React from "react";
import Logo from "../asets/Logo-Nav.png";
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <header className="flex md:flex-row justify-between item-center m-auto md:px-16 py-3 mb-4 font-poppins">
            <Link to="/">
                <img className="object-contain h-16" src={Logo}

    )
}