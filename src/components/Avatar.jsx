const Avatar = ({ name }) => {
  const initial = name ? name.charAt(0).toUpperCase() : "?";
  const bgColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  const randomIndex = Math.floor(Math.random() * bgColors.length);
  const randomBg = bgColors[randomIndex];
  return (
    <div
      className={`w-10 h-10 aspect-square rounded-full bg-purple-500 text-white flex items-center justify-center text-lg font-regular shadow leading-none`}
    >
      {initial}
    </div>
  );
};

export default Avatar;
