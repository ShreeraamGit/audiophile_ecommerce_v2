import AboutImage from "../../assets/shared/desktop/image-best-gear.jpg";

function About() {
  return (
    <div className="flex flex-col-reverse gap-10 mb-32 justify-center items-center">
      <div className="w-full">
        <div className="w-full text-center space-y-5 flex flex-col justify-center items-center">
          <h1 className="text-[2.1rem] font-bold tracking-wide">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="text-[#101010] tracking-wide">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers an audio
            accessories.We have a large showroom and luxury demonstration rooms
            avaliable for you to browse and experience a wide range of out
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment
          </p>
        </div>
      </div>
      <div className="w-full">
        <img className="rounded-xl" src={AboutImage} alt="HeroImage" />
      </div>
    </div>
  );
}

export default About;
