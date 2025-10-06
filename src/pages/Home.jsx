import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div className="wrapper">
            <header className="header">
                <section className="header-sec">
                    <img src="../src/assets/icons/Foodgo.svg" alt="Foodgo" />
                    <p className="header-p">Order your favourite food!</p>
                </section>
                <Link className="link" to="/about"><img src="../src/assets/imgs/face-low.png" alt="" /></Link>
            </header>
            <main>
                <section className="search-bar">
                    <input type="text" placeholder="Search" className="input-search" />
                    <button className="button-settings" ><img src="../src/assets/icons/settings-sliders.svg" alt="settings" /></button>
                </section>
                <section className="products-sec">
                    <section className="burger-sec">
                        <img className="burger-img" src="../src/assets/imgs/burgers/wendys_burger.png" alt="wendys_burger" />
                        <h4 className="title_burger">Cheeseburger</h4>
                        <p className="p_burger">Wendy's Burger</p>
                        <div className="details_burger">
                            <div className="star">
                                <img src="../src/assets/icons/star.svg" alt="star" />
                                <p className="star-p">4.3</p>
                            </div>
                            <button className="like-btn"><img src="../src/assets/icons/like.svg" alt="heard" /></button>
                        </div>
                    </section>
                    <section className="burger-sec">
                        <img className="burger-img" src="../src/assets/imgs/burgers/veggie_burger.png" alt="wendys_burger" />
                        <h4 className="title_burger">Hamburger</h4>
                        <p className="p_burger">Veggie Burger</p>
                        <div className="details_burger">
                            <div className="star">
                                <img src="../src/assets/icons/star.svg" alt="star" />
                                <p className="star-p">4.8</p>
                            </div>
                            <button className="like-btn"><img src="../src/assets/icons/like.svg" alt="heard" /></button>
                        </div>
                    </section>
                    <section className="burger-sec">
                        <img className="burger-img" src="../src/assets/imgs/burgers/chicken_burger.png" alt="wendys_burger" />
                        <h4 className="title_burger">Hamburger</h4>
                        <p className="p_burger">Chiken Burger</p>
                        <div className="details_burger">
                            <div className="star">
                                <img src="../src/assets/icons/star.svg" alt="star" />
                                <p className="star-p">4.6</p>
                            </div>
                            <button className="like-btn"><img src="../src/assets/icons/like.svg" alt="heard" /></button>
                        </div>
                    </section>
                    <section className="burger-sec">
                        <img className="burger-img" src="../src/assets/imgs/burgers/fried_chicken_burger.png" alt="wendys_burger" />
                        <h4 className="title_burger">Hamburger</h4>
                        <p className="p_burger">Fried Chicken Burger</p>
                        <div className="details_burger">
                            <div className="star">
                                <img src="../src/assets/icons/star.svg" alt="star" />
                                <p className="star-p">4.5</p>
                            </div>
                            <button className="like-btn"><img src="../src/assets/icons/like.svg" alt="heard" /></button>
                        </div>
                    </section>
                </section>
            </main>
            <footer>
                <nav className="nav">
                    <Link className="link" to="/"><img src="../src/assets/icons/home.svg" alt="home" /></Link>
                    <Link className="link" to="/about"><img src="../src/assets/icons/user.svg" alt="user" /></Link>
                    <div className="plus-div"><Link className="link-plus" to="/profile"><img src="../src/assets/icons/plus.svg" alt="plus" /></Link></div> <br />
                    <Link className="link" to="/"><img src="../src/assets/icons/comment.svg" alt="comment" /></Link>
                    <Link className="link" to="/"><img src="../src/assets/icons/heart.svg" alt="heart" /></Link>
                </nav>
            </footer>
        </div>
    )
}