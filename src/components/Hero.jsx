import Button from "./Button";

function Hero() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
      />
      <div className="relative bg-black bg-opacity-50 text-white ">
        <div className="flex items-center flex-col justify-center h-screen">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            Welcome to  Our <span className="text-purple-300">ShopZenith</span>
          </h1>
          <p className="text-lg mb-8 text-center">
        Shop with confidence knowing that your purchases <br /> are backed by our hassle-free return policy.
          </p>
          <Button
          title={"Shop now"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

