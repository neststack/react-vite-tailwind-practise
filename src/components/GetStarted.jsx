import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] group cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium transition-all group-hover:text-[22px] text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          className="w-[23px] h-[23px] object-contain transition-all group-hover:w-[26px] group-hover:h-[26px] "
          alt="arrow"
        />
      </div>
      <p className="font-poppins font-medium transition-all group-hover:text-[22px] text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
