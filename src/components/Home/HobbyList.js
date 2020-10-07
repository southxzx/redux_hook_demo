import React from 'react';
import PropTypes from 'prop-types';
import './HobbyList.css';

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeID: PropTypes.number,
    onHobbyClick: PropTypes.func
};

HobbyList.defaultProps = {
    hobbyList : [],
    activeID: null,
    onHobbyClick: null
}

function HobbyList(props) {
    const { hobbyList, activeID, onHobbyClick } = props;

    const handleClick = (hobby) => {
        if(onHobbyClick){
            // Hàm bên hàm cha HomePage
            onHobbyClick(hobby);
        }
    }

    return (
        <ul className="hobby-list">
            {hobbyList.map(hobby => (
                <li key={hobby.id} className={hobby.id === activeID ? 'active' : ''} onClick={() =>handleClick(hobby)}>{hobby.title}</li>
            ))}
        </ul>
    );
}

export default HobbyList
