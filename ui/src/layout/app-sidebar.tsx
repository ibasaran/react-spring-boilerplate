import { Link } from '@tanstack/react-router';
import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';
import AppMenu from './app-menu';

const AppSidebar = () => {
    const { layoutConfig, layoutState } = useContext(LayoutContext);

    return (
        <>
            {/* Logo Area - Topbar ile aynı hizada */}
            <div className="layout-sidebar-logo">
                <Link to="/" className="logo-link">
                    <img 
                        src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} 
                        width="47.22px" 
                        height="35px" 
                        alt="logo" 
                    />
                    {!layoutState.staticMenuDesktopInactive && (
                        <span className="logo-text">SAKAI</span>
                    )}
                </Link>
            </div>

            {/* Menu Area */}
            <div className="layout-sidebar-content">
                <AppMenu />
            </div>
        </>
    );
};

export default AppSidebar;