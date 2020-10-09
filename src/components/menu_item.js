import React from "react";
import "./menu_item_style.css"

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h2 className={"ItemName"}>
                    {this.props.item[0]}
                </h2>
                <h2 className={"Price"}>{this.props.item[1]}</h2>
                <p className={"ItemDescription"}>
                    {this.props.item[2]}
                </p>
            </div>
        )
    }
}

export default MenuItem

//map items in items to menu item