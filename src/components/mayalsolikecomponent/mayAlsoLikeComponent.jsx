import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function MayAlsoLikeComponent(props) {
  const { selectedproducts } = props;

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold tracking-[.3rem] text-center">
        YOU MAY ALSO LIKE
      </h1>
      <div className="flex flex-col justify-between gap-10">
        {selectedproducts.others.map((items) => (
          <div key={items.name} className=" flex flex-col gap-10">
            <div className="">
              <img
                className="border rounded-xl h-[18rem] w-full"
                src={items.image.desktop}
                alt="HeroImage"
              />
            </div>
            <div className="h-fit flex flex-col gap-10 justify-center items-center">
              <h1 className="text-3xl font-bold tracking-wider">
                {items.name.toUpperCase()}
              </h1>
              <Link to={`${items.id}`}>
                <Button
                  style={{
                    backgroundColor: "#D87D4A",
                    borderRadius: "0px",
                    width: "100%",
                  }}
                  variant="contained"
                  size="large"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MayAlsoLikeComponent;
