import React from 'react';
import image from '../assets/images/Logo-horizontal-f-blanco.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Argies"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Cazaka</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        {/* <i className="fas fa-fw fa-folder"></i> */}
                        <span>Camisetas</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {/* <i className="fas fa-fw fa-chart-area"></i> */}
                        <span>Clubes</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {/* <i className="fas fa-fw fa-table"></i> */}
                        <span>Ligas</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {/* <i className="fas fa-fw fa-table"></i> */}
                        <span>Seleccionados</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {/* <i className="fas fa-fw fa-table"></i> */}
                        <span>Coleccionables</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;