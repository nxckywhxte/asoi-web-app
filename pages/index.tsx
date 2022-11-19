import CustomHead from '../components/CustomHead'
import Department from '../components/Department'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Feedback from "../components/Feedback";

export default function Home() {
    return (
        <div>
            <CustomHead title='Главная'/>
            <Navbar/>
            <Department/>
            <News/>
            <Feedback/>
        </div>
    )
}
