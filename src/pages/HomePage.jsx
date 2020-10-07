import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HobbyList from '../components/Home/HobbyList';
// import casual from 'casual';
import { addNewHobby, setActivityHobby } from '../actions/hobby';


const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
}

function HomePage(props) {

    const hobbyList = useSelector(state => state.hobby.list);
    const activeID = useSelector(state => state.hobby.activeID);
    const dispatch = useDispatch();

    console.log(hobbyList);

    const handleAddHobby = () => {
        // Random a hobby obj: id + title
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `DMM ${newId}`
        }
        // Add
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActivityHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h3>Redux Hook Homepage</h3>

            <button onClick={handleAddHobby}>Random Hobby</button>
            <HobbyList 
                hobbyList={hobbyList}
                activeID={activeID}
                onHobbyClick={handleHobbyClick}
                />
        </div>
    )
}

export default HomePage
