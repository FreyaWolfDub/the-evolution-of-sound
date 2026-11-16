
const nodes = [

  
  // ==========================================================
  // EARLY SOUND RECORDING
  // ==========================================================

  {
    id:"scott",
    title:"ÉDOUARD-LÉON SCOTT DE MARTINVILLE",
    date:"1857",
    role:"Inventor / printing and scientific instrument specialist",

    question:
      "Could sound be made visible and permanently recorded?",

    idea:
      "Scott wanted to capture the physical vibrations of sound and translate them into a visible tracing.",

    did:
      "He invented the phonautograph. A flexible membrane responded to sound vibrations and moved a stylus, which traced the vibrations onto a soot-blackened surface, usually glass or paper.",

    matters:
      "The phonautograph made sound visible and left a permanent record for study. However, it could not reproduce sound. Its recordings were visual traces, not playable recordings.",

    works:
      "Phonautograph, patented in 1857. Scott's experiments began earlier, and surviving phonautograms include recordings made in 1860. These were digitally reconstructed as sound in 2008.",
    
    media: {
      image: "assets/Phonautograph.png"
    }
    },


  // ==========================================================
  // RECORDING AND PLAYBACK
  // ==========================================================

  {
    id:"edison",
    title:"THOMAS EDISON",
    date:"1877",
    role:"Inventor / engineer",

    question:
      "Could a machine record sound and then reproduce it?",

    idea:
      "Edison developed a machine that could capture sound vibrations mechanically and reproduce those vibrations through playback.",

    did:
      "His phonograph used a diaphragm and stylus to make indentations in tinfoil wrapped around a rotating cylinder. During playback, a stylus followed the recorded groove and caused the diaphragm to vibrate, reproducing the sound.",

    matters:
      "This was a crucial breakthrough: a machine could now both record and reproduce sound. It meant that voices and other sounds could be heard again after the original event had ended.",

    works:
      "Tinfoil phonograph, 1877. Later developments included improved wax-cylinder recording.",

    media: {
      image: "assets/original-edison-tin-foil-phonograph-invented-in-1877-WHAAE7.jpg"
    }
  },


  // ==========================================================
  // RECORDING MEDIA
  // ==========================================================

  {
    id:"bell-tainter",
    title:"CHICHESTER BELL & CHARLES TAINTER",
    date:"1886",
    role:"Inventors / engineers",

    question:
      "Could recording media be made more practical and durable?",

    idea:
      "They developed improvements to Edison's talking machine, particularly the recording medium and the mechanical system.",

    did:
      "Their Graphophone used a wax-based recording compound instead of Edison's fragile tinfoil. Sound vibrations were engraved into the cylinder surface, improving the recording process and making the machine more practical.",

    matters:
      "The recording medium matters. Replacing fragile tinfoil with a more practical material was an important step towards commercially usable sound recording and repeated playback.",

    works:
      "Graphophone, patented in 1886; developed through the Volta Laboratory.",

    media: {
      image: "assets/graphophone-invented-by-chichester-bell-and-sumner-tainter-the-recording-HHG74K.jpg"
    }
  },


  {
    id:"berliner",
    title:"ÉMILE BERLINER",
    date:"1887",
    role:"Inventor / engineer",

    question:
      "Could recorded sound be stored on a flat disc rather than a cylinder?",

    idea:
      "Berliner developed a recording and playback system using a flat disc with sound recorded as a laterally moving groove.",

    did:
      "He patented the Gramophone system in 1887. His disc-based approach also enabled copies to be manufactured from a master recording, helping make mass production practical.",

    matters:
      "The disc format offered a practical route to producing and distributing recordings in large numbers. Discs eventually became the dominant commercial format, replacing cylinders.",

    works:
      "Gramophone patent, 1887; public demonstration in 1888; commercial disc records developed during the 1890s.",

    media: {
      image: "assets/emile-berliner-gramophone.jpg"
    }
  },

  
  // ==========================================================
  // MAGNETIC RECORDING
  // ==========================================================

  {
    id:"poulsen",
    title:"VALDEMAR POULSEN",
    date:"1898",
    role:"Danish engineer / inventor",

    question:
      "Could sound be stored magnetically?",

    idea:
      "Poulsen developed a way to record sound by magnetising a moving metal medium.",

    did:
      "He invented the Telegraphone, which recorded sound onto moving steel wire using an electromagnet connected to a microphone. The changing electrical signal magnetised the wire, storing the sound information.",

    matters:
      "This was a major breakthrough in magnetic sound recording. Instead of physically cutting or embossing a groove, sound information could be stored through magnetic changes. The principle became fundamental to later magnetic recording technologies.",

    works:
      "Telegraphone, 1898; patent applications followed in 1899.",

    media: {
      image: "assets/Telegraphone.jpg"
    }
  },


  // ==========================================================
  // LIVE SOUND REINFORCEMENT
  // ==========================================================

  {
    id:"pridham-jensen",
    title:"EDWIN PRIDHAM & PETER JENSEN",
    date:"1915",
    role:"Electrical engineers / inventors",

    question:
      "Could electrical sound be amplified and projected to a large audience?",

    idea:
      "They worked on combining microphones, electronic amplification and loudspeakers into a practical sound-reinforcement system.",

    did:
      "Their Magnavox system combined microphones, amplification and loudspeakers to project sound over large distances. In 1915, they demonstrated the system at a public Christmas Eve event at San Francisco's Civic Center, amplifying live musical performances.",

    matters:
      "This was a landmark in the development of public-address systems. Sound could be captured, amplified and projected into a large space, allowing audiences to hear performances and speeches beyond the reach of the unaided human voice.",

    works:
      "Magnavox public demonstration, San Francisco Civic Center, Christmas Eve 1915.",

    media: {
      image: "assets/Magnavox-1926-speaker.jpg"
    }
  },


  // ==========================================================
  // ELECTRICAL RECORDING
  // ==========================================================

  {
    id:"electrical-system",
    title:"ELECTRICAL RECORDING SYSTEMS",
    date:"1920s",
    role:"Audio engineering development",

    question:
      "Could microphones and electronic circuits improve the quality and control of recording?",

    idea:
      "Mechanical recording systems were increasingly replaced by systems using microphones, electronic amplifiers and electrically driven recording equipment.",

    did:
      "An early commercially released electrical recording appeared in 1920. In 1925, Columbia and Victor successfully introduced electrical recording on a much wider commercial scale. Microphones replaced acoustic recording horns, while amplification and improved recording equipment expanded the available frequency range and control.",

    matters:
      "Recording became an electronic signal chain. Engineers could work with microphone placement, signal level, amplification, filtering and balance in ways that acoustic recording could not support. This transformed both recording quality and studio practice.",

    works:
      "British Unknown Warrior burial service recording, 1920; Columbia and Victor electrical recording systems, 1925.",

    media: {
      image: "assets/elec systems.jpg"
    }
  },


  {
    id:"pfleumer",
    title:"FRITZ PFLEUMER",
    date:"1928",
    role:"German engineer / inventor",

    question:
      "Could sound be recorded magnetically onto a flexible tape rather than wire?",

    idea:
      "Pfleumer developed a method of coating a flexible strip with magnetic material so that sound information could be stored magnetically.",

    did:
      "In 1928, he patented a magnetic recording medium using a thin strip coated with iron powder. His work attracted the attention of AEG, which later developed the Magnetophon magnetic tape recording system using improved tape materials.",

    matters:
      "Pfleumer's work helped establish the technological foundation for magnetic tape recording. It provided an important link between earlier magnetic wire recording and the tape-based recording revolution that followed.",

    works:
      "Magnetic sound-recording tape patent, 1928; subsequent collaboration and licensing with AEG.",

    media: {
      image: "assets/pfleumer4.jpg"
    }
  },


  {
    id:"blumlein",
    title:"ALAN BLUMLEIN",
    date:"1931",
    role:"Electrical engineer / inventor",

    question:
      "Could sound be recorded and reproduced with a convincing sense of direction and space?",

    idea:
      "Blumlein explored how two audio channels could reproduce the directional differences that allow listeners to perceive stereo sound.",

    did:
      "He filed his landmark British patent in December 1931, describing techniques for stereophonic recording and reproduction. His work included two-channel recording, directional microphones and methods for reproducing spatial sound through loudspeakers.",

    matters:
      "Blumlein's work established many of the principles behind modern stereo recording and reproduction. It transformed the goal of audio playback from simply reproducing sound to recreating a convincing spatial listening experience.",

    works:
      "British patent GB394325, filed 1931 and granted 1933; stereo recording and reproduction research at EMI.",

    media: {
      image: "assets/Blumlein.png"
    }
  },


  // ==========================================================
  // STEREOPHONIC RECORDING
  // ==========================================================

  {
    id:"bartlett-jones",
    title:"W. BARTLETT JONES",
    date:"1932",
    role:"Inventor / audio recording pioneer",

    question:
      "Could a recording preserve left and right spatial information?",

    idea:
      "Jones developed a method for recording two-channel stereophonic information in a disc groove.",

    did:
      "He received a patent for a stereophonic disc-recording method using a single stylus and groove to carry separate left and right channel information on the groove walls.",

    matters:
      "This was an important development in stereo disc recording. Instead of reproducing one combined channel, a recording could preserve differences between left and right, creating a sense of width and spatial positioning.",

    works:
      "Stereophonic disc-recording patent, 1932; commercial stereo LPs arrived in 1957.",

    media: {
      image: "assets/Stereo.jpg"
    }
  },

  
  // ==========================================================
  // MAGNETIC TAPE
  // ==========================================================

  {
    id:"magnetophon",
    title:"THE MAGNETOPHON",
    date:"1935",
    role:"Magnetic tape recording technology",

    question:
      "Could magnetic recording be developed into a practical high-quality audio system?",

    idea:
      "AEG engineers developed a practical magnetic tape recording system using a magnetised recording medium, building on earlier work by Fritz Pfleumer.",

    did:
      "The Magnetophon K1 was demonstrated publicly by AEG at the Berlin Radio Show in 1935. Working with BASF, AEG developed improved magnetic tape, and later Magnetophon models significantly improved recording quality.",

    matters:
      "Magnetic tape offered a new way to store and reproduce sound. It became the foundation for the post-war tape-recording revolution, transforming broadcasting, music production and studio recording.",

    works:
      "AEG Magnetophon K1, Berlin Radio Show, 1935; improved K4 model, late 1930s.",

    media: {
      image: "assets/magnetophon1935.jpg"
    }
  },

  {
    id:"ampex",
    title:"AMPEX",
    date:"1948",
    role:"Audio equipment manufacturer / engineering innovator",

    question:
      "Could magnetic tape become a reliable professional recording medium?",

    idea:
      "Ampex developed high-quality professional tape recorders and helped establish magnetic tape in broadcasting and music recording.",

    did:
      "Ampex demonstrated its Model 200 professional tape recorder in 1947, with the first production machines delivered in 1948. Tape allowed engineers to edit recordings by cutting and splicing, make copies and work more flexibly with recorded material.",

    matters:
      "Magnetic tape transformed professional recording. Editing, splicing and repeated playback made the recording process far more flexible, helping establish the modern recording studio.",

    works:
      "Ampex Model 200 demonstration, 1947; first production deliveries, 1948.",

    media: {
      image: "assets/Ampex.jpg"
    }
  },


  // ==========================================================
  // MULTICHANNEL / MULTITRACK
  // ==========================================================

  {
    id:"fantasound",
    title:"FANTASOUND",
    date:"1940",
    role:"Multichannel film sound system",

    question:
      "Could sound move beyond a single loudspeaker channel and become part of the cinema space?",

    idea:
      "Walt Disney's Fantasia project explored multichannel sound reproduction as part of the cinematic experience.",

    did:
      "Developed with RCA engineers, Fantasound used three main sound channels recorded onto separate optical tracks, alongside a control track. These fed multiple loudspeaker groups around the cinema, allowing sounds to be positioned and moved across the auditorium.",

    matters:
      "This demonstrated that sound reproduction could be designed around the physical space of an audience. It was a major early development in multichannel cinema sound and an important precursor to later surround-sound systems.",

    works:
      "Fantasia and the Fantasound system, 1940; technical account published by Disney engineers in 1941.",

    media: {
      image: "assets/Fantasound.jfif"
    }
  },

  {
    id:"les-paul",
    title:"LES PAUL",
    date:"1940s–1950s",
    role:"Musician / inventor / recording pioneer",

    question:
      "Could separate performances be recorded at different times and combined into one piece of music?",

    idea:
      "Paul experimented with recording layers of performances, playing back earlier material while recording new parts.",

    did:
      "From around 1949, he experimented with sound-on-sound recording using modified tape machines. He later worked with Ampex on the development of an eight-track recorder. Ampex engineer Ross Snyder developed the Sel-Sync concept, with engineers including Mort Fujii helping make synchronised multitrack recording practical. The first machine was delivered to Paul in 1955.",

    matters:
      "The recording studio became a place where music could be constructed in layers. Performers no longer needed to play every part together in one take. Overdubbing and synchronised multitrack recording opened up new creative possibilities.",

    works:
      "Sound-on-sound experiments, circa 1949 onward; Ampex Sel-Sync eight-track recorder, 1955.",

    media: {
      image: "assets/Les Paul.png"
    }
  },



 
  // ==========================================================
  // AUDIO ENGINEERING COMMUNITY
  // ==========================================================

 
  {
    id:"aes",
    title:"AUDIO ENGINEERING SOCIETY",
    date:"1948",
    role:"International professional audio society",

    question:
      "How can audio engineers share knowledge and advance the science and practice of sound?",

    idea:
      "As audio engineering became a specialised profession, engineers needed ways to exchange research, discuss technical developments and establish shared professional knowledge.",

    did:
      "The Audio Engineering Society was founded in February 1948. It organised conventions, encouraged the exchange of technical research and helped develop professional standards. Its own Journal began publication in 1953, following earlier AES papers published in Audio Engineering magazine.",

    matters:
      "Audio engineering is not simply the operation of equipment. It is an evolving field of research, experimentation, collaboration and technical development. The AES helped create a professional community through which that knowledge could be shared.",

    works:
      "Audio Engineering Society, founded 1948; Journal of the Audio Engineering Society, first published in 1953.",

    media: {
      image: "assets/aes journal.jpg"
    }
  },



  // ==========================================================
  // DIGITAL AUDIO
  // ==========================================================

  {
    id:"midi-daw",
    title:"MIDI & DIGITAL AUDIO WORKSTATIONS",
    date:"1970s–1990s",
    role:"Digital music and recording technology",

    question:
      "Could instruments, recording systems and computers communicate and work together?",

    idea:
      "Digital technology created two important developments: audio could be recorded and processed as digital data, while MIDI allowed musical instruments and computers to exchange performance and control information.",

    did:
      "Commercial digital audio recording emerged during the 1970s, with systems such as Soundstream. MIDI was introduced in 1983 as a standard for communication between electronic instruments and devices. During the 1980s and 1990s, computer-based recording and editing systems developed into the digital audio workstations used in modern production.",

    matters:
      "Music production increasingly moved into software. Audio recording and editing could be combined with MIDI sequencing, virtual instruments, processing, mixing and sound design. Importantly, MIDI itself does not contain recorded sound: it carries musical and control messages.",

    works:
      "Soundstream digital recording system, 1976; MIDI 1.0 specification, 1983; development of computer-based digital audio workstations.",

    media: {
      image: "assets/DAW.jpg"
    }
  },


  // ==========================================================
  // SPATIAL AUDIO
  // ==========================================================

  {
    id:"gerzon",
    title:"MICHAEL GERZON & AMBISONICS",
    date:"1970s onward",
    role:"Mathematician / audio engineer / spatial audio researcher",

    question:
      "Could we record and reproduce a complete sound field rather than just separate left and right channels?",

    idea:
      "Researchers explored ways to capture and reproduce the direction and spatial characteristics of sound around a listener. Michael Gerzon made major contributions to the mathematical foundations of Ambisonics, working alongside researchers including Peter Fellgett and Peter Craven.",

    did:
      "Gerzon developed important theoretical and practical aspects of Ambisonics, a system for encoding spatial sound information independently of a particular loudspeaker arrangement. This allowed recordings to be decoded for different speaker layouts. Research at Oxford and Reading, including the work of the Oxford University Tape Recording Society, contributed to its development.",

    matters:
      "The focus shifts from simply positioning sounds between speakers to capturing and reproducing the characteristics of a three-dimensional sound field, including direction and height.",

    works:
      "Oxford University Tape Recording Society experiments, late 1960s–early 1970s; Ambisonics research and publications, 1970s; Soundfield microphone development, 1975 onward.",

    media: {
      image: "assets/Gerzon.jpg"
    }
  },


  // ==========================================================
  // CONTEMPORARY LIVE AUDIO
  // ==========================================================

  {
    id:"networked-audio",
    title:"NETWORKED & IMMERSIVE AUDIO SYSTEMS",
    date:"1990s–today",
    role:"Contemporary audio engineering",

    question:
      "How can complex audio systems communicate, synchronise and deliver sound across large or immersive environments?",

    idea:
      "Digital networking and object-based audio developed as related but distinct approaches to increasingly complex audio systems. Networks allow audio to travel between devices, while immersive formats allow sound to be positioned and rendered throughout a listening environment.",

    did:
      "CobraNet introduced digital audio networking over Ethernet in 1996. Dante followed in 2006, allowing low-latency audio distribution over standard IP networks. The AES published its AES67 interoperability standard in 2013. Meanwhile, object-based immersive formats such as Dolby Atmos, introduced in 2012, enabled sound to be positioned and rendered across different loudspeaker configurations.",

    matters:
      "Audio engineering increasingly involves designing connected systems and entire sound environments, rather than simply recording or reproducing an isolated sound source. Engineers now work across networking, synchronisation, spatial rendering and immersive playback.",

    works:
      "CobraNet, 1996; Dante, 2006; Dolby Atmos, 2012; AES67 networked audio standard, 2013.",

    media: {
      image: "assets/dolby.jpg"
    }
  },


{
  id:"hyunkook-lee",
  title:"HYUNKOOK LEE",
  date:"2016–2019",
  role:"Audio researcher / microphone array designer",

  question:
    "How can we capture sound from all around us, while preserving an accurate sense of direction and space?",

  idea:
    "Lee developed the Equal Segment Microphone Array (ESMA), using psychoacoustic principles to investigate how microphone placement affects the accuracy of 360° spatial recording.",

  did:
    "His quadraphonic ESMA arrangement uses four cardioid microphones positioned in a horizontal square. Each adjacent microphone pair captures an equal 90° segment, avoiding overlap between their stereo recording angles. His 2019 research compared different microphone spacings and found that 50 cm produced more accurate localisation than the smaller spacings tested. ESMA-3D later extended the arrangement to capture height information.",

  matters:
    "The aim is not simply to record sound from different directions. It is to design the recording system around how listeners perceive direction and space, connecting microphone placement, psychoacoustics and immersive reproduction.",

  works:
    "Capturing and Rendering 360° VR Audio Using Cardioid Microphones, 2016; Capturing 360° Audio Using an Equal Segment Microphone Array (ESMA), 2019; ESMA-3D Immersive Soundscape Recordings, 2019.",

  media: {
      image: "assets/Photos-of-the-recording-venue-and-microphone-array-setup.png"
    }
},

{
  id:"auro-cx",
  title:"AURO-CX",
  date:"2023–2024",
  role:"Next-generation immersive audio codec",

  question:
    "How can we deliver complex immersive audio in a single stream, while adapting to different devices, bandwidths and listening environments?",

  idea:
    "AURO-Cx was developed as a scalable audio codec capable of carrying high-resolution immersive sound, with support for channel-based, object-based and scene-based audio.",

  did:
    "Designed for streaming and broadcast, AURO-Cx can support up to 24 channels, 16 audio objects and Ambisonics. Its scalable bitstream can contain different audio qualities and resolutions, allowing playback to adapt to the capabilities of the receiving device and available network bandwidth.",

  matters:
    "Immersive audio is not just about creating more channels. The technology must also transport spatial information efficiently, preserve audio quality and adapt to the way people actually receive and listen to sound.",

  works:
    "AURO-Cx Next Generation Audio Codec; scalable high-resolution audio streaming; channel-based, object-based and Ambisonics support.",

    media: {
      image: "assets/Immersive-headphone-812x602-1.jpg"
    }
},

  
{
  id:"stefan-bock",
  title:"STEFAN BOCK",
  date:"2009 onward",
  role:"Mastering engineer / immersive audio developer",

  question:
    "How can we deliver high-resolution and immersive sound to listeners without making playback complicated?",

  idea:
    "Bock developed Pure Audio Blu-ray to use the storage capacity of Blu-ray for high-resolution stereo and multichannel audio, while making playback simple and accessible without requiring a television screen.",

  did:
    "Working through msm-studios and in cooperation with the Norwegian label 2L (Lindberg Lyd), Bock developed the Pure Audio Blu-ray format in 2009. It allowed multiple high-resolution audio formats to be stored on a single disc, with simple screenless navigation. His later work has extended this approach into Pure Audio Streaming, bringing high-resolution immersive recordings directly to listeners.",

  matters:
    "Recording and encoding are only part of the process. The listener also needs a practical way to receive and experience the sound in the quality and format intended by its creators.",

  works:
    "Pure Audio Blu-ray, 2009; immersive mastering and production at msm-studios; Pure Audio Streaming and high-resolution immersive music delivery.",

  media: {
    image: "assets/msm-studios-stefanbock-4-650x477.jpg"
  }
},


];
