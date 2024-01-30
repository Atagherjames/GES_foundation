import styles from "./map.module.css";

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1219999296577!2d7.580669999999999!3d9.052635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e098efac0a49f%3A0x3a5719dd5d3360c5!2sGbagalape%20living%20faith%20nyanya!5e0!3m2!1sen!2sng!4v1706619373896!5m2!1sen!2sng"
          width="1200"
          height="500"
          style={{ border: 1 }}
          //   allowfullscreen="true"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
