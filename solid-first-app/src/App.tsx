import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import { A, Route, Routes } from "@solidjs/router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { useCartContext } from "./context/CartContext";

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  const {items} = useCartContext()

  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity
    }, 0)
  }

  return (
    <main
      class="container m-auto"
      classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
    >
      <header class="my-4 p-2 text-xl flex items-center gap-4">
        <span class="cursor-pointer" onClick={toggleTheme}>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1biI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIvPjxwYXRoIGQ9Ik0xMiAydjIiLz48cGF0aCBkPSJNMTIgMjB2MiIvPjxwYXRoIGQ9Im00LjkzIDQuOTMgMS40MSAxLjQxIi8+PHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIvPjxwYXRoIGQ9Ik0yIDEyaDIiLz48cGF0aCBkPSJNMjAgMTJoMiIvPjxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xOS4wNyA0LjkzLTEuNDEgMS40MSIvPjwvc3ZnPg==" />
        </span>
        <h1>Ninja Merch</h1>
        <A href="/">Home</A>
        <A href="/Cart">Cart({quantity()})</A>
      </header>

      <img class="rounded-lg w-screen" src={banner} alt="" />

      <Routes>
        <Route path={"/"} component={Home}></Route>
        <Route path={"/cart"} component={Cart}></Route>
        <Route path={"/product/:id"} component={Product}></Route>
      </Routes>
    </main>
  );
}

export default App;
