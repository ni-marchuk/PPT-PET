// src/pages/About.tsx
import React from 'react';

export default async function About() {
    const fullName = 'Марчук Никита Алексеевич';
    const resumeLink = 'https://hh.ru/resume/2f9bfeefff0f4216600039ed1f35314b313539';
    const contacts = {
        phone: '+7 986 774 61 73',
        email: 'marchuknikita@gmail.com',
        telegram: '@telepu31k',
    };

    return (
        <div className="h-[calc(100vh_-_64px)] bg-gray-50 flex  justify-center p-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">{fullName}</h1>

                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                            <a
                                href={resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600"
                            >
                                Смотреть резюме hh.ru
                            </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold">Телефон:</span>
                        <a href={`tel:${contacts.phone}`} className="text-gray-700 hover:text-blue-600">
                            {contacts.phone}
                        </a>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="font-semibold">Email:</span>
                        <a href={`mailto:${contacts.email}`} className="text-gray-700 hover:text-blue-600">
                            {contacts.email}
                        </a>
                    </div>

                    <div className="flex items-center space-x-2">
                        <span className="font-semibold">Telegram:</span>
                        <a href={`https://t.me/${contacts.telegram.replace('@','')}`} className="text-gray-700 hover:text-blue-600">
                            {contacts.telegram}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

