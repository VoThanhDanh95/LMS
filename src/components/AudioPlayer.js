import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const AudioPlayer = ({ audio_link }) => {
    let src = audio_link || "https://assets.mixkit.co/active_storage/sfx/1714/1714-preview.mp3"
    const [wavesurfer, setWaveSurfer] = useState(null);
    const waveformRef = useRef(null);

    useEffect(() => {
        const options = {
            container: waveformRef.current,
            waveColor: "violet",
            progressColor: "purple",
            cursorColor: "navy",
            barWidth: 2,
            barRadius: 3,
            responsive: true,
            normalize: true,
            height: 150,
            // Add any other WaveSurfer options here
        };

        const wavesurfer = WaveSurfer.create(options);
        setWaveSurfer(wavesurfer);

        // Make sure the waveform is properly destroyed
        return () => wavesurfer.destroy();
    }, []);

    useEffect(() => {
        if (wavesurfer) {
            wavesurfer.load(src);
        }
    }, [wavesurfer, src]);

    return <div ref={waveformRef}></div>;
};

export default AudioPlayer;
