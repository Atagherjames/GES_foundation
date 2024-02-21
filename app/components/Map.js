import styles from "./map.module.css";

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63048.55896137939!2d7.5513544!3d9.0148685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e057742910bcd%3A0x8903412a4139096d!2sShopping%20Center%2C%20One%20Man%20Village!5e0!3m2!1sen!2sng!4v1708511514463!5m2!1sen!2sng"
          width="1200"
          height="500"
          style={{ border: 1 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
