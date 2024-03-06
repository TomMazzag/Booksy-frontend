// src/pages/Account/AccountPage.jsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from "../../components/Home/NavBar.jsx";
import Footer from "../../components/Home/Footer.jsx";
import "../Account/AccountPage.css"
import { updateUserDetails } from '../../services/users.jsx';
import { getUserById } from '../../services/users.jsx'; 

export const AccountPage = () => {
    const [currentTab, setCurrentTab] = useState('Address');
    const tabs = ['Address', 'Security', 'Order History', 'Email Preferences', 'Privacy'];
    const { user } = useUser(); 
    const [userData, setUserData] = useState(null);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [addressForm, setAddressForm] = useState({
        addressLine1: "",
        addressLine2: "",
        townOrCity: "",
        postcode: "",
    });

    // const formatAddressString = (addressForm) => {
    //     return `Address Line 1: ${addressForm.addressLine1}, Address Line 2: ${addressForm.addressLine2}, Town or City: ${addressForm.townOrCity}, Postcode: ${addressForm.postcode}`;
    // };

    // const parseAddressString = (addressString) => {
    //     const addressParts = addressString.split(', ').reduce((acc, part) => {
    //         const [key, value] = part.split(': ').map((str) => str.trim());
    //         acc[key.toLowerCase().replace(/\s+/g, '')] = value;
    //         return acc;
    //     }, {});
    
    //     return {
    //         addressLine1: addressParts['addressline1'] || '',
    //         addressLine2: addressParts['addressline2'] || '',
    //         townOrCity: addressParts['townorcity'] || '',
    //         postcode: addressParts['postcode'] || '',
    //     };
    // };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserById(user.id);
                setUserData(data);
                if (data.address) {
                    // const addressObj = parseAddressString(data.address);
                    setAddressForm(data.address);
                    setShowAddressForm(false); // Hide form if address exists
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        if (user) {
            fetchUserData();
        }
    }, [user, showAddressForm]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressForm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddressSubmit = async () => {
        try {
            // const formattedAddress = formatAddressString(addressForm);
            await updateUserDetails(user.id, { address: addressForm });
            alert("Address saved successfully!");
            setShowAddressForm(false);
            // fetchUserData(); // Assuming fetchUserData() is implemented to re-fetch user data
        } catch (error) {
            console.error("Failed to save address:", error);
            alert("Failed to save address. Please try again.");
        }
    };

    const renderAddressForm = () => (
        <div className="address-form">
            <input type="text" name="addressLine1" placeholder="Address Line 1" value={addressForm.addressLine1} onChange={handleInputChange} />
            <input type="text" name="addressLine2" placeholder="Address Line 2" value={addressForm.addressLine2} onChange={handleInputChange} />
            <input type="text" name="townOrCity" placeholder="Town or City" value={addressForm.townOrCity} onChange={handleInputChange} />
            <input type="text" name="postcode" placeholder="Postcode" value={addressForm.postcode} onChange={handleInputChange} />
            <button className="save-address-btn" onClick={handleAddressSubmit}>Save address</button>
        </div>
    );

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
            case 'Address':
                const memberSince = new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: 'numeric', month: 'long', day: 'numeric'
                });
                return (
                    <div>
                        {
                            userData && userData.address ? (
                                <>
                                    <p>Address Line 1 : {userData.address.addressLine1 ? userData.address.addressLine1 : "undefined" }</p>
                                    <p>Address Line 2 : {userData.address.addressLine2 ? userData.address.addressLine2 : "undefined" }</p>
                                    <p>Town Or City : {userData.address.townOrCity ? userData.address.townOrCity : "undefined" }</p>
                                    <p>Postcode : {userData.address.postcode ? userData.address.postcode : "undefined" }</p>
                                    <button className="edit-address-btn" onClick={() => setShowAddressForm(true)}>Edit address</button>
                                    {
                                        showAddressForm ?? (
                                            renderAddressForm()
                                        )
                                    }
                                </>
                            ) : showAddressForm ? (
                                renderAddressForm()
                            ) : (
                                <button className="add-new-address-btn" onClick={() => setShowAddressForm(true)}>Add new address</button>
                            )
                        }
                    </div>
                );
            case 'Email Preferences':
                return (
                    <div>
                        {/* <h2>Your Notifications:</h2> */}
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