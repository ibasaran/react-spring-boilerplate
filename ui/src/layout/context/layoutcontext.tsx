import React, { useState, createContext } from 'react';
import { ChildContainerProps, LayoutContextProps, LayoutConfig, LayoutState } from '@/types';

export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
    const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState<LayoutState>({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });

    // Helper function to detect if we're on desktop
    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const onMenuToggle = () => {
        console.log('Menu toggle - Window width:', window.innerWidth); // Debug log
        
        if (isDesktop()) {
            // Desktop: toggle collapse (280px <-> 70px)
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive
            }));
            console.log('Desktop mode: toggling collapse'); // Debug log
        } else {
            // Mobile: toggle sidebar visibility (hidden <-> visible)
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive
            }));
            console.log('Mobile mode: toggling sidebar visibility'); // Debug log
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({
            ...prevLayoutState,
            profileSidebarVisible: !prevLayoutState.profileSidebarVisible
        }));
    };

    const value: LayoutContextProps = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar
    };

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};