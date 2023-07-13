export default function Card(props: any) {
  return (
    <div
      class="bg-white pt-4 pb-3 text-center rounded-md shadow-lg flex flex-col justify-between"
      classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
    >
      {props.children}
      {/* <h2 class="text-2xl "></h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus rerum eos dolor.
        </p> */}
    </div>
  );
}
