const Banner = () => {
  return (
    <div className="hero bg-base-200 p-8 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Leatest Products</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            vero dicta earum? Placeat voluptatum eligendi harum soluta numquam
            consectetur saepe in hic possimus deleniti cumque, officia eius
            quaerat voluptatibus doloribus?
          </p>
          <button className="btn btn-primary">Shop Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
