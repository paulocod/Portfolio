import Link from 'next/link';
import { useState, useEffect } from 'react';

const Switcher = () => {
    const storedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('currentLocale') || 'en' : 'en';
    const storedIsOn = typeof localStorage !== 'undefined' ? localStorage.getItem('isOn') === 'true' : false;

    const [currentLocale, setCurrentLocale] = useState(storedLocale);
    const [isOn, setIsOn] = useState(storedIsOn);

    useEffect(() => {
        localStorage.setItem('currentLocale', currentLocale);
    }, [currentLocale]);

    useEffect(() => {
        localStorage.setItem('isOn', String(isOn));
    }, [isOn]);

    const toggleSwitch = () => {
        setCurrentLocale((prevLocale) => (prevLocale === 'en' ? 'pt' : 'en'));
        setIsOn((prev) => !prev);
    };

    return (
        <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isOn ? 'bg-orange-500' : 'bg-black'}`}>
            <Link href={`/${currentLocale}`}>
                <button
                    onClick={toggleSwitch}
                    className={`absolute left-0 top-0 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-full bg-white' : 'bg-orange-500'
                        }`}
                />
            </Link>
        </div>
    );
};

export default Switcher;
