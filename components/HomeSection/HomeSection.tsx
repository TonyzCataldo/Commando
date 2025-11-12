import { HomeSectionPropsType } from "./HomeSectionTypes";

const HomeSection = ({children}: HomeSectionPropsType) => {

    return (
        <section className="w-full gap-7 flex flex-col md:flex-row">
            {children}
        </section>
    )
}

export default HomeSection;