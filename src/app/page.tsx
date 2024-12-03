import Image from "next/image";
import Main from "../components/Main";
import stars from "../../public/images/stars.png";
import calendar from "../../public/images/calendar.png";
import sleep from "../../public/images/bearSleep.png";
import lenta from "../../public/images/lenta.png";
import car from "../../public/images/car.png";
import map from "../../public/images/map.png";
import insta from "../../public/images/insta.webp";
import Attendance from "../components/Attendance";
import shar from "../../public/images/Shar.png";
import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <main className="flex  flex-col items-center text-[16px] sm:text-[20px] mb-[10px]">
      <Main />
      <div className="mt-10 mb-20 text-[24px] sm:text-[22px]  text-center text-animation">
        <p className="kurmet kurmet2 ">Уважаемые гости!</p>
        <p className="kurmet">Мы приглашаем Вас</p>
        <p className="kurmet2">на торжественное</p>
        <p className="kurmet">празднование первого</p>
        <p className="kurmet">дня рождения нашего сына</p>
        <p className="kurmet2">Таира</p>
        <p className="kurmet">за праздничным дастарханом</p>
        <p className="kurmet">в качестве дорогого гостя!!!</p>
      </div>
      <div className="flex justify-center justify-between">
        <Image
          className="stars"
          height={60}
          width={70}
          src={stars}
          alt="stars"
        />
        <Image
          className="stars"
          height={60}
          width={70}
          src={stars}
          alt="stars"
        />
      </div>

      <div className=" kurmet text-center mt-10 text-[24px] sm:text-[20px] mb-[10px]">
        <p className="bastau ">Торжество:</p>
        <p className="kurmet2">23 декабря 2024 года</p>
        <p className="kurmet2">Начало: 17:00</p>

        <Calendar />
      </div>

      <Image className="shar" height={128} width={128} src={shar} alt="shar" />

      <Image
        className="mt-[80px]"
        height={200}
        width={200}
        src={sleep}
        alt="sleep"
      />
      <div className="overflow-hidden  flex justify-center items-center min-w-[300px] md:block mt-[-85px]">
        <Image
          className="rotate-[-20deg] h-[250px] w-[400px]"
          height={364}
          width={364}
          src={lenta}
          alt="lenta"
        />
        <Image
          className="rotate-[28deg] h-[250px] w-[400px]"
          height={364}
          width={364}
          src={lenta}
          alt="lenta"
        />
      </div>

      <div className="kurmet text-center mt-[-60px] text-[24px] sm:text-[20px] mb-[10px] ">
        <p>Наш адрес:</p>
        <p>город Астана</p>
        <p className="kurmet2">улица Темирбек Жургенов, 18/2</p>
        <p className="kurmet2">Ресторан "Шығыс Жұлдызы"</p>
      </div>

      <Image className="car" height={233} width={233} src={car} alt="car" />

      <div className="kurmet text-center mb-10 text-[20px] sm:text-[15px]">
        <p className="">Для вашего удобства</p>
        <p className="">воспользуйтесь картой, указанной ниже</p>
      </div>

      <div className="flex justify-center">
        <a href="https://2gis.kz/astana/firm/70000001036844460?m=71.588425%2C51.120551%2F12.2">
          <Image
            height={50}
            width={50}
            src={map}
            alt="map"
            style={{ marginRight: "30px" }}
          />
        </a>
        <a href="https://www.instagram.com/shygys_juldyzy/">
          <Image height={50} width={50} src={insta} alt="insta" />
        </a>
      </div>

      <div className="kurmet text-center mb-10 mt-10 text-[24px] sm:text-[20px]">
        <p className="">Хозяева торжества:</p>
        <p className="">Родители</p>
        <p className="mt-10 text-[28px] sm:text-[24px] kurmet2">
          Асхат && Анна
        </p>
      </div>

      <Attendance />
    </main>
  );
}
