import React from 'react';
import { useState } from 'react';
import './Dashboard.css'

export default function Dashboard() {

    const [experienceList, setExperienceList] = useState([{ experience: "" }]);

    const handleExperienceAdd = () => {
        setExperienceList([...experienceList, { experience: "" }])
    };

    const handleExperienceRemove = (index) => {
        const list = [...experienceList];
        list.splice(index, 1);
        setExperienceList(list);
    };

    return (
        <>
            {experienceList.length < 7 && (<div class="add_button" onClick={handleExperienceAdd}>Add New Entry</div>)}


            <div class="page">

                {experienceList.map((singleExperience, index) => (
                    <div key={index} class="experience_wrapper">

                        <div class="experience_header">
                            Experience
                            {experienceList.length > 1 && (
                                <span onClick={() => handleExperienceRemove(index)}>X</span>
                            )}
                        </div>
                        <div class="title" contenteditable="true" data-text="Title"></div>
                        <div class="company_name" contenteditable="true" data-text="Company Name"></div>
                        <div class="date_city">
                            <span className="spanOne" contenteditable="true" data-text="Date period"></span>
                            <span className='spanTwo' contenteditable="true" data-text="New York, NY"></span>
                        </div>
                        <div class="description" contenteditable="true" data-text="Company Description"></div>
                    </div>
                ))}

            </div>
        </>
    )
};
