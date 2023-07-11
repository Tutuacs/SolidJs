import { JSX } from "solid-js/jsx-runtime";

export default function Card(props: any) {
  return (
    <div 
    class="bg-white pt-4 pb-3 text-center rounded-md shadow-lg"
    classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
    >
      <div class="mb-auto mt-2">
        <h2 class="text-2xl "></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus rerum eos dolor.
        </p>
      </div>
      <button class="btn">Add to Cart</button>
    </div>
  );
}
