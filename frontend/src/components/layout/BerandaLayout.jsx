import Sidebar from "./Sidebar.jsx";
import { CircleUserRound } from "lucide-react";
function BerandaLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#D2EAF0]">
      <Sidebar />
      <main className="ml-48 min-h-screen px-6 py-7 sm:px-8 lg:px-9">
        {/* USER PROFILE */}
        <div className="mb-2 flex justify-end">
             <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D2EAF0] text-[#1676B5]">
              <CircleUserRound size={24} />
            </div>

            <div className="text-xs leading-tight text-gray-500">
              
              <p className="mt-1 text-sm font-bold text-gray-800">
                User
              </p>
            </div>

          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
export default BerandaLayout;