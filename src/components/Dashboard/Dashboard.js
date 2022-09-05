import React from 'react';
import { useState } from 'react';
import './Dashboard.css'

export default function Dashboard() {

    const [experienceList, setExperienceList] = useState([{ experience: "" }]);

    const handleExperienceAdd = () => {
        setExperienceList([...experienceList, { experience: "" }])
    }

    return (
        <>
            {experienceList.length < 7 && (<div class="add_button" onClick={handleExperienceAdd}>Add New Entry</div>)}


            <div class="page">

                {experienceList.map((singleExperience, index) => (
                    <div key={index} class="experience_wrapper">
                        <div class="experience_header">Experience</div>
                        <div class="title" contenteditable="true" data-placeholder="Title">Title</div>
                        <div class="company_name">Company Name</div>
                        <div class="date_city"><span>Date period</span> <span>New York, NY</span></div>
                        <div class="description">Company Description</div>
                    </div>
                ))}

            </div>
        </>
    )
};
