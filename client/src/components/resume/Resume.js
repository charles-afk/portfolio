import React, {useState, useEffect} from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
    /* STATES */
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) 
            return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /* REUSABLE MINOR COMPONENTS */
    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                        ) : (
                            <div></div>
                        )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    const ResumeHeadingProjects = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <a className="resume-link" href={props.link ? props.link : "#"}>
                        <span>{props.heading ? props.heading : ""}</span>
                    </a>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                        ) : (
                            <div></div>
                        )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    /* STATIC RESUME DATA FOR THE LABELS*/
    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Programming Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Interests", logoSrc: "interests.svg" },
    ];

    const programmingSkillsDetails = [
        { skill: "JavaScript", ratingPercentage: 85 },
        { skill: "React JS", ratingPercentage: 85 },
        { skill: "React Native", ratingPercentage: 85 },
        { skill: "Express JS", ratingPercentage: 89 },
        { skill: "Node JS", ratingPercentage: 89 },
        { skill: "SQL", ratingPercentage: 70 },
        { skill: "Java", ratingPercentage: 80 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
        { skill: "jQuery", ratingPercentage: 80}
    ];

    const projectsDetails = [
        {
            title: "Mobile Taxi Service ",
            link: "https://expo.dev/@charles-afk/taxi-mobile-app",
            duration: { fromDate: "Spring 2021 ", toDate: " Summer 2021" },
            description: "A taxi application which utilizes third party API's provided by Google",
            subHeading: "Technologies Used:  React Native, Redux, Google APIs.",
        },
        {
            title: "Ecommerce Website",
            link: "https://ecom-mern-stack.herokuapp.com",
            duration: { fromDate: "Fall 2020 ", toDate: " Spring 2021" },
            description: "Online ecommerce website for a comic book store with a login system, search by category, and complete payment",
            subHeading: "Technologies Used: MySQL, Express JS, React JS, Node JS, Bulma CSS",
        },
        {
            title: "Operating System Visualization",
            link: "https://cs.newpaltz.edu/p/s21-06/",
            duration: { fromDate: "Spring 2021 ", toDate: " Spring 2021" },
            description: "Online simulator that visualizes operating system concepts to assist students learning in an online enviroment during COVID",
            subHeading: "Technologies Used: HTML, CSS, JavaScript, jQuery, PHP",
        },
      ];
    
    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"SUNY New Paltz"}
                subHeading={"Bachelor of Science in Computer Science (GPA: 3.3)"}
                fromDate={"Fall 2019 "}
                toDate={" Spring 2021"}
            />
    
            <ResumeHeading
                heading={"Westchester Community College"}
                subHeading={"Associate of Science in Computer Science (GPA: 3.2)"}
                fromDate={"Fall 2017 "}
                toDate={" Spring 2019"}
            />
        </div>,

        /* PROGRAMMING SKILLS */
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{ width: skill.ratingPercentage + "%" }} className="active-percentage-bar"></div>
                    </div>
                </div>
            ))}
        </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
            <ResumeHeadingProjects
                key={index}
                heading={projectsDetails.title}
                link={projectsDetails.link}
                subHeading={projectsDetails.subHeading}
                description={projectsDetails.description}
                fromDate={projectsDetails.duration.fromDate}
                toDate={projectsDetails.duration.toDate}
            />
            ))}
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
            heading="Reading"
            description="I'm always looking for new ways to improve my technical skills, consistently reading new books is a way I find I can remain adaptive"
            />
            <ResumeHeading
            heading="Excercising"
            description="Sticking to a daily work out routine provides me with some extra structure that helps me stay focused through out the day"
            />
            <ResumeHeading
            heading="Cooking"
            description="I love discovering new foods and trying out and testing new recipes, adding new spices to my life provides a me with a stress relief that is incomparable to none other."
            />
        </div>,
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
    
        let newCarousalOffset = {
          style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
    
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };
    
    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                className="bullet-logo"
                src={require(`../../assets/resume/${bullet.logoSrc}`).default}
                alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
      };
    
      const getResumeScreens = () => {
        return (
            <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
      };
    
    useEffect(() => {
        return () => {
          /* UNSUBSCRIBE THE SUBSCRIPTIONS */
          fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume
