import React, {Component} from "react";
import MenuItem from "./menu_item";
import "./section_styl.css";

class Section extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
           display: "none",
        };

    }
    toggle(){
        if (this.state.display === "none")
            {this.setState({display: "inline"})}

        else {this.setState({display: "none"})}
        }


    render() {
        let name = this.props.menu.name;
        let items = this.props.menu.items;
        let itemList = items.map(item => <MenuItem item={item}/>);
        return (
            <div>
                <h1 className={"SectionName"} onClick={this.toggle}>{name}</h1>
                <div style={{display: this.state.display}}>
                     <img className={"Image2"} alt={"Good Eats"}
                src={"https://static.wixstatic.com/media/c8c27c_1cea9a5f3dfa4c2dbbca6528867376f3.jpg/v1/fill/w_440,h_440,al_c,q_80,usm_0.66_1.00_0.01/c8c27c_1cea9a5f3dfa4c2dbbca6528867376f3.webp"}
                />
                <img className={"Image1"} alt={"Good Eats"}
                src={"https://static.wixstatic.com/media/c8c27c_0bd55dc1de3a43ceb8f25b080ff7f575.jpg/v1/fill/w_81,h_108,al_c,q_90,usm_0.66_1.00_0.01/c8c27c_0bd55dc1de3a43ceb8f25b080ff7f575.webp"}
                />
                <ul>
                    {itemList}
                </ul>
                    </div>
            </div>
        )

    }
}

export default Section
