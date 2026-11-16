// ============================================================
// INNOVATION IN SOUND DESIGN
// Unit 7 - New Timeline/How We Got Here
// TREE / GENEALOGY ENGINE
// ============================================================

const container = document.getElementById("timeline-container");


// ============================================================
// HOW DID WE LEARN TO CAPTURE SOUND?
// RECORDING / REPRODUCTION / LIVE SOUND / AUDIO ENGINEERING
// ============================================================

const tree = [

  // ===== THE BEGINNING =======================================

  { id:"before-recording", x:200, y:920, type:"context",
    title:"BEFORE RECORDING",
    date:"Before 1857",
    subtitle:"Sound is temporary. How do we preserve it?" },

  { id:"phonautograph-era", x:650, y:920, type:"context",
    title:"THE FIRST SOUND RECORD",
    date:"1857",
    subtitle:"Sound becomes visible and can be preserved" },

  { id:"playback-era", x:1100, y:920, type:"context",
    title:"THE PHONOGRAPH",
    date:"1877",
    subtitle:"Recording and playback meet" },

  { id:"commercial-recording", x:1550, y:920, type:"context",
    title:"RECORDING BECOMES REPRODUCIBLE",
    date:"1880s–1900s",
    subtitle:"Cylinders, discs and commercial recordings" },

  { id:"magnetic-wire", x:2000, y:920, type:"context",
    title:"MAGNETIC RECORDING",
    date:"1898 onward",
    subtitle:"Sound stored using magnetism" },

  // ===== LIVE SOUND ==========================================

  { id:"live-reinforcement", x:2450, y:920, type:"context",
    title:"AMPLIFYING THE WORLD",
    date:"1915 onward",
    subtitle:"Microphones, amplifiers and loudspeakers" },

  // ===== ELECTRICAL RECORDING ================================

  { id:"electrical-recording", x:2900, y:920, type:"context",
    title:"ELECTRICAL RECORDING",
    date:"1920–1925",
    subtitle:"The electronic audio signal chain" },

  // ===== STEREO ===============================================

  { id:"stereo", x:3350, y:920, type:"context",
    title:"STEREOPHONIC SOUND",
    date:"1931–1957",
    subtitle:"Recording and reproducing directional sound" },

  // ===== TAPE AND MULTITRACK =================================

  { id:"magnetic-tape", x:3800, y:920, type:"context",
    title:"MAGNETIC TAPE",
    date:"1928–1948",
    subtitle:"Magnetic recording becomes practical and editable" },

  { id:"multitrack", x:4250, y:920, type:"context",
    title:"MULTITRACK RECORDING",
    date:"1940s–1950s",
    subtitle:"Separate performances become layers" },

  // ===== DIGITAL ==============================================

  { id:"digital-audio", x:4700, y:920, type:"context",
    title:"THE DIGITAL REVOLUTION",
    date:"1970s–1990s",
    subtitle:"Audio becomes digital data" },

  // ===== SPATIAL ==============================================

  { id:"spatial-audio", x:5150, y:920, type:"context",
    title:"SPATIAL AUDIO",
    date:"1970s onward",
    subtitle:"Capturing and reproducing sound in space" },

  { id:"immersive-audio", x:5600, y:920, type:"context",
    title:"IMMERSIVE AUDIO",
    date:"1990s–today",
    subtitle:"Designing the entire sound environment" },

  // ===== CONTEMPORARY PRACTICE ================================

  { id:"today", x:6050, y:920, type:"context",
    title:"TODAY",
    date:"Contemporary practice",
    subtitle:"Research, experimentation and new techniques" },

  { id:"whats-next", x:6500, y:920, type:"context",
    title:"WHAT COMES NEXT?",
    date:"The future",
    subtitle:"What could we invent?" },


  // ===== PEOPLE, INVENTIONS & ENGINEERING BRANCHES ==========

  { id:"scott", x:650, y:580, type:"node" },

  { id:"edison", x:1100, y:1260, type:"node" },

  { id:"bell-tainter", x:1550, y:580, type:"node" },
  { id:"berliner", x:1550, y:1260, type:"node" },

  { id:"poulsen", x:2000, y:580, type:"node" },

  { id:"pridham-jensen", x:2450, y:1260, type:"node" },

  { id:"electrical-system", x:2900, y:580, type:"node" },

  { id:"blumlein", x:3350, y:580, type:"node" },
  { id:"bartlett-jones", x:3350, y:1260, type:"node" },

  { id:"pfleumer", x:3800, y:300, type:"node" },
  { id:"magnetophon", x:3800, y:580, type:"node" },
  { id:"ampex", x:3800, y:1260, type:"node" },

  { id:"aes", x:2900, y:300, type:"node" },
  { id:"fantasound", x:4250, y:580, type:"node" },
  { id:"les-paul", x:4250, y:1260, type:"node" },

  { id:"midi-daw", x:4700, y:1260, type:"node" },

  { id:"gerzon", x:5150, y:580, type:"node" },

  { id:"networked-audio", x:5600, y:1260, type:"node" },

// ===== CONTEMPORARY AUDIO ENGINEERING ======================

  { id:"hyunkook-lee", x:6050, y:580, type:"node" },

  { id:"auro-cx", x:6500, y:580, type:"node" },

  { id:"stefan-bock", x:6050, y:1260, type:"node" }


];


// ------------------------------------------------------------
// CONCEPTUAL TRUNK
// ------------------------------------------------------------

const trunk = [
  { x:200, y:920 },
  { x:650, y:920 },
  { x:1100, y:920 },
  { x:1550, y:920 },
  { x:2000, y:920 },
  { x:2450, y:920 },
  { x:2900, y:920 },
  { x:3350, y:920 },
  { x:3800, y:920 },
  { x:4250, y:920 },
  { x:4700, y:920 },
  { x:5150, y:920 },
  { x:5600, y:920 },
  { x:6050, y:920 },
  { x:6500, y:920 }
];




// ------------------------------------------------------------
// BRANCHES
// ------------------------------------------------------------

const branches = [

  // FIRST RECORDING

  { from:"before-recording",
    to:"phonautograph-era",
    relation:"conceptual" },

  { from:"phonautograph-era",
    to:"scott",
    relation:"direct" },

  // RECORDING AND PLAYBACK

  { from:"phonautograph-era",
    to:"playback-era",
    relation:"conceptual" },

  { from:"playback-era",
    to:"edison",
    relation:"direct" },

  // RECORDING MEDIA

  { from:"commercial-recording",
    to:"bell-tainter",
    relation:"direct" },

  { from:"commercial-recording",
    to:"berliner",
    relation:"direct" },

  // MAGNETIC RECORDING

  { from:"magnetic-wire",
    to:"poulsen",
    relation:"direct" },

  // LIVE SOUND

  { from:"live-reinforcement",
    to:"pridham-jensen",
    relation:"direct" },

  // ELECTRICAL RECORDING

  { from:"electrical-recording",
    to:"electrical-system",
    relation:"conceptual" },

  { from:"electrical-recording",
    to:"aes",
    relation:"conceptual" },

  // STEREO

  { from:"stereo",
    to:"blumlein",
    relation:"direct" },

  { from:"stereo",
    to:"bartlett-jones",
    relation:"direct" },

  // MAGNETIC TAPE

  { from:"magnetic-tape",
    to:"pfleumer",
    relation:"direct" },

  { from:"magnetic-tape",
    to:"magnetophon",
    relation:"direct" },

  { from:"magnetic-tape",
    to:"ampex",
    relation:"direct" },

  // MULTITRACK AND MULTICHANNEL

  { from:"multitrack",
    to:"fantasound",
    relation:"parallel" },

  { from:"multitrack",
    to:"les-paul",
    relation:"direct" },

  // DIGITAL AUDIO

  { from:"digital-audio",
    to:"midi-daw",
    relation:"conceptual" },

  // SPATIAL AUDIO

  { from:"spatial-audio",
    to:"gerzon",
    relation:"direct" },

  // CONTEMPORARY AUDIO

 { from:"immersive-audio",
  to:"networked-audio",
  relation:"conceptual" },

  // CONTEMPORARY IMMERSIVE AUDIO

  { from:"today",
    to:"hyunkook-lee",
    relation:"parallel" },

  { from:"today",
    to:"auro-cx",
    relation:"parallel" },

  { from:"today",
    to:"stefan-bock",
    relation:"parallel" },

];


// ------------------------------------------------------------
// CREATE CANVAS
// ------------------------------------------------------------

const canvas = document.createElement("div");
canvas.id = "genealogy-canvas";

const svg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);

svg.id = "connections";
svg.setAttribute("width", "7500");
svg.setAttribute("height", "1900");
svg.setAttribute("viewBox", "0 0 7500 1900");

canvas.appendChild(svg);

const nodeLayer = document.createElement("div");
nodeLayer.id = "node-layer";

canvas.appendChild(nodeLayer);

container.innerHTML = "";
container.appendChild(canvas);


// ------------------------------------------------------------
// SVG HELPERS
// ------------------------------------------------------------

function createPath(className, d) {

  const path = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  path.setAttribute("d", d);
  path.setAttribute("class", className);

  svg.appendChild(path);

  return path;
}


// ------------------------------------------------------------
// DRAW MAIN TRUNK
// ------------------------------------------------------------

let trunkPath = `M ${trunk[0].x} ${trunk[0].y}`;

for (let i = 1; i < trunk.length; i++) {

  trunkPath += ` L ${trunk[i].x} ${trunk[i].y}`;

}

createPath("connection connection-direct", trunkPath);


// ------------------------------------------------------------
// NODE LOOKUP
// ------------------------------------------------------------

const positions = {};

tree.forEach(item => {
  positions[item.id] = item;
});


// ------------------------------------------------------------
// DRAW TREE BRANCHES
// ------------------------------------------------------------
//
// Branches use a smooth curve rather than random giant arcs.
// They visibly originate from the main trunk.
// ------------------------------------------------------------

branches.forEach(branch => {

  const from = positions[branch.from];
  const to = positions[branch.to];

  if (!from || !to) return;

  const startX = from.x;
  const startY = from.y;

  const endX = to.x;
  const endY = to.y;

  const distance = Math.abs(endX - startX);

  const curve = Math.max(60, distance * 0.35);

  const direction =
    endY < startY ? -1 : 1;

  const controlY =
    startY + (Math.abs(endY - startY) * 0.45 * direction);

  const d = `
    M ${startX} ${startY}
    C
      ${startX + curve} ${controlY},
      ${endX - curve} ${endY},
      ${endX} ${endY}
  `;

  let className = "connection";

  if (branch.relation === "direct") {
    className += " connection-direct";
  }

  if (branch.relation === "influence") {
    className += " connection-influence";
  }

  if (branch.relation === "parallel") {
    className += " connection-parallel";
  }

  if (branch.relation === "conceptual") {
    className += " connection-context";
  }

  createPath(className, d);

});


// ------------------------------------------------------------
// ADD TRUNK JUNCTION MARKERS
// ------------------------------------------------------------

trunk.forEach(point => {

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  circle.setAttribute("cx", point.x);
  circle.setAttribute("cy", point.y);
  circle.setAttribute("r", "5");
  circle.setAttribute("class", "trunk-junction");

  svg.appendChild(circle);

});


// ------------------------------------------------------------
// CREATE HTML NODES
// ------------------------------------------------------------

tree.forEach(item => {

  if (item.type === "context") {

    createContextNode(item);

  } else {

    createPersonNode(item);

  }

});


// ------------------------------------------------------------
// CONTEXT NODE
// ------------------------------------------------------------

function createContextNode(item) {

  const element = document.createElement("div");

  element.className = "context-node";

  element.style.left = `${item.x - 120}px`;
  element.style.top = `${item.y - 35}px`;

  element.innerHTML = `
  <span class="context-title">
    ${item.title}
  </span>
  <span class="context-date">
    ${item.date || ""}
  </span>
  <span class="context-subtitle">
    ${item.subtitle}
  </span>
`;

  nodeLayer.appendChild(element);

}


// ------------------------------------------------------------
// PERSON / INVENTION NODE
// ------------------------------------------------------------

function createPersonNode(item) {

  const data = nodes.find(node => node.id === item.id);

  if (!data) {
    console.warn(`No node data found for: ${item.id}`);
    return;
  }

  const wrapper = document.createElement("div");

  wrapper.className = "genealogy-node";

  wrapper.style.left = `${item.x - 120}px`;
  wrapper.style.top = `${item.y - 45}px`;

  const button = document.createElement("button");

  button.className = "genealogy-button";

  button.innerHTML = `
    <span class="genealogy-dot"></span>

    <span class="genealogy-text">

      <span class="genealogy-title">
        ${data.title}
      </span>

      <span class="genealogy-date">
        ${data.date}
      </span>

    </span>
  `;

  button.addEventListener("click", () => {

    openNode(data);

  });

  wrapper.appendChild(button);

  nodeLayer.appendChild(wrapper);

}


// ------------------------------------------------------------
// MODAL
// ------------------------------------------------------------

const modal = document.getElementById("node-modal");

const closeButton =
  document.getElementById("close-modal");

const backdrop =
  document.querySelector(".modal-backdrop");


function openNode(data) {

  document.getElementById("node-date").textContent =
    data.date || "";

  document.getElementById("node-title").textContent =
    data.title || "";

  document.getElementById("node-role").textContent =
    data.role || "";

  document.getElementById("node-question").textContent =
    data.question || "";

  document.getElementById("node-idea").textContent =
    data.idea || "";

  document.getElementById("node-did").textContent =
    data.did || "";

  document.getElementById("node-matters").textContent =
    data.matters || "";

  document.getElementById("node-works").textContent =
  data.works || "";

const mediaContainer =
  document.getElementById("node-media");

mediaContainer.innerHTML = "";

if (data.media) {

  if (data.media.video) {

    const iframe = document.createElement("iframe");

    iframe.className = "media-video";
    iframe.src = data.media.video;
    iframe.title = data.title || "Video";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    mediaContainer.appendChild(iframe);

  } else if (data.media.image) {

    const image = document.createElement("img");

    image.className = "media-image";
    image.src = data.media.image;
    image.alt = data.title || "";

    mediaContainer.appendChild(image);

  }

}

modal.classList.remove("hidden");

}


function closeModal() {

  modal.classList.add("hidden");

}


closeButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


// ------------------------------------------------------------
// INITIAL POSITION
// ------------------------------------------------------------

container.scrollLeft = 0;
container.scrollTop = 250; 


// ------------------------------------------------------------
// WHEEL ZOOM
// ------------------------------------------------------------

let zoom = 0.67;


// Apply initial timeline scale
canvas.style.transform =
  `scale(${zoom})`;

canvas.style.transformOrigin =
  "top left";

canvas.style.width =
  `${7800 * zoom}px`;

canvas.style.height =
  `${1900 * zoom}px`;


container.addEventListener(
  "wheel",
  event => {

    if (!event.ctrlKey) return;

    event.preventDefault();

    const oldZoom = zoom;

    zoom += event.deltaY < 0
      ? 0.1
      : -0.1;

    zoom = Math.max(
      0.55,
      Math.min(1.4, zoom)
    );

    if (zoom === oldZoom) return;

    canvas.style.transform =
      `scale(${zoom})`;

    canvas.style.width =
      `${7800 * zoom}px`;

    canvas.style.height =
      `${1900 * zoom}px`;

  },
  { passive: false }
);