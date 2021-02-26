
import { match } from 'assert';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {

     const { minutes,
          seconds,
          hasFinished,
          isActive,
          resetCountdown,
          startCountdown,
     } = useContext(CountdownContext)



     const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
     const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');



     return (
          <div>
               <div className={styles.countdownContainer}>
                    <div>
                         <span>{minuteLeft}</span>
                         <span>{minuteRight}</span>
                    </div>
                    <span>:</span>
                    <div>
                         <span>{secondLeft}</span>
                         <span>{secondRight}</span>
                    </div>
               </div>

               {hasFinished ? (
                    <button
                         disabled
                         className={styles.countdownButton} /* { `${} ${}` } => concatena duas istrings*/
                    >
                         Ciclo encerrado
                    </button>
               ) : (
                         <>
                              {isActive ? (
                                   <button
                                        type="button"
                                        className={` ${styles.countdownButton} ${styles.countdownButtonActive}`}/* { `${} ${}` } => concatena duas istrings*/
                                        onClick={resetCountdown}
                                   >

                                        Abandonar ciclo
                                   </button>
                              ) : (
                                        <button
                                             type="button"
                                             className={styles.countdownButton}
                                             onClick={startCountdown}
                                        >

                                             iniciar um ciclo
                                        </button>
                                   )}
                         </>

                    )}
          </div>
     );
}