import React from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import {Radar} from "react-chartjs-2";

function Skills(props) {
    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );
    
    const data = {
        labels: props.skills,
        datasets: [
            {
                label: "Skills Chart",
                data: props.ratings,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    };
    console.log(props.skills);
    console.log(props.ratings);
    return <Radar data={data} className="px-2 mt-10 mx-auto" />;
}

export default Skills;
