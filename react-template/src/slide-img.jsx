function Carousel() {
  const images = [
    "/assets/neurowave-09.png",
    "/assets/neurowave-10.png",
    "/assets/neurowave-11.png",
    "/assets/neurowave-12.png",
    "/assets/neurowave-13.png",
    "/assets/neurowave-14.png",
  ];

  return (
    <div className="slider">
      <div className="slide-track">
        {images.concat(images).map((img, i) => (
          <div className="slide" key={i}>
            <img src={img} alt="" height="100" width="250" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
