import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '90.5vh', overflow: 'scroll initial', margin: '0' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#1A2930">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    Menu
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/account" style={{ color: '#EAC67A', fontWeight: 'bold' }} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user"> Cuenta</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/" style={{ color: '#EAC67A', fontWeight: 'bold' }} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Nivel</CDBSidebarMenuItem>
                        </NavLink>
                        
                        <NavLink exact to="/store" style={{ color: '#EAC67A', fontWeight: 'bold' }} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="shopping-bag">Tienda</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/rules" style={{ color: '#EAC67A', fontWeight: 'bold' }} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="sticky-note">Reglas</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/about" style={{ color: '#EAC67A', fontWeight:'bold' }} activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="info"> Nosotros</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter>

                    <NavLink exact to="/logout" style={{ color: '#B43326', fontWeight: 'bolder', textDecoration: 'none' }} activeClassName="activeClicked" >
                        <CDBSidebarMenuItem icon="share">Cerrar Sesion</CDBSidebarMenuItem>
                    </NavLink>

                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;