import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
     minutes: number;
     seconds: number;
     hasFinished: boolean;
     isActive: boolean;
     startCountdown: () => void;
     resetCountdown: () => void;

}
interface CountdownProvideProps {
     children: ReactNode;

}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProvideProps) {

     const { startNewChallenge } = useContext(ChallengesContext);

     const [time, setTime] = useState(1 * 10);
     const [isActive, setIsActive] = useState(false);
     const [hasFinished, sethasFinished] = useState(false);

     const minutes = Math.floor(time / 60);
     const seconds = time % 60;
     function startCountdown() {
          setIsActive(true);

     }
     function resetCountdown() {
          clearTimeout(countdownTimeout);
          setIsActive(false);
          sethasFinished(false);
          setTime(1 * 6);

     }


     useEffect(() => {
          if (isActive && time > 0) {
               countdownTimeout = setTimeout(() => {
                    setTime(time - 1);
               }, 1000);
          } else if (isActive && time === 0) {
               sethasFinished(true);
               setIsActive(false);
               startNewChallenge();

          }
     }, [isActive, time])

     return (
          <CountdownContext.Provider value={{
               minutes,
               seconds,
               hasFinished,
               isActive,
               startCountdown,
               resetCountdown,
          }} >
               {children}
          </CountdownContext.Provider>
     )
}