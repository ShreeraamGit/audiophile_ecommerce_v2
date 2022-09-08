function Gallery(props) {
  const { selectedproducts } = props;
  return (
    <div className="mt-36 mb-36 flex gap-7 h-fit">
      <div className="flex flex-col w-[65%] h-full gap-7">
        <div className="border">
          <img
            className="rounded-lg w-full"
            src={selectedproducts.gallery.third.desktop}
            alt={selectedproducts.name}
          />
        </div>
        <div className="">
          <img
            className="rounded-lg h-full w-full"
            src={selectedproducts.gallery.second.desktop}
            alt={selectedproducts.name}
          />
        </div>
      </div>
      <div className="w-full">
        <img
          className="rounded-lg h-full w-full"
          src={selectedproducts.gallery.first.desktop}
          alt={selectedproducts.name}
        />
      </div>
    </div>
  );
}

export default Gallery;
