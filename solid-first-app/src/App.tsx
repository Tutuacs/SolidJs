import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {

  const[darkTheme, setDarkTheme] = createSignal(false)
  
  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  return (
    <main class="container m-auto">
      <header 
      class="my-4 p-2 text-xl flex items-center gap-4"
      classList={{"bg-neutral-900":darkTheme(), "text-white": darkTheme()}}
      >
        <span
        class="cursor-pointer"
        onClick={toggleTheme}>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1biI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIvPjxwYXRoIGQ9Ik0xMiAydjIiLz48cGF0aCBkPSJNMTIgMjB2MiIvPjxwYXRoIGQ9Im00LjkzIDQuOTMgMS40MSAxLjQxIi8+PHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIvPjxwYXRoIGQ9Ik0yIDEyaDIiLz48cGF0aCBkPSJNMjAgMTJoMiIvPjxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xOS4wNyA0LjkzLTEuNDEgMS40MSIvPjwvc3ZnPg==" alt="" />
        </span>
        <h1>Ninja Merch</h1>
      </header>

      <img class="rounded-lg w-screen" src={banner} alt="" />

      <div class="grid grid-cols-4 gap-10 my-4">
        {/* <Card title="ninja tee" />
        <Card title="ninja tote bag" /> */}
        <Card rounded={true} flat={false} />
        <Card rounded={false} flat={true}/>
      </div>
    </main>
  );
}

export default App;
