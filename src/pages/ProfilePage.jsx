import Logout from "../assets/Logout.svg";
import "../css/index.css";

function ProfilePage() {
  return (
    <div class="h-screen relative">
      <div class="fixed px-5 py-2.5 w-full">
        <div class="flex items-center justify-between font-medium">
          <span class="w-[185px] text-end text-[20px]">Profile</span>
          <span class="">
            <img class="p-[5px]" src={Logout} alt="" />
          </span>
        </div>
      </div>

      <div class="bottom-0 p-[10px] fixed w-screen">
        <div class="flex justify-between">
          <div class="flex-1 group">
            <a
              href="#"
              class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <img src={Home} alt="" />
                <span class="block text-xs pb-2 text-[#79747E]">Home</span>
              </span>
            </a>
          </div>
          <div class="flex-1 group">
            <a
              href="#"
              class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <span class="block text-xs pb-2">Explore</span>
                <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </a>
          </div>
          <div class="flex-1 group">
            <a
              href="#"
              class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <span class="block text-xs pb-2">Search</span>
                <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </a>
          </div>
          <div class="flex-1 group">
            <a
              href="#"
              class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500"
            >
              <span class="block px-1 pt-1 pb-1">
                <span class="block text-xs pb-2">Settings</span>
                <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
