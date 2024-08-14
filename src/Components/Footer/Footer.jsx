import Image from "next/image"
import "./style.css"
import { png,footerNavMeta,footerNavQuick } from "@/DataFlow/constants";


const Footer = () => {
  return (
    <div className="footerMain" >
      <div className="footer">
          <div className="topFooter">
            <div className="topFooter-left">
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Sign up for updates from mettā muse.</p>
                <div className="inputDiv"><input type="text" placeholder="Enter your e-mail..." name="" id="" /> <button>SUBSCRIBE</button></div>
                
            </div>
            <div className="topFooter-right">
                <div className="details">
                    <h1>CONTACT US</h1>
                    <div className="contactData">
                        <p>+44 221 133 5360</p>
                        <p>customercare@mattamuse.com</p>
                    </div>
                </div>
                <div className="details">
                    <h1>CURRENCY</h1>
                    <div className="usa">
                    <Image src={png?.usa} alt="usa"/><h1>• &nbsp;USA</h1>
                    </div>
                    <p className="currencyNotes">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
          </div>
          <div className="bottomFooter">
            <div className="bottomFooter-firstOne">
                <div className="headingText">
                    <h1>mettā muse</h1>
                <div className="downArrow"><span> <Image src={png.arrow} alt="downArrow"/></span></div>

                </div>
                <ul>
                {footerNavMeta.map((link,index)=>(
                        <li key={index}>{link?.title}</li>
                    ))}
                </ul>
            </div>

            <div className="bottomFooter-secondOne">
                <div className="headingText">
                    <h1>QUICK LINKS</h1>
                    <div className="downArrow"><span> <Image src={png.arrow} alt="Arrow"/></span></div>
                </div>
                <ul>
                    {footerNavQuick.map((link,index)=>(
                        <li key={index}>{link?.title}</li>
                    ))}
                </ul>
               
            </div>
            <div className="bottomFooter-thirdOne">
                <div className="subDiv">
                <div className="headingText">
                    <h1>FOLLOW US</h1>
                    <div className="downArrow"><span> <Image src={png.arrow}/></span></div>
                </div>
                    <div className="socialMedia"> <Image src={png?.insta} width={30} alt="instagram" height={30}/> <Image src={png?.linkedin}alt="linkedin" width={30} height={30}/> </div>
                    
                </div>
                <div className="subDiv">
              
                    <h1>mettā muse Accepts</h1>
                  
                <div class="pays">
                     <Image src={png?.pay1} alt="pay1"/> <Image src={png?.pay2} alt="pay2"/> <Image alt="pay3"  src={png?.pay3}/> <Image alt="pay4" src={png?.pay4}/> <Image src={png?.pay5} alt="pay5"/> <Image src={png?.pay6} alt="pay6"/> </div>
                </div>
            </div>
          </div>
      </div>
      <div className="copyright"><p>Copyright © 2023 mettamuse. All rights reserved.</p></div>
    </div>
  )
}

export default Footer