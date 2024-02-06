import styles from "./ai.module.css";
import NotFound from "../../components/NotFound/NotFound";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Icon } from '@iconify/react';

export default function AI() {
  const [currentAI, setCurrentAI] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();
  const aiId = params.id;

  const serverURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const getAI = async () => {
      const response = await axios.get(serverURL);
      const responseData = await response.data;

      const filterAI = responseData.filter((x) => {
        return x._id === aiId;
      });
      filterAI.length > 0 ? setCurrentAI(filterAI) : setNotFound(!notFound);
    };
    getAI();
  }, [params.id]);

  return (
    <>
      {notFound && <NotFound />}

      <main className={ styles.container }>
        {currentAI.map((x) => {
          return (
            <>
              <section className={ styles.imgContainer }>
                <img src={x.image}  className={ styles.aiImage } />
              </section>

              <section className={ styles.detailsContainer }>
              <h1> {x.stack} </h1>
              <h2> -{x.title} </h2>
              <h3> {x.description} </h3>


              <div className={ styles.linkContainer } >
                
                <div className={ styles.link }>
                    <h4> Dev: </h4>
                    <h5> {x.dev}  </h5>
                    
                </div>

                <Link to={`https:${x.url}`} className={ styles.link }>
                    <h4> Experience {x.stack}: </h4>
                    <Icon icon="fluent-mdl2:go" color="black" width="20" height="20" />
                </Link>

                <Link to={x.source} className={ styles.link }>
                    <h4> Stack Source: </h4>
                    <Icon icon="fluent-mdl2:go" color="black" width="20" height="20" />
                </Link>
              </div>

              </section>
            </>
          );
        })}
      </main>
    </>
  );
}
