export default function WantToCook() {
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
        <tbody className="bg-[#28282808]">
          <tr>
            <td className="p-3">1</td>
            <td className="p-3">Chicken Caesar Salad</td>
            <td className="p-3">20 minutes</td>
            <td className="p-3">400 calories</td>
            <td className="p-3">
              <span className="py-[9px] px-[18px] rounded-full bg-[#0BE58A] font-medium">
                Preparing
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
