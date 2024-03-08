// src/pages/Account/AccountPage.jsx

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from "../../components/Structure/NavBar.jsx";
import Footer from "../../components/Structure/Footer.jsx";
import "../Account/AccountPage.css"
import { updateUserDetails } from '../../services/users.jsx';
import { getUserById } from '../../services/users.jsx'; 

export const AccountPage = () => {
    const [currentTab, setCurrentTab] = useState('Address');
    const tabs = ['Address', 'Security', 'Order History', 'Email Preferences', 'Privacy'];
    const { user } = useUser(); 
    const [userData, setUserData] = useState(null);
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [submitCounter, setSubmitCounter] = useState(0); // here to help refresh address after saves
    const [message, setMessage] = useState({ content: '', type: '' });
    const [showMessage, setShowMessage] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});

    const [addressForm, setAddressForm] = useState({
        addressLine1: "",
        addressLine2: "",
        townOrCity: "",
        postcode: "",
    });

    const convertStringToObject = (addressStr) => {
        const parts = addressStr.split(", ");
        const addressObj = {};
    
        parts.forEach(part => {
            const [key, value] = part.split(": ");
            let formattedKey = key.toLowerCase()
                .replace("address line 1", "addressLine1")
                .replace("address line 2", "addressLine2")
                .replace("town or city", "townOrCity")
                .replace("postcode", "postcode");
            // Convert first character of each key to uppercase except for the first key
            formattedKey = formattedKey.split(' ').map((word, index) => 
                index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
            ).join('');
            addressObj[formattedKey] = value;
        });

        // // console.log("[convertStringToObject] addressObj: ", addressObj)
    
        return addressObj;
    };
    

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserById(user.id);
                setUserData(data);
                setShowAddressForm(false); // Hide form if address exists
                if (data.address) {
                    // // console.log("data.address: ", data.address)
                    setAddressForm(convertStringToObject(data.address));
                    // // console.log("addressForm: " , addressForm)
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        if (user) {
            fetchUserData();
        }
    }, [user, submitCounter]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressForm(prevState => ({
            ...prevState,
            [name]: value,
        }));
        // Clear field error
        setFieldErrors(prevErrors => ({
            ...prevErrors,
            [name]: false,
        }));
    };

    const handleAddressSubmit = async () => {
        if (!addressForm.addressLine1 || !addressForm.townOrCity || !addressForm.postcode) {
            setMessage({ content: 'Please fill in all mandatory fields.', type: 'error' });
            setShowMessage(true);
            setFieldErrors({
                addressLine1: !addressForm.addressLine1,
                townOrCity: !addressForm.townOrCity,
                postcode: !addressForm.postcode,
            });
            setTimeout(() => {
                setShowMessage(false);
                setMessage({ content: '', type: '' });
            }, 3000); // Hide message after 3 seconds
            return;
        }

        try {
            await updateUserDetails(user.id, { address: addressForm });
            setMessage({ content: 'Address saved successfully!', type: 'success' });
            setShowMessage(true);
            setSubmitCounter(submitCounter + 1); // Trigger a re-fetch of user data
            setShowAddressForm(false);
            setTimeout(() => {
                setShowMessage(false);
                setMessage({ content: '', type: '' });
            }, 3000);
        } catch (error) {
            setMessage({ content: 'Failed to save address. Please try again.', type: 'error' });
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
                setMessage({ content: '', type: '' });
            }, 3000);
        }
    };

    const renderAddressForm = () => (
        <div className="address-form">
            <input 
                className={`input ${fieldErrors.addressLine1 ? 'input-error' : ''}`}
                type="text" 
                name="addressLine1" 
                placeholder="Address Line 1" 
                value={addressForm.addressLine1} 
                onChange={handleInputChange}
            />
            <input 
                className="input"
                type="text" 
                name="addressLine2" 
                placeholder="Address Line 2 (optional)" 
                value={addressForm.addressLine2} 
                onChange={handleInputChange}
            />
            <input 
                className={`input ${fieldErrors.townOrCity ? 'input-error' : ''}`}
                type="text" 
                name="townOrCity" 
                placeholder="Town or City" 
                value={addressForm.townOrCity} 
                onChange={handleInputChange} 
            />
            <input 
                className={`input ${fieldErrors.postcode ? 'input-error' : ''}`}
                type="text" 
                name="postcode" 
                placeholder="Postcode" 
                value={addressForm.postcode} 
                onChange={handleInputChange} 
            />
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
                            showAddressForm ? (
                                renderAddressForm()
                            ) : userData && userData.address ? (
                                <>
                                    <p>Address Line 1 : {addressForm.addressLine1 ? addressForm.addressLine1 : "undefined" }</p>
                                    <p>Address Line 2 : {addressForm.addressLine2 ? addressForm.addressLine2 : "undefined" }</p>
                                    <p>Town Or City : {addressForm.townOrCity ? addressForm.townOrCity : "undefined" }</p>
                                    <p>Postcode : {addressForm.postcode ? addressForm.postcode : "undefined" }</p>
                                    <button className="edit-address-btn" onClick={() => setShowAddressForm(true)}>Edit address</button>

                                </>
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
        <div className="page-container">
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

                {showMessage && (
                    <div className={`message-container ${message.type === 'success' ? 'message-success' : 'message-error'}`}>
                        {message.content}
                    </div>
                )}

            </div>
            <Footer />
        </div>
    );
};