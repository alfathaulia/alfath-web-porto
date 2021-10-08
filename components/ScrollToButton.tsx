// ScrollToButton.jsx

import React from 'react';
import { scrollTo } from '../utils';

const ScrollToButton = (props) => {
    const handleClick = () => scrollTo({ id: props.toId, ref: props.toRef, duration: props.duration });

    return (
        <button className="bg-yellow-500 hover:bg-yellow-600 font-bold text-lg text-gray-700" onClick={handleClick}>
            {props.children}
        </button>
    );
};

export default ScrollToButton;
