import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex flex-wrap justify-center`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 m-2 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] group`}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w=[100px] object-contain transition-all group-hover:brightness-200"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
