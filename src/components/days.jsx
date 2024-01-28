// LearningDay.js

import React from "react";

const LearningDay = ({ dayNumber }) => {
    return (
        <div>
            <h1>Day {dayNumber}</h1>
            <p>This is the content for Day {dayNumber}.</p>
            if(dayNumber==1){
                <><h1>Git commands</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p></>
            }
        </div>
    );
}

export default LearningDay;
