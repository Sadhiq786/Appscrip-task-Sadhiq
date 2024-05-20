import React from "react";
import style from "./style.css";
import Image from "next/image";
import { png } from "@/Attachments/constants";

const ProductCard = ({ product }) => {
    return (
        <div className={"productCard"}>
            <div className={"productImage"} >
                <Image src={product?.image} alt={product?.title} width={160} height={180} style={{ objectFit: "contain" }} />
                

            </div>

            <div className="productDetails">
                <h2 className="productTitle">{product?.title}</h2>

                <div className="productDescription" >
                    <div>
                        <p id="signtext">
                        <span  style={{ textDecoration: 'underline' }}>Sign in</span> or Create an account to <br id="break"/>see pricing
                        </p>
                    </div>
                    <div>  <Image src={png?.heart}
                        alt="Heart Icon"
                        width={5}
                        height={5}
                        className="heart-icon"
                    /></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
