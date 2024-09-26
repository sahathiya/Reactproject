import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MyLogin } from '../useContext/Logincontext';
import styles from './UserListD.module.css';

function UsersListD() {
    const { id } = useParams();
    const [userDetails, setUserDetails] = useState([]);
    const { handleblock } = useContext(MyLogin);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/Users/${id}`);
                setUserDetails(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, [id]);

    const cartData = userDetails ? userDetails.cart : [];

    const handleBlockClick = () => {
        handleblock(userDetails.id, userDetails.block);
    };

    return (
        <div className={styles.mainContainer}>
            {/* User Details Section */}
            <div className={styles.userDetailsContainer}>
                <h3 className={styles.head}>User Details</h3>
                {userDetails ? (
                    <div>
                        <FaUser className={styles.userIcon} />
                        <p ><strong>ID:</strong> {userDetails.id}</p>
                        <p className={styles.id}><strong>Username:</strong> {userDetails.username}</p>
                        <p className={styles.id}><strong>Email:</strong> {userDetails.email}</p>
                        <p className={styles.id}><strong>PhoneNumber:</strong> {userDetails.phonenumber}</p>
                        <p className={styles.id}><strong>Address:</strong> {userDetails.address}</p>
                        <button className={styles.blockButton} onClick={handleBlockClick}>
                            {userDetails.block ? "Unblock" : "Block"}
                        </button>
                    </div>
                ) : (
                    <p>Loading user details...</p>
                )}
            </div>

            {/* Cart Items Section */}
            <div className={styles.cartContainer}>
                <h3 className={styles.carthead}>Cart Items</h3>
                {cartData ? (
                    <div className={styles.cartItems}>
                        {cartData.map((item, index) => (
                            <div key={index} className={styles.cartItem}>
                                <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                                <p className={styles.cartItemName}>{item.name}</p>
                                <p className={styles.cartItemPrice}>${item.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No items in the cart.</p>
                )}
            </div>
        </div>
    );
}

export default UsersListD;

