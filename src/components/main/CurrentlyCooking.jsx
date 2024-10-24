export default function CurrentlyCooking({ currently }) {
  const totalTimes = currently.reduce((total, currentValue) => {
    return total + currentValue?.preparing_time;
  }, 0);

  const totalCalories = currently.reduce((total, currentValue) => {
    return total + currentValue?.calories;
  }, 0);

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-2xl pb-4 border-b w-[350px] m-auto text-center">
        Currently cooking: {currently?.length}
      </h2>
      <div className="mt-3">
        <table>
          <thead>
            <tr className="text-left">
              <th className="p-3"></th>
              <th className="p-3">Name</th>
              <th className="p-3">Time</th>
              <th className="p-3">Calories</th>
            </tr>
          </thead>
          <tbody>
            {currently?.map((recipe) => (
              <tr className="hover:bg-[#0303032d]" key={recipe?.recipe_id}>
                <td className="p-4">1</td>
                <td className="p-4">{recipe?.recipe_name}</td>
                <td className="p-4">{recipe?.preparing_time} minutes</td>
                <td className="p-4">{recipe?.calories} calories</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <td className="p-4"></td>
              <td className="p-4"></td>
              <td className="p-4">Total Time = {totalTimes} minutes</td>
              <td className="p-4">Total Calories = {totalCalories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
