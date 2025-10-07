import { Link } from "react-router-dom"

export default function Profile() {
    return(
        <div className="wrapper">
            <header className="header profil-header">
                <Link className="link" to="/"><img src="../src/assets/icons/arrow-left.svg" alt="arrow-left" /></Link>
            </header>
        </div>
    )
}