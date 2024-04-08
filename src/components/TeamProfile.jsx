import Photo from "../img/Profile-Orang.png"
import IconTeamDart from "../img/icon-team-dart.png"
import IconTeamDiscord from "../img/icon-team-discord.png"
import IconTeamExpressJs from "../img/icon-team-expressjs.png"
import IconTeamFigma from "../img/icon-team-figma.png"
import IconTeamFlutter from "../img/icon-team-flutter.png"
import IconTeamGithub from "../img/icon-team-github.png"
import IconTeamNodeJs from "../img/icon-team-nodejs.png"
import IconTeamReactJS from "../img/icon-team-reactjs.png"
import IconTeamTailwind from "../img/icon-team-tailwind.png"
import IconTeamTrello from "../img/icon-team-trello.png"


function TeamProfile() {
  const datas = [
    {
      id: 1,
      jabatan: "PM",
      kepanjangan: "Project Manager",
      nama: "Ayrisa Trianida",
      gambar: Photo,
      tools: [IconTeamGithub, IconTeamDiscord, IconTeamTrello]
    },
    {
      id: 2,
      jabatan: "UI/UX",
      kepanjangan: "User Interface & User Experience",
      nama: ["Wahyu Febriansyah", "Wijdan Akhmad"],
      gambar: Photo,
      tools: [IconTeamFigma]
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center rounded-lg gap-1 py-2 px-12 w-full h-auto drop-shadow-lg bg-white">
      {datas.map(data => (
        <div key={data.id}>
          <div className="text-center">
            <h1 className="font-bold text-sm">{data.jabatan}</h1>
            <h2 className="font-medium text-xs">{data.kepanjangan}</h2>
          </div>
          <div className="flex flex-col gap-4">
            {Array.isArray(data.nama) ? (
              data.nama.map((nama, index) => (
                <div key={index} className="flex flex-col justify-center items-center">
                  <img src={data.gambar} className="rounded-lg drop-shadow-2xl" alt="Profile" />
                  <h1 className="font-semibold text-sm">{nama}</h1>
                  <div className="bg-t-black w-full h-[2px]"></div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-semibold text-sm text-center">Tools</h1>
                    <div className="flex gap-2">
                      {data.tools.map((tool, index) => (
                        <img key={index} src={tool} alt={`Tool ${index + 1}`} />
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center">
                <img src={data.gambar} className="rounded-lg drop-shadow-2xl" alt="Profile" />
                <h1 className="font-semibold text-sm">{data.nama}</h1>
                <div className="bg-t-black w-full h-[2px]"></div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-sm text-center">Tools</h1>
                  <div className="flex gap-2">
                    {data.tools.map((tool, index) => (
                      <img key={index} src={tool} alt={`Tool ${index + 1}`} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamProfile;
