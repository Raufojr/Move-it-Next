import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
     const { level } = useContext(ChallengesContext);

     return (


          <div className={styles.profileContainer}>
               <img src="https://github.com/Raufojr.png" alt="Raufo" />
               <div>
                    <strong>Raufo Jr</strong>
                    <p>
                         <img src="icons/level.svg" alt="Level" />
                       Level  {level}</p>
               </div>

          </div>
     );
}