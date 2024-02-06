import styles from "./stack.module.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Stack() {
  const [stack, setStack] = useState([]);

  const serverURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const getStack = async () => {
      const response = await axios.get(serverURL);
      const responseData = await response.data;
      setStack(responseData);
    };
    getStack();
  }, []);
  return (
    <>
      <section className={styles.container}>
        {stack.map((x) => {
          return (
            <>
              <Link
                to={`/stack/${x._id}`}
                key={x._id}
                className={styles.stackContainer}
              >
                <div className={styles.imageContainer}>
                  <img src={x.image} className={styles.stackImage} />
                </div>

                <div className={styles.info}>
                  <p> {x.stack} </p>
                  <p> {x.title} </p>
                </div>
              </Link>
            </>
          );
        })}
      </section>
    </>
  );
}
