import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown.js'

export default function ConditionalDropdown(props) {

    const [projectValue, setProjectValue] = useState();
    const [storyDropdown, setStoryDropdown] = useState();
    const [story, setStory] = useState();
    const [items, setItems] = useState([]);

    //const handleProjectChange = (value) => {
    //    fetch(`https://localhost:44347/api/Feature?projectType=${e.target.value}`)
    //        .then(response => response.json())
    //        .then(json => setFeatureDropdown([...['Select...'], ...json]))
    //    console.log()
    //}

    //const getFeatures = (e) => {
    //    fetch(`https://localhost:44347/api/Feature?projectType=${e.target.value}`)
    //        .then(response => response.json())
    //        .then(json => setFeatureDropdown([...json]))
    //};


    const handleFeatureChange = (value) => {
        setStoryDropdown(value);
        console.log(value);
    }

    const handleProjectChange = (e) => {
        setProjectValue(e.target.value);
        console.log(e.target.value);
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
            <select onChange={handleProjectChange}>
                <option>Select...</option>
                <option>Sitefinity</option>
                <option>Web</option>
                <option>BI</option>
            </select> || <select disabled><option>Select...</option></select>


            {
                useEffect(() => {
                    fetch(`https://localhost:44347/api/Feature?projectType=${projectvalue}`, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'GET'
                    })
                        .then(res => { return res.json() })
                        .then(data => {
                            setItems(data)
                        })

                }, [])};

        return (
        <>
                <select>
                    {
                        items.map((item, key) =>
                            <option key={key} value={item.id}>
                                {item.name}
                            </option>
                        )
                    }
                </select>
                }
        </>
            )
                                }
                                }


                {
                storyDropdown &&
                <>
                    <Dropdown title="Title" onChange={handleStoryChange} options={storyDropdownOptions[storyDropdown]} />
                </>
            }


            {
                story &&
                <>
                    <p style={{ color: '#fff' }}>{storyOptions[story]}</p>
                </>
            }

        </>
    )
}

