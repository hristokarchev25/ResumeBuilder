import React from 'react';
import { useState, useEffect } from 'react';
import './Dashboard.css';
import icon from '../../utils/iconList.png';

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


    const [description, setDescription] = useState("");
    /* const [visible, setVisible] = useState(false); */

    const descriptionHandler = (e) => {
        e.preventDefault();
        if (description === "I've done many projects") {
            document.getElementById("bubble").style.visibility = "visible";
        } else {
            document.getElementById("bubble").style.visibility = "hidden";
        }
    }



    /* function handleClick() {
        setVisible(!visible);
    } */


    console.log(description);

    return (
        <>
            {experienceList.length < 7 && (<div className="add_button" onClick={handleExperienceAdd}>Add New Entry</div>)}


            <div className="page">

                {experienceList.map((singleExperience, index) => (
                    <div value={singleExperience} key={index} className="experience_wrapper">

                        <div className="experience_header">
                            Experience
                            {experienceList.length > 1 && (
                                <span onClick={() => handleExperienceRemove(index)}>X</span>
                            )}
                        </div>
                        <div className="title" contentEditable="true" data-text="Title"></div>
                        <div className="company_name" contentEditable="true" data-text="Company Name"></div>
                        <div className="date_city">
                            {/* <span className="spanOne" contentEditable="true" data-text="Date period"></span>
                            <span className='spanTwo' contentEditable="true" data-text="New York, NY"></span> */}
                            <input type="text" placeholder='Date period' />
                            <input type="text" placeholder='New York, NY' />
                        </div>
                        <div className="description" /* contentEditable="true" data-text="Company Description" value={description} onChange={(e) => { setDescription(e.target.value) }} */>
                            <input placeholder='Company Description' value={description} onChange={(e) => { setDescription(e.target.value) }} onBlur={descriptionHandler} />
                        </div>
                    </div>
                ))}

                <div id='bubble' className='bubble_wrapper'>
                    <div className='bubble'>
                        <div className='bubble_content'>
                            <div className='bubble_header'>
                                <div className='content_logo_wrapper'>
                                    <img src={icon} />
                                    <span>Content improvement</span>
                                </div>
                                <div className='ignore_wrapper'>
                                    <input type="checkbox" />
                                    <span>Ignore</span>
                                </div>
                            </div>
                            <p>This is vague. Instead of “Managed projects for many clients”, say “Managed projects for 10 clients including BlueBank</p>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <button onClick={handleClick}>Toggle visibilty</button>
                    <textarea className={!visible && 'bubble_wrapper'}></textarea>
                </div> */}
            </div>
        </>
    )
};
