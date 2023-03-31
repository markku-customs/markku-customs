const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="container mx-auto">
        <h1 className="text-white ff-heading text-6xl md:text-9xl mt-20 hero-text">
          We Build You Play
        </h1>
        <p className="text-white hero-description mt-10 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          bibendum sit amet ipsum non pharetra. Curabitur suscipit lectus quis
          ipsum laoreet, id faucibus neque scelerisque.
        </p>
        <ul className="flex gap-4 mt-10">
          <li className="hover:scale-110">
            <a href="#store" className="px-10 bg-red-600 border-white text-sm py-3 uppercase">View Store</a>
          </li>
          <li className="hover:scale-110">
            <a href="#contact" className="px-10 bg-black text-white border-red-600 text-sm py-3 uppercase" >
                Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
