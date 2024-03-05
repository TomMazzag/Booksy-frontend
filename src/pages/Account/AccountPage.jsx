// src/Home/Account/AccountPage.jsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "../Account/AccountPage.css"

export const AccountPage = () => {
    const [currentTab, setCurrentTab] = useState('Account');
    const tabs = ['Account', 'Security', 'Order History', 'Emails', 'Privacy'];
    const { user } = useUser();

    return (
        <>
            <Navbar />
            <div className="account-container">
                <div className="tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`tab ${currentTab === tab ? 'active' : ''}`}
                            onClick={() => setCurrentTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    <p>{currentTab}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};