import { createResource } from "solid-js";
import Card from "../components/Card";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/products");

  return res.json();
};

export default function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <main>
      <div class="grid grid-cols-4 gap-10 my-4">
        {/* <Card title="ninja tee" />
        <Card title="ninja tote bag" /> */}
        <Card rounded={true} flat={false}>
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
        </Card>
        {console.log(products(), products.loading)}
      </div>
    </main>
  );
}
