const About = () => {
  return (
    <div className="my-4">
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
         <div className="md:w-1/2 relative">
         <img
            src="https://i.ibb.co/QDcktS3/3.jpg"
            className="md:w-3/4 md:h-[480px] object-cover rounded-lg shadow-2xl"
          />
         <img
            src="https://i.ibb.co/W2ZvvGq/parts.jpg"
            className="w-1/2 md:h-[280px] object-cover  rounded-lg shadow-2xl  border-8 border-white absolute md:right-14 right-0 -bottom-8"
          />
         </div>
          <div className="md:w-1/2 h-[480px] flex flex-col justify-between mt-8 md:mt-0">
            <h1 className="text-3xl text-orange-600 font-bold">About Us</h1>
            <h1 className="text-5xl font-bold pt-4">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <p className="pb-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
            </p>
            <div>
            <button className="btn btn-outline bg-orange-600 text-white ">Get More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
