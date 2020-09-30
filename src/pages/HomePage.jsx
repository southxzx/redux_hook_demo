import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HobbyList from '../components/Home/HobbyList';
import casual from 'casual';


function HomePage(props) {

    const hobbyList = useSelector(state => state.hobby.list);
    const dispatch = useDispatch();

    //console.log(hobbyList);

    const handleAddHobby = () => {
        // Random a hobby obj: id + title
        const newHobby = {
            id: casual.uuid,
            title: casual.title
        }
        // Add
        const action = addNewHobby
    }

    return (
        <div className="home-page">
            <h3>Redux Hook Homepage</h3>

            <button onClick={handleAddHobby}>Random Hobby</button>
            <HobbyList hobbyList={hobbyList}></HobbyList>
        </div>
    )
}

export default HomePage
