function Gallery(props) {
  const { products } = props;
  return (
    <div className="mt-36 mb-36 flex gap-7 h-fit">
      <div className="flex flex-col w-[65%] h-full gap-7">
        <div className="border">
          <img
            className="rounded-lg w-full"
            src={products.gallery.third.desktop}
            alt={products.name}
          />
        </div>
        <div className="">
          <img
            className="rounded-lg h-full w-full"
            src={products.gallery.second.desktop}
            alt={products.name}
          />
        </div>
      </div>
      <div className="w-full">
        <img
          className="rounded-lg h-full w-full"
          src={products.gallery.first.desktop}
          alt={products.name}
        />
      </div>
    </div>
  );
}

export default Gallery;
