import BannerTeam from "../../img/Banner-Team.png"
import Photo from "../../img/Profile-Orang.png"
import IconTeamDart from "../../img/icon-team-dart.png"
import IconTeamDiscord from "../../img/icon-team-discord.png"
import IconTeamExpressJs from "../../img/icon-team-expressjs.png"
import IconTeamFigma from "../../img/icon-team-figma.png"
import IconTeamFlutter from "../../img/icon-team-flutter.png"
import IconTeamGithub from "../../img/icon-team-github.png"
import IconTeamNodeJs from "../../img/icon-team-nodejs.png"
import IconTeamReactJS from "../../img/icon-team-reactjs.png"
import IconTeamTailwind from "../../img/icon-team-tailwind.png"
import IconTeamTrello from "../../img/icon-team-trello.png"

// Component
import TitleComponent from '../../components/TitleComponent'


function TentangKamiPage() {
  return (
    <>
      <TitleComponent title={"Tentang Kami"} path={"/"} />
      <main className='flex flex-col gap-2 px-5 mb-5'>
        <img
          src={BannerTeam}
          className="rounded-xl w-full h-48 object-cover"
        />
        <h1 className="text-t-black font-semibold text-xl text-center">SADAR - Team</h1>
        <p className="text-t-black font-normal text-justify">Hai kami adalah ITC Kelompok 4, yang mengambil tema lingkungan. Dan berikut adalah tim kami</p>

        <div className="flex flex-col gap-2">
          {/* <TeamProfile></TeamProfile> */}
          {/* PM */}
          <div className="flex flex-col justify-center items-center rounded-lg gap-1 py-2 px-12 w-full h-auto drop-shadow-lg bg-white">
            <div className="text-center">
              <h1 className="font-bold text-sm">PM</h1>
              <h2 className="font-medium text-xs">Project Manager</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Ayrisa Trianida</h1>
            </div>
            <div className="bg-t-black w-full h-[2px]"></div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-sm text-center">Tools</h1>
              <div className="flex gap-2">
                <img src={IconTeamGithub} className="rounded-md drop-shadow-lg" />
                <img src={IconTeamDiscord} className="rounded-md drop-shadow-lg" />
                <img src={IconTeamTrello} className="rounded-md drop-shadow-lg" />
              </div>
            </div>
          </div>
          {/* UI/UX */}
          <div className="flex flex-col justify-center items-center rounded-lg gap-1 py-2 px-12 w-full h-auto drop-shadow-lg bg-white">
            <div className="text-center">
              <h1 className="font-bold text-sm">UI/UX</h1>
              <h2 className="font-medium text-xs">User Interface & User Experience</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Wahyu Febriansyah</h1>
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Simad</h1>
            </div>
            <div className="bg-t-black w-full h-[2px]"></div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-sm text-center">Tools</h1>
              <div className="flex gap-2">
                <img src={IconTeamFigma} className="rounded-md drop-shadow-lg" />
              </div>
            </div>
          </div>
          {/* MD */}
          <div className="flex flex-col justify-center items-center rounded-lg gap-1 py-2 px-12 w-full h-auto drop-shadow-lg bg-white">
            <div className="text-center">
              <h1 className="font-bold text-sm">MD</h1>
              <h2 className="font-medium text-xs">Mobile Developer</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Diandra Yusuf A</h1>
            </div>
            <div className="bg-t-black w-full h-[2px]"></div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-sm text-center">Tools</h1>
              <div className="flex gap-2">
                <img src={IconTeamDart} className="rounded-md drop-shadow-lg" />
                <img src={IconTeamFlutter} className="rounded-md drop-shadow-lg" />
              </div>
            </div>
          </div>
          {/* BE */}
          <div className="flex flex-col justify-center items-center rounded-lg gap-1 py-2 px-12 w-full h-auto drop-shadow-lg bg-white">
            <div className="text-center">
              <h1 className="font-bold text-sm">BE</h1>
              <h2 className="font-medium text-xs">Back-End Developer</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Muhammad Meidy Noor Al-Barry</h1>
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Arvidion Havas Oktavian</h1>
            </div>
            <div className="bg-t-black w-full h-[2px]"></div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-sm text-center">Tools</h1>
              <div className="flex gap-2">
                <img src={IconTeamNodeJs} className="rounded-md drop-shadow-lg" />
                <img src={IconTeamExpressJs} className="rounded-md drop-shadow-lg" />
              </div>
            </div>
          </div>
          {/* FE */}
          <div className="flex flex-col justify-center items-center rounded-lg gap-1 py-2 px-12 w-full h-auto drop-shadow-lg bg-white">
            <div className="text-center">
              <h1 className="font-bold text-sm">FE</h1>
              <h2 className="font-medium text-xs">Front-End Developer</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Akbar Ariffianto</h1>
              <img
                src={Photo}
                className="rounded-lg drop-shadow-lg" />
              <h1 className="font-semibold text-sm">Wijdan Akhmad S</h1>
            </div>
            <div className="bg-t-black w-full h-[2px]"></div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-sm text-center">Tools</h1>
              <div className="flex gap-2">
                <img src={IconTeamReactJS} className="rounded-md drop-shadow-lg" />
                <img src={IconTeamTailwind} className="rounded-md drop-shadow-lg" />
              </div>
            </div>
          </div>


        </div>
      </main>
    </>
  )
}

export default TentangKamiPage;