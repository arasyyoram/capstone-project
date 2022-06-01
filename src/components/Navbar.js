import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from "react-router-dom";
import '../style/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    // Variabel dimana akan berubah untuk re-render website dan akan menampilkan perubahan yang dibuat, seperti 'if'
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        // Membuat fungsi dimana akan mengubah id value menjadi sebaliknya
        setOpenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            {/* Logo Di Sebelah Kiri Atas */}
            <img src={Logo} />
            {/* Link Responsive Ketika Website Seukuran Handphone */}
            <div className='hiddenLinks'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/customerService"> Customer Service </Link>
            </div>
        </div>
        {/* Link Button */}
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/customerService"> Customer Service </Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon/>
        </button>
        </div>
    </div>
  )
}

export default Navbar