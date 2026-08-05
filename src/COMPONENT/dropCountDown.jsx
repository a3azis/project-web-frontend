import { useState, useEffect } from "react";

export default function DropCountDown({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({ day: 0, hours: 0, minutes: 0, second: 0 });
    const [isDropped, setIsDropped] = useState(false);

    useEffect(() => {
        if (!targetDate) return;

        const formattadDate = typeof targetDate === "string"
            ? targetDate.replace(/-/g, '/').replace('T', ' ')
            : targetDate;

        const calculateTime = () => {
            const targetTime = new Date(formattadDate).getTime();

            if (isNaN(targetTime)) {
                return { day: 0, hours: 0, minutes: 0, second: 0 };
            }

            const difference = targetTime - Date.now();

            if (difference <= 0) {
                setIsDropped(true);
                return { day: 0, hours: 0, minutes: 0, second: 0 };
            }

            return {
                day: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                second: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTime());

        const interval = setInterval(() => {
            setTimeLeft(calculateTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (isDropped) {
        return <div className="text-xl font-bold text-green-600 text-center">Drop sekarang telah di buka!</div>;
    }

    return (
        <div className="flex gap-6 justify-center items-center text-center font-mono text-3xl font-bold">
            <div className="flex flex-col">
                <span>{String(timeLeft.day).padStart(2, '0')}</span>
                <span className="text-xs font-normal text-gray-500 uppercase mt-1">Hari</span>
            </div>
            <span className="text-gray-400 bottom-2 relative">:</span>
            <div className="flex flex-col">
                <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs font-normal text-gray-500 uppercase mt-1">Jam</span>
            </div>
            <span className="text-gray-400 bottom-2 relative">:</span>
            <div className="flex flex-col">
                <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs font-normal text-gray-500 uppercase mt-1">Menit</span>
            </div>
            <span className="text-gray-400 bottom-2 relative">:</span>
            <div className="flex flex-col">
                <span>{String(timeLeft.second).padStart(2, '0')}</span>
                <span className="text-xs font-normal text-gray-500 uppercase mt-1">Detik</span>
            </div>
        </div>
    );
}
