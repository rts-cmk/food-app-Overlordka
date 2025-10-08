import { Link } from "react-router-dom"
import { useState } from "react"

export default function About() {
    const [value, setValue] = useState(5);

    const handleChange = (e) => setValue(e.target.value);

    const percentage = (value / 10) * 100

    return (
        <div className="wrapper">
            <header className="header">
                <Link className="link" to="/"><img src="../src/assets/icons/arrow-left.svg" alt="arrow-left" /></Link>
                <button className="search-btn"><img className="search-svg" src="../src/assets/icons/search.svg" alt="search" /></button>
            </header>
            <main>
                <article className="product">
                    <img className="burger-product" src="../src/assets/imgs/burgers/large-burger.png" alt="large-burger" />
                    <h3>Cheeseburger Wendy's Burger</h3>
                    <div className="star">
                        <img src="../src/assets/icons/star.svg" alt="star" />
                        <p className="star-p">4.9 —</p> <p className="time-p">— 26 mins</p>
                    </div>
                    <p className="about-burger">The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.</p>
                    <section className="configurations">
                        <div className="configuration">
                            <h5>Spicy</h5>
                            <div className="slider-container">
                                <span className="green">Mild</span>
                                <input
                                    className="input-range"
                                    type="range"
                                    name="spice"
                                    min="0"
                                    max="10"
                                    value={value}
                                    onChange={handleChange}
                                    style={{
                                        background: `linear-gradient(to right, rgb(239, 42, 57) ${percentage}%, #eee ${percentage}%)`,
                                    }}
                                />
                                <span className="red">Hot</span>
                            </div>
                        </div>
                        <div className="configuration-portion">
                            <h5 className="portion-h5">Portion</h5>
                            <div className="counter-portion">
                                <button className="count"><img src="../src/assets/icons/minus_c.svg" alt="minus_c" /></button>
                                <p className="portion">2</p>
                                <button className="count"><img src="../src/assets/icons/plus_c.svg" alt="plus_c" /></button>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <footer>
                <section className="footer-btn-sec">
                    <button className="footer-btn-pris">$8.24</button>
                    <button className="footer-btn-order">order now</button>
                </section>
            </footer>
        </div>
    )
}