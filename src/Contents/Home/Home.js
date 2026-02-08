import { useNavigate } from 'react-router-dom';
import './Home.css';
import HomeIcon from '../../Images/homeIcon.png';
 
function Home() {
    const navigation = useNavigate();
    const handleBtnClick = (taskCategory, taskCategoryName) => {
        navigation('/Tasks', { state: { taskCategory, taskCategoryName } })
    }

    return (
        <div className="App">
            <div className="Container">
                <img src={HomeIcon} alt='Icon'/>
                <h2 className="title">Choose Task Category</h2>
                <div className="btnGroup">
                    <button className="btn workBtn" onClick={() => handleBtnClick(0, "Work")}>View Work Tasks</button>
                    <button className="btn personalBtn" onClick={() => handleBtnClick(1, "Personal")}>View Personal Tasks</button>
                </div>
            </div>
        </div>
    );
}

export default Home;