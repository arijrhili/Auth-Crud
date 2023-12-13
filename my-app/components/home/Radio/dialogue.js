import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Image from 'next/image';

const audioData = [
  {
    id: 1,
    title: 'DT1 et hypoglycémies',
    audio: '/audio/audio1.mp3',
  },
  {
    id: 2,
    title: 'Solutions connectées pour stylo à insuline    ',
    audio: '/audio/audio2.mp3',
  },
  {
    id: 2,
    title: 'Solutions connectées pour stylo à insuline    ',
    audio: '/audio/audio2.mp3',
  },
  // Add more entries for additional audio files
];

const sharedImagePath = '/img/podcast.avif'; // Replace with your shared image path

const Dialogue = () => {
  return (
    <div>
         <h2 className="font-medium text-2xl pb-4 text-center relative p-8 mb-4">
        <span className="border-b-4 border-red-500 font-bold inline-block">PODCASTS (PARTENARIAT)</span>
      </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {audioData.map((audio) => (
        <div key={audio.id} className="rounded-md shadow-md flex flex-col items-center">
          <Image
            src={sharedImagePath}
            alt={`Podcast Thumbnail - ${audio.title}`}
            width={100}
            height={100}
            className="rounded-t-md"
          />
          <div className="p-4 w-full">
            <h2 className="font-medium text-lg mb-2 text-center">{audio.title}</h2>
            <ReactAudioPlayer
              className="w-full"
              src={audio.audio}
              autoPlay={false}
              controls
              loop={false}
            />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Dialogue;
