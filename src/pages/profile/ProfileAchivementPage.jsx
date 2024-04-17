import React from "react";
import BackButton from "../../components/BackButton";
import IconAchievement from "../../img/profile-icon-achievement.png";
import Poster from "../../img/poster.png";
import IconKunci from "../../img/icon-kunci.png";

function ProfileAchivementPage() {
  // Fungsi untuk menghitung persentase poin yang diperoleh
  const calculateProgress = (currentPoints, requiredPoints) => {
    return (currentPoints / requiredPoints) * 100;
  };

  // Poin yang diperoleh
  const currentPoints = 2500;

  // Total poin yang diperlukan untuk mencapai level 2
  const requiredPointsLevel1 = 0;
  const requiredPointsLevel2 = 500;
  const requiredPointsLevel3 = 1000;
  const requiredPointsLevel4 = 1500;
  const requiredPointsLevel5 = 2000;
  const requiredPointsLevel6 = 2500;
  const requiredPointsLevel7 = 3000;
  const requiredPointsLevel8 = 3500;
  const requiredPointsLevel9 = 4000;
  const requiredPointsLevel10 = 4500;

  const isLocked2 = currentPoints < requiredPointsLevel2;
  const isLocked3= currentPoints < requiredPointsLevel3;
  const isLocked4 = currentPoints < requiredPointsLevel4;
  const isLocked5 = currentPoints < requiredPointsLevel5;
  const isLocked6 = currentPoints < requiredPointsLevel6;
  const isLocked7 = currentPoints < requiredPointsLevel7;
  const isLocked8 = currentPoints < requiredPointsLevel8;
  const isLocked9 = currentPoints < requiredPointsLevel9;
  const isLocked10 = currentPoints < requiredPointsLevel10;

  return (
    <>
      <div className="flex flex-col gap-[17px] py-[10px] bg-sadar-second-white">
        {/* Bagian Atas */}
        <section className="flex px-5 py-[10px] gap-5">
          <BackButton path={"/profile"} />
          <div className="flex justify-center items-center bg-sadar-third-white border border-sadar-second-black rounded-[5px] p-[5px] w-full">
            <h1 className="font-semibold text-t-black text-base">
              Achievement / Pencapaian
            </h1>
            <img src={IconAchievement} alt="icon info" />
          </div>
        </section>

        {/* Achievement */}
        <div className="flex flex-row p-[5px] gap-[10px] mx-[20px]">
          <div className="flex flex-col gap-[22px] items-center w-full justify-center">
            {/* Level 1 */}
            <div className="w-[20px] h-[20px] bg-[#4CAF50] border-[2px] border-[#3D9970] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#A5DD9B] border-0 rounded-[20px]"></div>

            {/* Level 2 */}
            <div className="w-[20px] h-[20px] bg-[#D9D9D9] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 3 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 4 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 5 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 6 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 7 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 8 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 9 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            {/* Level 10 */}
            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
            <div className="w-[7px] h-[150px] bg-[#D9D9D9] border-[1px] border-[#A2A2A7] rounded-[20px]"></div>

            <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#A2A2A7] rounded-full"></div>
          </div>
          <div className="flex flex-col gap-[20px]">
            {/* Level 1 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white">
                <div className="w-2/5">Level 1</div>
                <div className="w-[1px] h-full bg-black"></div>
                <div className="w-full text-center">Penjaga Bumi</div>
              </div>
              <div className="h-fit w-full rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                <div className="progress-bar h-[15px] bg-[#8DD3BB] w-full"></div>
                <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                  {currentPoints}/{requiredPointsLevel1} Poin
                </h1>
              </div>
            </div>

            {/* Level 2 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 2</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked2 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked2 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel2
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel2} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked2 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 3 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 3</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked3 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked3 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel3
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel3} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked3 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 4 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 4</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked4 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked4 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel4
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel4} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked4 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 5 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 5</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked5 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked5 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel5
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel5} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked5 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 6 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 6</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked6 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked6 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel6
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel6} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked6 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 7 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 7</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked7 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked7 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel7
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel7} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked7 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 8 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 8</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked8 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked8 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel8
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel8} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked8 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 9 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 9</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked9 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked9 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel9
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel9} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked9 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Level 10 */}
            <div
              className={`relative w-[213px] h-[200px] border-[2px] p-[5px] border-black rounded-[5px] bg-no-repeat bg-center flex flex-col justify-between font-semibold text-[12px]`}
              style={{ backgroundImage: `url(${Poster})` }}
            >
              <div className="absolute z-40 flex flex-row justify-between border-[1px] rounded-[5px] border-black p-[5px] gap-[5px] bg-white w-[199px]">
                <div className="w-2/5">Level 10</div>
                <div className="w-[1px] h-[18px] bg-black"></div>
                <div className="w-full text-center">
                  {isLocked10 ? "???" : "Master Daur Ulang"}
                </div>
              </div>
              <div className="mt-[166px]">
                {/* Lapisan dengan background A4A4A4 dan opacity 90% */}
                {isLocked10 && (
                  <div className="absolute inset-0 bg-[#A4A4A4] opacity-90"></div>
                )}
                <div className="absolute h-fit w-[199px] rounded-[10px] border-[1px] bg-white border-black overflow-hidden flex items-center">
                  <div
                    className="progress-bar h-[15px] bg-[#8DD3BB]"
                    style={{
                      width: `${calculateProgress(
                        currentPoints,
                        requiredPointsLevel10
                      )}%`,
                    }}
                  ></div>
                  <h1 className="text-[10px] font-normal absolute z-50 text-center w-full">
                    {currentPoints}/{requiredPointsLevel10} Poin
                  </h1>
                </div>
                {/* Jika level terkunci, tampilkan tulisan 'Terkunci' */}
                {isLocked10 && (
                  <div className="absolute inset-0 flex flex-row items-center justify-center px-[10px] gap-[7px]">
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                      <div className="w-full h-[2px] bg-black"></div>
                    </div>
                    <img src={IconKunci} alt="" />
                    <div className="w-full flex flex-row items-center justify-center">
                      <div className="w-full h-[2px] bg-black"></div>
                      <div className="rounded-full h-[11px] w-[13px] bg-black"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileAchivementPage;
