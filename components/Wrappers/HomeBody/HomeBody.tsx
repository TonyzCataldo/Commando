import { HomeBodyPropsType } from "./HomeBodyTypes";

const HomeBody = ({children}: HomeBodyPropsType) => {

    return (
        <main className="max-w-[1440px] w-full flex flex-col gap-24 px-4 lg:px-6">
            {children}
        </main>
    )
}

export default HomeBody;