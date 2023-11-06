import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import classes from "../style/ShowHideComponent.scss";

const Show = () => {
    const [isOpen, setIsOpen] = useState(false);



    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 3,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }
    return (
        <>
            <div
                 onClick={() => setIsOpen(!isOpen)}>Show</div>
            <motion.ul
                className={`container ${isOpen ? "open" : ""}`}
                variants={container}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                ))}
            </motion.ul>
        </>
    );
}

export default Show;
