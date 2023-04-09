import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaUndo, FaRedo, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audio_url }) => {
    let src = audio_url || "https://assets.mixkit.co/active_storage/sfx/1714/1714-preview.mp3"
    const [wavesurfer, setWaveSurfer] = useState(null);
    const waveformRef = useRef(null);
    const [playingAudio, setPlayingAudio] = useState(false)
    const [playBackSpeed, setPlayBackSpeed] = useState(1);
    const playBackSpeedOptions = [0.5, 1, 1.2, 1.5, 2];

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

        // wavesurfer.on('ready', () => {
        //     waveformRef.current.addEventListener('click', e => {
        //         const xPos = e.clientX - waveformRef.current.getBoundingClientRect().left;
        //         const duration = wavesurfer.getDuration();
        //         const currentTime = xPos / waveformRef.current.offsetWidth * duration;
        //         wavesurfer.playPause(currentTime);
        //     });
        // });

        // Make sure the waveform is properly destroyed
        return () => wavesurfer.destroy();
    }, []);

    useEffect(() => {
        if (wavesurfer) {
            wavesurfer.load(src);

            wavesurfer.on("finish", function () {
                console.log('finish')
                setPlayingAudio(false)
            })

            wavesurfer.on("finish", function () {
                console.log('finish')
                setPlayingAudio(false)
            })

            wavesurfer.drawer.on('click', function (e) {
                console.log('clicked')
                wavesurfer.play()
                setPlayingAudio(true)
            })
        }
    }, [wavesurfer, src]);

    const seekAudioFifteenSeconds = (ahead) => {
        console.log('seekAudioFifteenSeconds')
        alert('todo')
    }

    const playAudio = () => {
        if (wavesurfer) {
            console.log('wavesurfer ', wavesurfer)
            wavesurfer.play()
            setPlayingAudio(true)
        }

    };

    const pauseAudio = () => {
        if (wavesurfer) {
            wavesurfer.pause()
            setPlayingAudio(false)
        }
    };

    const changePlaybackSpeed = () => {
        console.log('change play')
        alert('todo')
    }

    return (
        <>
            <div ref={waveformRef}></div>
            <div
                style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "10px"
                }}
            >
                <FaUndo
                    style={{ margin: "20px", cursor: "pointer" }}
                    onClick={() => seekAudioFifteenSeconds(false)}
                /> {" "}

                {playingAudio ? (
                    <FaPause
                        style={{ margin: "20px", cursor: "pointer" }}
                        onClick={() => (playingAudio ? pauseAudio() : playAudio())}
                    />
                ) : (
                    <FaPlay
                        style={{ margin: "20px", cursor: "pointer" }}
                        onClick={() => (playingAudio ? pauseAudio() : playAudio())}
                    />
                )}
                <span
                    style={{ margin: "20px", cursor: "pointer" }}
                    onClick={() => changePlaybackSpeed()}
                >
                    {playBackSpeedOptions[playBackSpeed]}x
                </span>
                <FaRedo
                    style={{ margin: "20px", cursor: "pointer" }}
                    onClick={() => seekAudioFifteenSeconds(true)}
                />
            </div>
        </>
    )
        ;
    // return (
    //     <WaveformContianer>
    //         <PlayButton onClick={this.handlePlay}>
    //             {isPlaying ? "Play" : "Pause"}
    //         </PlayButton>
    //         <Wave id="waveform" ref={waveformRef} />
    //     </WaveformContianer>
    // )
};

export default AudioPlayer;
