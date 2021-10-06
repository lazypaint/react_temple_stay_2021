import React from "react";
import PropTypes from "prop-types";

function Temple({name, desc}){
    return <div>
        <h5>{name}</h5>
        <p>{desc}</p>
        </div>
    
}

Temple.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,

};

export default Temple;