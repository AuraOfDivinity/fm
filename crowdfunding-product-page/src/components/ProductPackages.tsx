import Modal from './base/Modal';
import ModalRenderer from './modals/ModalRenderer';
import ProductPackageCard from './ProductPackageCard';
import styles from './ProductPackages.module.css';

import { useState } from 'react';

const ProductPackages = () => {
    const [showModal, setShowModal] = useState<boolean>(true);

    const handleToggleModal = () => {
        setShowModal((prevShowModal) => !prevShowModal);
    };

    return (
        <>
            <div className={styles.productPackages}>
                <div className={styles.productPackages__details}>
                    <div className="text-preset-4">About this project</div>
                    <div className="text-preset-6-regular">
                        <p>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
                            screen to a more comfortable viewing height. Placing your monitor at eye level has the
                            potential to improve your posture and make you more comfortable while at work, helping you
                            stay focused on the task at hand.
                        </p>
                        <br />
                        <p>
                            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
                            your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                        </p>
                    </div>
                </div>
                <div className={styles.productPackages__cards}>
                    <ProductPackageCard
                        packageName="Bamboo stand"
                        pledgeAmount="$25"
                        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                        seatsLeft="101"
                        toggleModal={handleToggleModal}
                    />
                    <ProductPackageCard
                        packageName="Black Edition Stand"
                        pledgeAmount="$75"
                        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        seatsLeft="64"
                        toggleModal={handleToggleModal}
                    />
                    <ProductPackageCard
                        packageName="Mahogany Special Edition"
                        pledgeAmount="$200"
                        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included."
                        seatsLeft="0"
                        disabled
                    />
                </div>
            </div>
            <Modal open={showModal} onClose={handleToggleModal}>
                <ModalRenderer />
            </Modal>
        </>
    );
};

export default ProductPackages;
