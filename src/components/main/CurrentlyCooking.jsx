export default function CurrentlyCooking() {
  return (
    <div className="mt-8">
      <h2 className="font-semibold text-2xl pb-4 border-b w-[350px] m-auto text-center">
        Currently cooking: 02
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
          <tbody className="bg-[#28282808]">
            <tr>
              <td className="p-4">1</td>
              <td className="p-4">Chicken Caesar Salad</td>
              <td className="p-4">20 minutes</td>
              <td className="p-4">400 calories</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="p-4"></td>
              <td className="p-4"></td>
              <td className="p-4">Total Time = 45 minutes</td>
              <td className="p-4">Total Calories = 1050 calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
