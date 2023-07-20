import { useState, useEffect, useRef } from 'react';

function Watch() {
    const hourRef = useRef(null);
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (valid) {
            const interval = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    let prevSeconds = prevTime.seconds;
                    let prevMinutes = prevTime.minutes;
                    let prevHours = prevTime.hours;

                    if (prevSeconds === 0) {
                        if (prevMinutes === 0 && prevHours === 0) {
                            clearInterval(interval);
                            setValid(false)
                            return prevTime; // Не изменяем значение, оставляем 00:00:00
                        } else {
                            prevMinutes = prevMinutes === 0 ? 59 : prevMinutes - 1;
                            prevSeconds = 59;
                            if (prevMinutes === 59 && prevHours > 0) {
                                prevHours--;
                            }
                        }
                    } else {
                        prevSeconds--;
                    }

                    return {
                        seconds: prevSeconds,
                        minutes: prevMinutes,
                        hours: prevHours,
                    };
                });
            }, 1000);
        }
    }, [valid]);

    const parseTime = (value) => {
        return value?.toString().padStart(2, '0');
    };

    function validate(secondsValue, minutesValue, hoursValue) {
        return new Promise((resolve, reject) => {
            if ((secondsValue < 60 && secondsValue > 0) && (minutesValue < 60 && minutesValue >= 0) && (hoursValue < 24 && hoursValue >= 0)) {
                setValid(true);
                setTimeRemaining({
                    hours: hoursValue,
                    minutes: minutesValue,
                    seconds: secondsValue,
                });
                return resolve('Таймер установлен');
            } else {
                setValid(false);
                return reject('Неверно установлены границы времени 23:59:59');
            }
        });
    }

    const startTimer = (event) => {
        event.preventDefault();

        const hoursValue = +hourRef.current.value;
        const minutesValue = +minutesRef.current.value;
        const secondsValue = +secondsRef.current.value;

        validate(secondsValue, minutesValue, hoursValue)
            .then((data) => {
                alert(data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <>
            <form>
                <div>
                    <label>Часы</label>
                    <input name="hour" ref={hourRef}></input>
                </div>
                <div>
                    <label>Минуты</label>
                    <input name="minutes" ref={minutesRef}></input>
                </div>
                <div>
                    <label>Секунды</label>
                    <input name="seconds" ref={secondsRef}></input>
                </div>

                <button type="submit" onClick={(event) => startTimer(event)}>
                    Start
                </button>
            </form>

            {valid ? (
                <span>
                    {`${parseTime(timeRemaining.hours)} 
                    : ${parseTime(timeRemaining.minutes)} 
                    : ${parseTime(timeRemaining.seconds)}`}
                </span>
            ) : (
                ''
            )}
        </>
    );
}

export default Watch;
