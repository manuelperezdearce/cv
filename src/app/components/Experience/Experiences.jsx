import Experience_1 from "./components/Experience_1"
import Experience_2 from "./components/Experience_2"
import Experience_3 from "./components/Experience_3"
import Experience_4 from "./components/Experience_4"
import Experience_5 from "./components/Experience_5"
import Experience_6 from "./components/Experience_6"

export default function Experience() {
    return (
        <div className="[&>*]:flex [&>*]:flex-col [&>*]:gap-2 flex flex-col gap-6">
            <h2>Experiencia</h2>
            <Experience_6 />
            <Experience_5 />
            <Experience_4 />
            <Experience_3 />
            <Experience_2 />
            <Experience_1 />
        </div>
    )
}