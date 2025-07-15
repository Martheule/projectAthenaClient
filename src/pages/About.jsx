import SimplePageWrapper from "../components/PageWrapper";

const About = () => {
  const teamMembers = [
    {
      name: "Ciro Chen",
      image: "Ciro.png", // Replace with actual image path
      description: "Animation Enthusiast",
    },
    {
      name: "Conni",
      image: "Conni.png",
      description: "Card Detailist",
    },
    {
      name: "Martha",
      image: "Martha.png",
      description: "Events Coordinator",
    },
  ];

  return (
    <SimplePageWrapper pageKey="/about">
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXE1dDVvbjA0M2ZyZ3hrZTljeG01bDhkcjhucndtb2Fsemhid29mZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SiGe0LNINZ9SLy86i2/giphy.gif"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About</h1>
            <p className="py-6">This is built by team Athena, say hi!</p>
          </div>
        </div>
      </div> */}
      <div>
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center bg-[url(https://images.pexels.com/photos/31076298/pexels-photo-31076298.jpeg)] bg-cover pt-16">
          <h1 className="text-6xl font-semibold mb-10 text-center">
            Meet Our Team
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl ">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-500"
                />
                <h2 className="text-xl font-semibold text-white">
                  {member.name}
                </h2>
                <p className="text-md font-regular text-white">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SimplePageWrapper>
  );
};

export default About;
