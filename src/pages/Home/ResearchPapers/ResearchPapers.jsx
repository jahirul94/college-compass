import axios from "axios";
import { useEffect, useState } from "react";

const ResearchPapers = () => {
    const [papers, setPapers] = useState([])
    useEffect(() => {
        axios.get('dara.json')
            .then(data => setPapers(data.data))
    }, [])
    
    return (
        <div className="min-h-screen mt-64">
            <div>
                <h2 className="text-4xl font-bold mb-20 text-center underline underline-offset-4">Innovations in Research</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    papers?.map((paper, i) => <div key={i} className="card bg-base-100 shadow-xl">
                        <figure><img src={paper.imglink} alt="papers"  className="h-96"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{paper.college} Papers</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ResearchPapers;