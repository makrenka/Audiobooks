import { sections } from "../../../constants/sections";
import { Header } from "../../molecules/header";
import { SectionHome } from "../../organisms/categories-home";

export const HomePage = () => (
    <>
        <Header />
        {sections.map(({ name, content }) =>
            <SectionHome key={name} name={name} content={content} />
        )}

    </>
)