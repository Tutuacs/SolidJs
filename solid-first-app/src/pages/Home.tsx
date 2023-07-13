import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/products");

  return res.json();
};

export default function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <main>
      {/* <Card title="ninja tee" />
        <Card title="ninja tote bag" /> */}
      <Show when={products()} fallback={<p>Loading ...</p>}>
        <div class="grid grid-cols-4 gap-10 my-4">
          <For each={products()}>
            {(product) => (
              <Card rounded={true} flat={true}>
                <img src={product.img} alt="product img" />
                <h1 class="my-3 font-bold">{product.title}</h1>
                <A href={`/product/${product.id}`} class="btn mx-8">View Product</A>
              </Card>
            )}
          </For>



          {/* <Card rounded={true} flat={false}>
            <h2 class="text-2xl ">White Tee</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus rerum eos dolor.
            </p>
            <button class="btn">Add to Cart</button>
          </Card>
          <Card rounded={false} flat={true}>
            <h2 class="text-2xl ">Black Tee</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus rerum eos dolor.
            </p>
            <button class="btn">Add to Cart</button>
          </Card> */}
        </div>
      </Show>
    </main>
  );
}
