export default function WantToCook({ wantCooks, handleAddToCurrentlyCooking }) {
  return (
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
          {wantCooks?.map((recipe, index) => (
            <tr className="hover:bg-[#0303032d]" key={recipe?.recipe_id}>
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{recipe?.recipe_name}</td>
              <td className="p-3">{recipe?.preparing_time} minutes</td>
              <td className="p-3">{recipe?.calories} calories</td>
              <td className="p-3">
                <button
                  onClick={() => {
                    handleAddToCurrentlyCooking(recipe);
                  }}
                  className="py-[9px] px-[18px] rounded-full bg-[#0BE58A] font-medium"
                >
                  Preparing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
