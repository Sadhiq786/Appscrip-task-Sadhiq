"use client";
import React, { useEffect, useState } from "react";
import Style from "./style.css";
import ItemsCard from "../Interface/ItemsCard";
import Filter from "../Interface/Sort";
import { Recommended, filters } from "@/DataFlow/constants";
import Spinner from "../Interface/Spinner";
import Image from "next/image";
import { png } from "@/DataFlow/constants"

const GetItems = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [showRecommend, setShowRecommend] = useState(false);
    const [itemCount, setItemCount] = useState('block');
    const [products, setProducts] = useState();
    const [isMobile, setIsMobile] = useState(false); 

    useEffect(() => {
        (async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
            console.log(products);
        })();
    }, []);

    const [grid, setGrid] = useState('repeat(4, 1fr)');

    useEffect(() => {
        const handleResize = () => {
            let newGrid = 'repeat(4, 1fr)';
            if (window.innerWidth < 768) {
                setItemCount('none')
                newGrid = 'repeat(2, 1fr)';
                setIsMobile(true); 
            } else if (window.innerWidth < 1024) {
                setItemCount('none')
                newGrid = 'repeat(3, 1fr)';
                setIsMobile(false); 
            } else {
                setItemCount('block')
                setIsMobile(false); 
            }

            // Adjust grid based on showFilter state
            if (showFilter) {
                if (window.innerWidth < 768) {
                    newGrid = 'repeat(2, 1fr)';
                    setItemCount('none')
                } else if (window.innerWidth < 1024) {
                    setItemCount('none')
                    newGrid = 'repeat(2, 1fr)';
                } else {
                    newGrid = 'repeat(3, 1fr)';
                    setItemCount('block')
                }
            }

            setGrid(newGrid);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [showFilter]);

    const productSectionStyle = {
        display: 'grid',
        gridTemplateColumns: grid,
        placeItems: 'center',
        gap: '20px'
    };

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleRecommend = () => {
        setShowRecommend(!showRecommend)
    }

    return (
        <div className="outerDiv">
            <div className="header-section">
                <div className="header-inner-div">
                    <p style={{ display: `${itemCount}` }}>3425 Items</p>
                    <p className={`hide-filter-text ${isMobile ? 'mobile-filter-text' : ''}`} onClick={toggleFilter}>
                        {!isMobile && (
                            <span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                                        stroke="#292D32"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </span>
                        )}
                        {isMobile ? <span className="mobile-filter-text">FILTER</span>: showFilter ? "HIDE FILTER" : "SHOW FILTER"}
                    </p>
                </div>
                <div>
                    <div className="recomended_div">
                        <p onClick={handleRecommend}>RECOMMENDED <span><svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
                                stroke="#292D32"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg></span> </p>
                    </div>
                    {showRecommend ?
                        <div className="recommended" >
                            <ul>
                                {Recommended.map((link, index) => (
                                    <li style={{ fontWeight: index === 0 ? 'bold' : 'normal' }} key={index}>
                                    {index === 0 && 
                                        <div style={{display:"inline-block",padding:"0px 15px 0px 0px"}}>
                                            <Image src={png?.vector} alt="vector" />
                                        </div>}  
                                    {link.title}
                                    </li>
                                ))}
                            </ul>
                        </div> : ""}
                </div>
            </div>
            <div className="container">
                <div className={`left-section ${showFilter ? "show" : ""}`}>
                    {showFilter && (
                        <div className="filter-section">
                            <div className="checkbox-container">
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox"> &nbsp; &nbsp; Customizable</label>
                            </div>
                            {filters.map((filter, index) => (
                                <Filter key={index} filter={filter}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div
                    className={`right-section ${showFilter ? "show-filter" : ""}`}
                    style={{ width: showFilter ? "80%" : "100%" }}
                >
                    {
                        products ? (<div style={productSectionStyle}>
                            {products?.map((prd, index) => (
                                <ItemsCard key={index} product={prd} />
                            ))}
                        </div>) : (<div style={productSectionStyle}>
                            {[1, 2, 3, 4].map((_, index) => (
                                <Spinner key={index} />
                            ))}
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default GetItems;
