import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex py-12 justify-between items-center">
            <div>
                <Link to={"/"} className="text-4xl font-medium text-underlay-1">
                    SkillSync
                </Link>
            </div>
            <div className="flex justify-center gap-x-8 items-center">
                <Link to={"/"}>Home</Link>
                <Link to={"/job"}>Job</Link>
                <div className="flex gap-x-4 items-center"></div>
            </div>
        </nav>
    );
};

export default Navigation;