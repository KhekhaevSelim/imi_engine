import Header from "../components/Header";
import Heading from "./components/Heading";
import Note from "./components/Note";
import SideBar from "./components/SideBar";

export default function Templates() {
    return (
        <main className="h-screen max-h-screen w-full flex flex-col items-center bg-bg-lite dark:bg-bg-dark ">
            <div className="w-full">
                <Header/>
            </div>
            <Heading/>
            <div className="w-full flex flex-grow px-[24px] overflow-hidden">
                <SideBar/>
                <Note/>
            </div>
        </main>
    )
}