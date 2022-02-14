import React, { useState, useEffect } from 'react';
import MousePointer from './MousePointer';

const MouseContainer = () => {

    const [display, setDisplay] = useState(true);

    const displayToggleHandler = () => {
        setDisplay(!display);
    }

    return (
        <div>
            MouseContainer

            <button
                onClick={() => { displayToggleHandler() }}
            >
                toggle display
            </button>

            {display && <MousePointer />}
        </div>
    );
};

export default MouseContainer;