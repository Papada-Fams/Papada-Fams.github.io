import style from "@/styles/card.module.css";
import Image from "next/image";

import CardImg from "@/public/assets/img/Benner.jpg";

export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <div className={style.img_box}>
          <Image src={CardImg} alt="Card" width={500} height={500} />
        </div>
      </div>
      <div className={style.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing it amet it...</p>
        <a className={style.btn_link}>
          {/* dowload svg */}
          dowload
        </a>
      </div>
    </div>
  );
}
