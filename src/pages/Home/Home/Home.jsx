import useTitle from "../../../Hooks/useTitle";
import DisplayColleges from "../DisplayColleges/DisplayColleges";
import Gallery from "../Gallery/Gallery";
import ResearchPapers from "../ResearchPapers/ResearchPapers";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    useTitle("Home");
    return (
        <div>
             <DisplayColleges></DisplayColleges>
             <Gallery></Gallery>
             <ResearchPapers></ResearchPapers>
             <Reviews></Reviews>
        </div>
    );
};

export default Home;