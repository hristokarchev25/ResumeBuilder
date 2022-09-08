import React from 'react';
import { useState } from 'react';
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
    const [text, setText] = useState("Include a valuable metric if possible. For example: \"Increased revenue by 20% within one month.\"");

    const descriptionHandler = (e) => {
        e.preventDefault();

        if (description.toLowerCase().includes("many") || description.toLowerCase().includes("a lot")) {
            document.getElementById("bubble").style.visibility = "visible";
            document.getElementById("description_input").style.background = "rgba(235, 87, 87, 0.66)";
        } else {
            document.getElementById("bubble").style.visibility = "hidden";
            document.getElementById("description_input").style.background = "#FFFFFF";
        }
    }

    const descriptionHoverHandler = () => {
        setText("This is vague. Instead of “Managed projects for many clients”, say “Managed projects for 10 clients including BlueBank.”");
    }

    const descriptionOnLeaveHandler = () => {
        setText("Include a valuable metric if possible. For example: \"Increased revenue by 20% within one month.\"");
    }

    const checkHandler = () => {
        document.getElementById("bubble").style.display = "none";
        document.getElementById("description_input").style.background = "none";
    }


    return (
        <>
            {experienceList.length < 7 && (<div className="add_button" onClick={handleExperienceAdd}>Add New Entry</div>)}

            <div className="page">

                {experienceList.map((singleExperience, index) => (
                    <>
                        <div value={singleExperience} key={index} className="experience_wrapper">

                            <div className="experience_header">
                                Experience
                                {experienceList.length > 1 && (
                                    <span onClick={() => handleExperienceRemove(index)}>X</span>
                                )}
                            </div>
                            <input className="title" type="text" placeholder='Title' />
                            <div className="company_name" contentEditable="true" data-text="Company Name"></div>
                            <div className="date_city">
                                <span className="spanOne" contentEditable="true" data-text="Date period"></span>
                                <input type="text" placeholder='New York, NY' />
                            </div>
                            <div className="description">
                                <input id='description_input' placeholder='Company Description' value={description} onChange={(e) => { setDescription(e.target.value) }}
                                    onBlur={descriptionHandler}
                                    onMouseOver={descriptionHoverHandler}
                                    onMouseLeave={descriptionOnLeaveHandler} />
                            </div>
                        </div>
                        <div id='bubble' className='bubble_wrapper'>
                            <div className='bubble'>
                                <div className='bubble_content'>
                                    <div className='bubble_header'>
                                        <div className='content_logo_wrapper'>
                                            <img src={icon} alt='icon list' />
                                            <span>Content improvement</span>
                                        </div>
                                        <div className='ignore_wrapper'>
                                            <input type="checkbox" onClick={checkHandler} />
                                            <span>Ignore</span>
                                        </div>
                                    </div>
                                    <p>{text}</p>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
};
