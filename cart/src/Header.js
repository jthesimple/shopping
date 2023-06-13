import profile from './images/4092564_profile_about_mobile ui_user_icon.svg';
import checkout from './images/4781813_bag_buy_cart_market_shop_icon.svg'
import React from 'react';
import styles from './styles.module.css'; 


function Header(){
    return(
        <div className={styles.headerContainer}>
            <div>Pioneer DJ</div>
            <ul className={styles.headerTabs}>
                <li>Products</li>
                <li>News</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Find a Store</li>
            </ul>
            <div className="rightHeaderIcons">
                <img className={styles.headerIcons} src={profile} alt='profile'></img>
                <img className={styles.headerIcons} src={checkout} alt='checkout'></img>
            </div>
        </div>
    );

};

export default Header; 