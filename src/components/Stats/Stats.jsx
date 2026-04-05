const Stats = ({ stats }) => {
  return (
    <ul className="w-full flex justify-around bg-gray-100/10 border border-gray-300/20 rounded-xl py-2">
      {stats.map((stat) => (
        <li key={stat.id} className="flex flex-col items-center">
          <span className="flex items-center text-xl md:text-3xl text-gray-100 font-bold">
            {stat.value}
            <span>{stat.suffix}</span>
          </span>
          <span className="text-xs md:text-base text-gray-300">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Stats;
