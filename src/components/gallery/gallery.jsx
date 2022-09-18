function Gallery(props) {
  const { selectedproducts } = props;
  return (
    <div className="mt-28 mb-28 flex flex-col xl:flex-row gap-7 h-fit">
      <div className="flex flex-col w-full h-full gap-7">
        <div className="border">
          <img
            className="rounded-lg w-full"
            src={selectedproducts.gallery.first.desktop}
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
          src={selectedproducts.gallery.third.desktop}
          alt={selectedproducts.name}
        />
      </div>
    </div>
  );
}

export default Gallery;
