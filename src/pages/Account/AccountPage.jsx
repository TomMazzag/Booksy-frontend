// src/pages/Account/AccountPage.jsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "../Account/AccountPage.css"

export const AccountPage = () => {
    const [currentTab, setCurrentTab] = useState('Account');
    const tabs = ['Account', 'Security', 'Order History', 'Email Preferences', 'Privacy'];
    const { user } = useUser(); 

    const [emailPreferences, setEmailPreferences] = useState({
        couponsAndPromotions: true,
        trendsAndRecommendations: true,
        collectFeedback: true,
    });

    const handleCheckboxChange = (event) => {
        setEmailPreferences({
            ...emailPreferences,
            [event.target.name]: event.target.checked,
        });
    };

    const renderTabContent = () => {
        switch (currentTab) {
            case 'Account':
                const memberSince = new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: 'numeric', month: 'long', day: 'numeric'
                });
                return (
                    <div>
                        <h2>About you</h2>
                        <p>Name: {user.fullName}</p>
                        <p>Member since: {memberSince}</p>
                        <h2>Your delivery address</h2>
                        {/* Placeholder for delivery address */}
                        {user.address ? <p>{user.address}</p> : <p>No delivery address added.</p>}
                        <button onClick={() => {/* Placeholder for future functionality */}}>Add new address</button>
                    </div>
                );
                case 'Email Preferences':
                    return (
                        <div>
                            <h2>Your Notifications:</h2>
                            <p>Email me about ….</p>
                            <div className="email-preferences-container">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="couponsAndPromotions"
                                        checked={emailPreferences.couponsAndPromotions}
                                        onChange={handleCheckboxChange}
                                    />
                                    Coupons and Promotions
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="trendsAndRecommendations"
                                        checked={emailPreferences.trendsAndRecommendations}
                                        onChange={handleCheckboxChange}
                                    />
                                    Trends & Recommendations
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="collectFeedback"
                                        checked={emailPreferences.collectFeedback}
                                        onChange={handleCheckboxChange}
                                    />
                                    Collect feedback
                                </label>
                            </div>
                        </div>
                    );
            // Add cases for other tabs as needed
            default:
                return <p>{currentTab}</p>;
        }
    };

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
                    {renderTabContent()}
                </div>
            </div>
            <Footer />
        </>
    );
};