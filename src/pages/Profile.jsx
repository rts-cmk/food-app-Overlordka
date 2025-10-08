import { Link } from "react-router-dom"

export default function Profile() {
    return (
        <div className="wrapper">
            <header className="header profil-header">
                <Link className="link" to="/"><img className="left-arrow" src="../src/assets/icons/arrow-left.svg" alt="arrow-left" /></Link>
                <Link className="link" to="/"><img src="../src/assets/icons/settings.svg" alt="arrow-left" /></Link>
            </header>
            <main className="main-profil">
                <section className="profil-sec">
                    <div className="profil-img">
                        <img src="../src/assets/imgs/face-mid.png" alt="face" />
                    </div>
                    <form className="profil-form">
                        <div className="input-box">
                            <label htmlFor="name" className="input-label">Name</label>
                            <input className="input-profil" type="text" id="name" value="Sophia Patel" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="email" className="input-label">Email</label>
                            <input className="input-profil" type="email" id="email" value="sophiapatel@gmail.com" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="delivery" className="input-label">Delivery address</label>
                            <input className="input-profil" type="text" id="delivery" value="123 Main St Apartment 4A,New York, NY" />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password" className="input-label">Pasword</label>
                            <input className="input-profil" type="password" id="password" value="123456789" />
                        </div>
                    </form>
                </section>
            </main>
            <footer className="profil-btn-footer">
                <section className="footer-btn-sec">
                    <button className="footer-btn-edit">Edit Profile <img src="../src/assets/icons/edit.svg" alt="edit" /></button>
                    <button className="footer-btn-log-out">Log out <img src="../src/assets/icons/sign-out.svg" alt="sign-out" /></button>
                </section>
            </footer>
        </div>
    )
}