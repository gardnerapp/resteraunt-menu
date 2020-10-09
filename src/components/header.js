import React from "react";
import "./headerstyle.css"

class Header extends React.Component {
    render() {
        return (
            <div>
                <img alt={"Healthy, Wealthy, Wise"}
                     src={"https://static.wixstatic.com/media/c8c27c_ec8eb396858b44608d636ce2fedc8ee0.jpg/v1/fill/w_351,h_358,al_c,q_90,usm_0.66_1.00_0.01/c8c27c_ec8eb396858b44608d636ce2fedc8ee0.webp"}
                     className={"Food"}
                />
                <img className={"Logo"}
                     alt={"RocBody Fitness Cafe"}
                     src={"https://static.wixstatic.com/media/c8c27c_b890941ad6134fc5b6ec14af82950640.png/v1/fill/w_546,h_360,al_c,q_85,usm_0.66_1.00_0.01/c8c27c_b890941ad6134fc5b6ec14af82950640.webp"}
                />
                <img alt={"Health Equals Wealth"}
                     src={"https://static.wixstatic.com/media/c8c27c_c48b4bcdd32842fa8ac420e5dd31ef67.jpg/v1/fill/w_479,h_358,al_c,q_90,usm_0.66_1.00_0.01/c8c27c_c48b4bcdd32842fa8ac420e5dd31ef67.webp"}
                     className={"Food"}
                />
                <h1 className={"Slogan"}>Fitness, Family, Food, Fun</h1>
                <div className={"About"}>
                    <p className={"Location"}> 620 North Avenue New Rochelle</p>
                    <div className={"Social_Banner"}>

                        <a href={"https://www.instagram.com/rocbodyfitnesscafe/\""}>
                            <img
                                src={"https://static.wixstatic.com/media/17f992598001435083075924d7b6ae80.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01/17f992598001435083075924d7b6ae80.webp"}
                                alt={"Check Our Instagram For More Great Meals"}
                                className={"Social"}
                            />
                        </a>

                    </div>
                    <p className={"Phone"}> 914-365-2000 </p>
                </div>
            </div>
        )
    }
}

export default Header

//TODO less pading between section and menu Item , section and header, begin scraping, figure out data structure
//TODO none description menu item widget
//TODO line between sections
//TODO onhover display click on a secion
//TODO Exporting data
//TODO bigger fonts