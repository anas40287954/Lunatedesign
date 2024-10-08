import Button from './Button'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer-background">

            <div className="footer-container">
                <div className="footer-elements footer-logo">
                    <div className="footer-logo-container">
                        <img src="/footer-union.svg" alt="" />
                    </div>
                </div> 
                <div className="footer-text-input">
                    <div className="footer-elements footer-text-container">
                        <div className="footer-text-wrapper">
                            <h3 className="footer-text">
                                Stay Up to Date
                            </h3>
                            <h1 className="footer-text-sub">
                                Sign up to receive the latest Lunate news, announcements and updates
                            </h1>
                        </div>
                    </div>
                    <div className="footer-elements footer-input-container">
                        <div className="footer-input-form">
                            <div className="footer-inputs">
                                <input type="text" className="footer-email footer-info-inputs" placeholder='Enter you email...' />
                                <input type="text" className="footer-name footer-info-inputs" placeholder='Enter your name...' />
                            </div>
                            <div className="subscribe-btn"><Button text={"Subscribe"} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-feedback-container">

                <div className="footer-info-text">
                    <h1>Lunate</h1>
                    <p>Lunate is a new Abu Dhabi-based, Partner-led independent global alternative investment management company with more than 150 employees and more than US$60 billion of assets under management. Lunate invests across the entire private market spectrum including buyouts, growth equity, early and late-stage venture capital, private credit, real assets, and public equities and public credit. Lunate aims to be one of the world’s leading private markets solutions providers through SMAs and multi-asset class funds, seeking to generate best-in-class risk-adjusted returns for its clients. </p>
                </div>
                <div className='footer-menu-container'>
                    <li className="footer-menu-head">About Lunate</li>
                    <ul className="footer-menu">
                        <li className="about-footer-menu footer-sub-menu">Who we are</li>
                        <li className="about-footer-menu footer-sub-menu">Our team</li>
                    </ul>
                </div>
                <div className='footer-menu-container'>
                    <li className="footer-menu-head">Our Approach</li>
                    <ul className="footer-menu">
                        <li className="approach-footer-menu footer-sub-menu">Asset classes</li>
                        <li className="approach-footer-menu footer-sub-menu">Investment strategies</li>
                        <li className="approach-footer-menu footer-sub-menu">Solutions & products</li>
                    </ul>
                </div>
                <div className='footer-menu-container'>

                    <li className="footer-menu-head ">News & Insights</li>
                    <ul className="footer-menu">
                        <li className="news-footer-menu footer-sub-menu">Careers</li>
                        <li className="news-footer-menu footer-sub-menu">Contact us</li>
                        <li className="news-footer-menu footer-sub-menu">Privacy policy</li>
                        <li className="news-footer-menu footer-sub-menu">Terms of use</li>
                    </ul>
                </div>
            </div>

            <div className="social-media-container">
                <div className="footer-social-wrapper">
                    <div className="footer-social-media">
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30.2891" r="29.5" stroke="white" />
                            <g clip-path="url(#clip0_1475_1193)">
                                <path d="M40.6494 17.7891H19.3457C18.3252 17.7891 17.5 18.5947 17.5 19.5908V40.9824C17.5 41.9785 18.3252 42.7891 19.3457 42.7891H40.6494C41.6699 42.7891 42.5 41.9785 42.5 40.9873V19.5908C42.5 18.5947 41.6699 17.7891 40.6494 17.7891ZM24.917 39.0928H21.2061V27.1592H24.917V39.0928ZM23.0615 25.5332C21.8701 25.5332 20.9082 24.5713 20.9082 23.3848C20.9082 22.1982 21.8701 21.2363 23.0615 21.2363C24.248 21.2363 25.21 22.1982 25.21 23.3848C25.21 24.5664 24.248 25.5332 23.0615 25.5332ZM38.8037 39.0928H35.0977V33.292C35.0977 31.9102 35.0732 30.1279 33.1689 30.1279C31.2402 30.1279 30.9473 31.6367 30.9473 33.1943V39.0928H27.2461V27.1592H30.8008V28.79H30.8496C31.3428 27.8525 32.5537 26.8613 34.3555 26.8613C38.1104 26.8613 38.8037 29.332 38.8037 32.5449V39.0928Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1475_1193">
                                    <rect width="25" height="25" fill="white" transform="translate(17.5 17.7891)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="footer-social-media">
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30.2891" r="29.5" stroke="white" />
                            <g clip-path="url(#clip0_1475_1194)">
                                <path d="M42.5 30.2891C42.5 23.3855 36.9036 17.7891 30 17.7891C23.0964 17.7891 17.5 23.3855 17.5 30.2891C17.5 36.5281 22.071 41.6995 28.0469 42.6372V33.9023H24.873V30.2891H28.0469V27.5352C28.0469 24.4023 29.9131 22.6719 32.7683 22.6719C34.1355 22.6719 35.5664 22.916 35.5664 22.916V25.9922H33.9902C32.4375 25.9922 31.9531 26.9558 31.9531 27.9453V30.2891H35.4199L34.8657 33.9023H31.9531V42.6372C37.929 41.6995 42.5 36.5281 42.5 30.2891Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1475_1194">
                                    <rect width="25" height="25" fill="white" transform="translate(17.5 17.7891)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="footer-social-media">
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30.2891" r="29.5" stroke="white" />
                            <path d="M36.59 19.772H40.104L32.4269 28.5464L41.4584 40.4865H34.3868L28.848 33.2449L22.5104 40.4865H18.9943L27.2057 31.1012L18.5417 19.772H25.7929L30.7995 26.3911L36.59 19.772ZM35.3567 38.3832H37.3038L24.7349 21.7648H22.6454L35.3567 38.3832Z" fill="white" />
                        </svg>
                    </div>
                    <div className="footer-social-media">
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30.2891" r="29.5" stroke="white" />
                            <path d="M36.6617 25.1038C35.8338 25.1054 35.1607 24.4351 35.1591 23.6073C35.1575 22.7794 35.8278 22.1063 36.656 22.1047C37.4842 22.1031 38.1573 22.7738 38.159 23.6016C38.1602 24.4294 37.4899 25.1022 36.6617 25.1038Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.012 36.7068C26.4678 36.7137 23.5886 33.8462 23.5818 30.3012C23.5749 26.757 26.4431 23.8774 29.9873 23.8705C33.5322 23.8636 36.4118 26.7327 36.4187 30.2765C36.4255 33.8215 33.5565 36.6999 30.012 36.7068ZM29.9917 26.1228C27.6913 26.1268 25.8291 27.9959 25.8332 30.2968C25.8376 32.598 27.7071 34.4598 30.0075 34.4554C32.3087 34.4509 34.1709 32.5822 34.1664 30.281C34.162 27.9797 32.2925 26.1183 29.9917 26.1228Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7908 18.4625C22.5846 18.1514 23.4931 17.9384 24.8231 17.8756C26.1564 17.8116 26.582 17.7971 29.9759 17.7906C33.3706 17.7841 33.7963 17.7971 35.1295 17.8562C36.46 17.9137 37.3688 18.1235 38.1642 18.4313C38.9872 18.7484 39.6854 19.1753 40.3812 19.8683C41.077 20.562 41.5055 21.2578 41.8266 22.0796C42.1373 22.8742 42.3503 23.7818 42.4135 25.1127C42.4767 26.4455 42.492 26.8708 42.4985 30.2652C42.505 33.6591 42.4912 34.0852 42.4329 35.4193C42.375 36.7489 42.1656 37.6581 41.8578 38.4532C41.5399 39.2761 41.1138 39.9744 40.4209 40.6702C39.7279 41.3664 39.0313 41.7945 38.2096 42.116C37.415 42.4263 36.5074 42.6393 35.1773 42.7029C33.8441 42.7661 33.4184 42.7811 30.0233 42.7875C26.6298 42.794 26.2041 42.7811 24.8709 42.7223C23.5404 42.664 22.6312 42.4546 21.8362 42.1472C21.0132 41.8289 20.315 41.4032 19.6192 40.7099C18.923 40.0165 18.4942 39.3203 18.1734 38.4985C17.8624 37.7043 17.6501 36.7963 17.5865 35.4667C17.523 34.133 17.508 33.7069 17.5015 30.313C17.495 26.9186 17.5084 26.4933 17.5667 25.1601C17.6254 23.8292 17.834 22.9204 18.1418 22.1245C18.4597 21.302 18.8858 20.6041 19.5795 19.9079C20.2725 19.2122 20.9691 18.7828 21.7908 18.4625ZM22.6474 40.0473C23.0885 40.217 23.7502 40.4195 24.9689 40.4725C26.2876 40.5296 26.6824 40.5422 30.0192 40.5357C33.3573 40.5296 33.7521 40.5154 35.0704 40.4535C36.2879 40.3956 36.9496 40.1906 37.3894 40.0189C37.9731 39.7909 38.3886 39.5183 38.8252 39.0813C39.2618 38.6427 39.5319 38.226 39.7579 37.6423C39.928 37.2009 40.1301 36.5387 40.1831 35.32C40.2411 34.0021 40.2532 33.6069 40.2467 30.2692C40.2407 26.9324 40.2265 26.5371 40.1637 25.2188C40.1062 24.0009 39.9017 23.3391 39.7295 22.8997C39.5015 22.3153 39.2298 21.9006 38.7916 21.4636C38.3533 21.0266 37.9366 20.7572 37.3522 20.5312C36.9119 20.3607 36.2494 20.159 35.0315 20.106C33.7128 20.0481 33.3176 20.0363 29.98 20.0428C26.6432 20.0493 26.2483 20.0627 24.93 20.125C23.7118 20.1829 23.0508 20.3875 22.6102 20.5596C22.027 20.7876 21.6114 21.0586 21.1744 21.4972C20.7382 21.9358 20.4681 22.3517 20.2421 22.9366C20.0728 23.3772 19.8691 24.0398 19.8169 25.2577C19.7594 26.5764 19.7472 26.9717 19.7537 30.3085C19.7598 33.6461 19.7739 34.0414 19.8359 35.3589C19.893 36.5776 20.0991 37.2385 20.2705 37.6796C20.4985 38.2624 20.7703 38.6779 21.2081 39.115C21.6467 39.5503 22.0634 39.8213 22.6474 40.0473Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="footer-lunate-rights">
                    <p className='footer-lunate-rights-text'>©Lunate 2023. All rights reserved</p>
                </div>
            </div>

        </div>
    )
}