import React, { useState } from 'react';
import Dropdown from './Dropdown.js'

export default function ConditionalDropdown() {
    const [featureDropdown, setFeatureDropdown] = useState();
    const [storyDropdown, setStoryDropdown] = useState();
    const [story, setStory] = useState();

    const handleProjectChange = (value) => {
        setFeatureDropdown(value);
    }

    const handleFeatureChange = (value) => {
        setStoryDropdown(value);
        console.log(value);
    }

    const handleStoryChange = (value) => {
        setStory(value);
        console.log(value);
    }

    const featureDropdownOptions = {
        Sitefinity: ["Blog", "Product", "Search"],
        Web: ["Navigation", "Contact", "News"],
        BI: ["Visualizations", "Data", "Dimensions"],
        eCommerce: ["Cart", "Checkout", "Payment"]
    }

    const storyDropdownOptions = {
        Blog: ["Blog Detail Page", "Author Name", "Date"],
        Product: ["Product Detail Page", "Product Listing Page", "Product Attributes"],
        Search: ["Auto-Complete", "Search by Name", "Search by Description"],
        Navigation: ["Dropdown", "Menu", "Mega-Menu"],
        Contact: ["Contact Form", "Chat", "Google Maps"],
        News: ["Article Listing Page", "Article Detail Page", "Author Biography"],
        Visualizations: ["Bar Chart", "KPI", "Search by Vendor"],
        Data: ["Open Orders", "Inventory", "Quotes"],
        Dimensions: ["Open Orders by Vendor", "Inventory by Vendor", "Quotes by Vendor"],
        Cart: ["Item Quantity", "Subtotal", "Total"],
        Checkout: ["Add to Cart", "Billing Information", "Shipping Information"],
        Payment: ["Enter Credit Card Number", "Validation", "Stripe Integration"]
    }

    const storyOptions = {
        Date: ["Given a user is viewing a blog post, Then the application displays the date of the blog post."]
    }

    return (
        <>
            <h1>Gherkin Generator</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Dropdown title="ProjectType" onChange={handleProjectChange} options={["Sitefinity", "Web", "BI", "eCommerce"]} />


                {
                    featureDropdown &&
                    <>
                        <Dropdown title="Title" onChange={handleFeatureChange} options={featureDropdownOptions[featureDropdown]} />

                    </>
                }


                {
                    storyDropdown &&
                    <>
                        <Dropdown title="Title" onChange={handleStoryChange} options={storyDropdownOptions[storyDropdown]} />
                    </>
                }
            </div>

            {
                story &&
                <>
                    <p style={{ color: '#fff' }}>{storyOptions[story]}</p>
                </>
            }

        </>
    )
}

