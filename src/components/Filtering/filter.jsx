"use state";
import React, { useState } from "react";
import style from './style.css'

const Filter = ({ filter }) => {
    const [openSemi, setOpenSemi] = useState(false);
    return (
        <div className="filter">
            <div
                onClick={() => setOpenSemi((prev) => !prev)}
                className="accordionHeaderSection"
            >
                <h3>{filter?.title}</h3>
                <h3>
                    {openSemi ? (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.72003 10.73L7.0667 6.38489C7.58003 5.87174 8.42003 5.87174 8.93336 6.38489L13.28 10.73"
                                stroke="#292D32"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
                                stroke="#292D32"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </h3>
            </div>
            <h4>All</h4>
            {openSemi && (
                <>
                    <p>Unselect all</p>
                   
                    {filter?.options?.map((option) => (
                        <div className="checkbox-container" key={filter?.option?.value}>
                            <input type="checkbox" id={filter?.option?.value} />
                            <label htmlFor={filter?.option?.value}>{option}</label>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Filter;
