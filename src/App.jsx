import { useState } from "react";
import "./index.css"

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


export default function App() {

    const [pizza, setPizza] = useState(pizzaData)

    return (<>
        <Header />

        <main className="menu">
            <ul className="pizzas">


                {pizza.map((data) => (
                    <Pizza key={data.name} info={data} />
                ))}
            </ul>
        </main>

        <Footer />
    </>)

}

function Pizza({ info }) {
    return (<li className="pizza">
        <h3>{info.name}</h3>
        <img src={info.photoName} alt={info.name} srcSet="" />
        <p>
            ingredients : {info.ingredients}
        </p>
        <div>
            pirce : {info.price}
        </div>

    </li>)
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Footer() {
    return (<footer>

    </footer>)
}
