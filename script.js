// 화면 순서: 인트로 → 섹션 1 → 섹션 2 → 섹션 3 → 섹션 4 → 섹션 5 → 섹션 6

// ===== 인트로 =====
const scene = document.querySelector(".scene");
const tvContent = document.querySelector(".tv-content");
const story = document.querySelector(".story");
const storyImg = story.querySelector("img");
const storyVideo = story.querySelector("video");
const tvRoll = document.querySelector(".tv-roll");
const scanline = document.querySelector(".scanline");
const rgbTint = document.querySelector(".rgb");
const powerLine = document.querySelector(".power-line");
const powerFlash = document.querySelector(".power-flash");
const fullscreenNoise = document.querySelector(".fullscreen-noise");
const channelOsd = document.querySelector(".channel-osd");
const libraryDesc = document.querySelector(".library-desc");
const libraryCopy = document.querySelectorAll(".library-copy");
const libraryLogo = document.querySelector(".library-logo");
const libraryClass = document.querySelector(".library-class");
const librarySlot = document.querySelector(".library-slot");
const roomBg = document.querySelector(".room-bg");
const remote = document.querySelector(".remote");
const wheelHint = document.querySelector(".wheel-hint");
const remoteNext = document.querySelector(".remote-next");

// ===== 섹션 1 =====
const section01 = document.querySelector(".section01");
const sectionCopy = document.querySelectorAll(".section-intro h2, .section-intro p");
const sectionKorea = document.querySelector(".section-korea");
const sectionCont = document.querySelector(".section-cont");
const sectionListening = document.querySelector(".section-listening");
const yearInner = document.querySelector(".year-inner");
const yearNum = document.querySelector(".year-num");
const yearCopy = document.querySelector(".year-copy");

// ===== 섹션 2 =====
const section02 = document.querySelector(".section02");
const philosophy = document.querySelector(".philosophy");
const philosophyWheel = document.querySelector(".philosophy-wheel");
const philosophyTitle = document.querySelector(".philosophy-title");
const [philosophyStage, philosophyEarly, philosophyFun] = document.querySelectorAll(".philosophy-stage");

// ===== 섹션 3 =====
const section03 = document.querySelector(".section03");
const storiesStage = document.querySelector(".stories");
const storyWall = document.querySelector(".story-wall");
const storyBubbles = document.querySelectorAll(".bubble");
const storyCard = document.querySelector(".story-card");
const storyDim = document.querySelector(".story-dim");
const storyPhoto = document.querySelector(".story-photo");
const storyMeta = document.querySelector(".story-meta");
const interviewVideo = document.querySelector(".story-video video");
const interviewSource = interviewVideo.querySelector("source");
const storyCopy = document.querySelector(".story-copy");
const storyClose = document.querySelector(".story-close");

// ===== 섹션 4 =====
const section04 = document.querySelector(".section04");

// ===== 섹션 5 =====
const section05 = document.querySelector(".section05");
const section05Gallery = section05.querySelector(".section05-gallery");
const section05Copy = section05.querySelector(".section-count");
const section05Hint = section05.querySelector(".section-count > span");
const section05Chart = section05.querySelector(".section05-chart");
const section05Levels = section05.querySelector(".section05-levels");
const section05Segs = [...section05.querySelectorAll(".section05-seg")];
const section05Topics = section05.querySelector(".section05-topics");
const section05SlotRoot = section05Topics.querySelector(".section05-topics-slots");
const SECTION05_SLOT_COUNT = 5;
section05SlotRoot.replaceChildren(...Array.from({ length: SECTION05_SLOT_COUNT }, () => {
    const slot = document.createElement("div");
    slot.className = "section05-topics-slot";
    const frame = document.createElement("div");
    frame.className = "section05-slot-frame";
    const label = document.createElement("p");
    label.className = "js-topic-in";
    slot.append(frame, label);
    return slot;
}));
let section05TopicButtons = [];
const section05TopicName = section05Topics.querySelector(".section05-topics-copy h3");
const section05TopicCount = section05Topics.querySelector(".section05-topics-count b");
const section05TopicDesc = section05Topics.querySelector(".section05-topics-desc");
const section05TopicLabels = [...section05Topics.querySelectorAll(".section05-topics-slot p")];
const section05TopicReveals = [...section05Topics.querySelectorAll(".js-topic-in")];
let section05Thumbs = [];
let section05Cast = [];
let section05TopicIndex = 0;
let section05TopicOffset = 0;

// 섹션 4. 공책
const noteBook = document.querySelector(".user-note-book");
const noteContent = document.querySelector(".user-note-content");
const [notePageLeft, notePageRight] = noteContent.querySelectorAll(".user-note-page");
const noteMeta = document.querySelector(".user-note-meta");
const noteTitle = document.querySelector(".user-note-story-title");
const notePhoto = document.querySelector(".user-note-photo");
const noteBody = document.querySelector(".user-note-story-body");
const noteLink = document.querySelector(".user-note-story-link");
const noteCurrent = document.querySelector(".user-note-current");
const noteTotal = document.querySelector(".user-note-total");
const notePrev = document.querySelector(".user-note-prev");
const noteNext = document.querySelector(".user-note-next");
const noteCorner = document.querySelector(".user-note-corner");
const noteClose = document.querySelector(".user-note-close");
const noteTabList = document.querySelector(".user-note-tabs");
let noteTabs = [];
const noteFlipRoot = document.querySelector(".user-note-flip-pages");
const noteHold = noteFlipRoot.querySelector(".user-note-flip-hold");
const noteFlipSample = noteFlipRoot.querySelector(".user-note-flip-page");
const NOTE_FLIP_COUNT = 4;
while (noteFlipRoot.querySelectorAll(".user-note-flip-page").length < NOTE_FLIP_COUNT) {
    noteFlipRoot.append(noteFlipSample.cloneNode(true));
}
const noteFlips = noteFlipRoot.querySelectorAll(".user-note-flip-page");
const noteCover = document.querySelector(".user-note-cover");
const noteOpen = document.querySelector(".user-note-open");
const notePencil = document.querySelector(".user-note-pencil");
const noteGuide = document.querySelector(".user-note-guide");

// ===== 섹션 6 =====
const section06 = document.querySelector(".section06");
const songVinyl = document.querySelector(".song-vinyl");
const songSleeve = document.querySelector(".song-sleeve");
const songVinylLabel = document.querySelector(".song-vinyl-label");
const songSleeveName = document.querySelector(".song-sleeve-copy b");
const songSleeveCount = document.querySelector(".song-sleeve-copy span");
const songRoot = document.querySelector(".song");
const songHead = document.querySelector(".song-head");
const songBody = document.querySelector(".song-body");
const songSide = document.querySelector(".song-side");
const songMain = document.querySelector(".song-main");
const songFoot = [...document.querySelectorAll(".song-notes, .song-actions")];
const songIntroNotes = [...document.querySelectorAll(".song-intro-note")];

// ===== 인트로 · 노이즈 =====
const noiseCanvas = document.querySelector(".noise");
const fullNoiseCanvas = document.querySelector(".full-noise-canvas");
const noiseCtx = noiseCanvas.getContext("2d", { alpha: false });
const fullNoiseCtx = fullNoiseCanvas.getContext("2d", { alpha: false });

let timeline = null;

// 없는 파일은 로드 실패하면 자동으로 빠짐
const channelSources = [
    "./images/thum-img-cont01.png",
    "./images/thum-img-cont02.png",
    "./images/thum-img-cont03.png",
    "./images/thum-img-cont04.png",
    "./images/thum-img-cont05.png",
    "./images/thum-img-cont06.png"
];

const channelVideos = {
    "./images/thum-img-cont02.png": "https://cdn.littlefox.co.kr/contents_5/series/movie/720/FS0065/459a72b2899e40782967cd531b208806.mp4?_=1627972941",
    "./images/thum-img-cont03.png": "https://cdn.littlefox.co.kr/contents_5/series/movie/720/FS0067/9366c74a9771b7a44f38ea6a1c1c5219.mp4?_=1610328217",
    "./images/thum-img-cont04.png": "https://cdn.littlefox.co.kr/contents_5/series/movie/720/FS0177/c53500d4434414c01e1a48fd418b0786.mp4?_=1788766585",
    "./images/thum-img-cont05.png": "https://cdn.littlefox.co.kr/contents_5/series/movie/720/FS0173/e6b7184bd360bcc864b7f15a25fdbab2.mp4?_=1758606142"
};

const clipSeconds = 10;
let clipTimer = null;

let channels = [channelSources[0]];
let currentChannel = 0;
let channelTl = null;
let introDone = false;
let switching = false;
let onSection01 = false;
// section01 단계: 0 로고만 크게, 1 첫 문구, 2 한국 문구, 3 리스닝, 4 리딩, 5 스피킹, 6 라이팅, 7 2000년, 8 2020년까지 카운트
let sectionStep = 0;
let onSection02 = false;
let onSection03 = false;
let section03Tl = null;
let onSection04 = false;
let section04Tl = null;
let onSection05 = false;
let onSection06 = false;
let section06Tl = null;
// section06 단계: 0 음표, 1 가운데 제목, 2 큰 비율, 3 레코드
let section06Step = 0;
let songIndex = 0;
let songOut = false;
// 섹션 6. 동요 주제는 여기서만 만든다
const songs = [
    { name: "세계 유명 동요", count: 131, image: "./images/song-thumb1.png" },
    { name: "율동 동요", count: 13, image: "./images/song-thumb2.png" },
    { name: "리틀팍스 동화 주제가", label: "리틀팍스<br>동화 주제가", count: 16, image: "./images/song-thumb3.png" },
    { name: "파닉스 송", count: 53, image: "./images/song-thumb4.png" },
    { name: "기초 학습", count: 37, image: "./images/song-thumb5.png" },
    { name: "사이트 워드 송", count: 20, image: "./images/song-thumb6.png" },
    { name: "생활 영어", count: 72, image: "./images/song-thumb7.png" },
    { name: "자장가", count: 16, image: "./images/song-thumb8.png" },
    { name: "크리스마스 & 핼러윈", label: "크리스마스<br>& 핼러윈", count: 34, image: "./images/song-thumb9.png" }
];
const songTopics = document.querySelector(".song-topics");
songTopics.innerHTML = songs.map((song, index) => `
    <button type="button" class="song-topic${index ? "" : " is-active"}" aria-pressed="${index ? "false" : "true"}">
        <img src="${song.image}" alt="">
        <span>${song.label || song.name}</span>
        <b>${song.count}곡</b>
    </button>
`).join("");
const songTopicButtons = [...songTopics.children];
let section05Tl = null;
let section05Step = 0;
let noteTl = null;
let noteIndex = 0;
// section02 단계: 0 큰 제목, 1 듣기부터, 2 가능한 일찍, 3 쉽고 재미있게
let section02Step = 0;
let section02Tl = null;
let logoBigPose = null;
let section01Tl = null;
let logoBeforeSection = null;
// 도서관 채널 단계: 0 이미지만, 1 큰 제목, 2 소개 문구, 3 로고와 CLASS 문구
let libraryStep = 0;

Promise.all(channelSources.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
}))).then(list => {
    channels = list.filter(Boolean);
});


// ===== 인트로 · 노이즈 그리기 =====

function resizeNoise() {
    noiseCanvas.width = 420;
    noiseCanvas.height = 240;

    // 전체 화면용은 저해상도로 그려서 늘림
    fullNoiseCanvas.width = Math.max(320, Math.floor(window.innerWidth / 5));
    fullNoiseCanvas.height = Math.max(180, Math.floor(window.innerHeight / 5));
}

function createNoise(canvas, ctx) {
    const image = ctx.createImageData(canvas.width, canvas.height);
    const data = image.data;

    for (let i = 0; i < data.length; i += 4) {
        // 너무 번쩍이지 않게 중간 회색 범위만
        const gray = 58 + Math.random() * 112;
        data[i] = data[i + 1] = data[i + 2] = gray;
        data[i + 3] = 255;
    }

    ctx.putImageData(image, 0, 0);
}

const noiseInterval = 1000 / 16;
let lastNoiseTime = 0;
let noiseAnimationId = null;
let noiseActive = false;

function drawNoise(now = 0) {
    if (!noiseActive) return;

    if (now - lastNoiseTime >= noiseInterval) {
        createNoise(noiseCanvas, noiseCtx);
        createNoise(fullNoiseCanvas, fullNoiseCtx);
        lastNoiseTime = now;
    }

    noiseAnimationId = requestAnimationFrame(drawNoise);
}

function startNoise() {
    if (noiseActive) return;

    noiseActive = true;
    lastNoiseTime = performance.now() - noiseInterval;
    drawNoise(performance.now());
}

function stopNoise() {
    noiseActive = false;

    if (noiseAnimationId !== null) {
        cancelAnimationFrame(noiseAnimationId);
        noiseAnimationId = null;
    }
}


// ===== 인트로 · 처음 상태 =====

function resetIntro() {
    if (timeline) {
        timeline.kill();
        timeline = null;
    }

    if (channelTl) {
        channelTl.kill();
        channelTl = null;
    }

    introDone = false;
    switching = false;
    onSection01 = false;
    sectionStep = 0;
    onSection02 = false;
    section02Step = 0;
    sectionListening.classList.remove("is-reading", "is-speaking", "is-writing");
    libraryStep = 0;
    currentChannel = 0;
    storyImg.src = channelSources[0];
    stopChannelVideo();

    stopNoise();

    // 좌표 재기 전에 transform 원위치
    gsap.set(scene, {
        display: "block",
        visibility: "hidden",
        scale: 1,
        x: 0,
        y: 0,
        filter: "brightness(1) contrast(1)"
    });

    gsap.set(story, { opacity: 0 });
    gsap.killTweensOf(storyImg);
    gsap.set(storyImg, { x: 0, yPercent: 0, skewX: 0, scaleX: 1, scaleY: 1, opacity: 1, filter: "none" });
    gsap.set(tvRoll, { top: "-25%", opacity: 0 });
    gsap.set(rgbTint, { opacity: .04 });
    gsap.set(noiseCanvas, { filter: "brightness(1)", opacity: 1 });
    gsap.set(scanline, { opacity: .07 });
    gsap.killTweensOf(channelOsd);
    gsap.set(channelOsd, { opacity: 0 });
    resetLibraryText();

    if (section01Tl) {
        section01Tl.kill();
        section01Tl = null;
    }
    gsap.killTweensOf([scene, roomBg, section01, sectionCopy, sectionKorea, sectionListening, sectionCont]);
    gsap.set(roomBg, { opacity: 1 });
    gsap.set(section01, { opacity: 0, visibility: "hidden" });
    gsap.set(sectionCopy, { opacity: 0, y: 20 });
    gsap.set([sectionKorea, sectionListening], { opacity: 0, y: 0, scale: 1 });
    gsap.set(sectionCont, { y: 0, opacity: 1 });
    gsap.killTweensOf([yearInner, yearNum, yearCopy]);
    gsap.set(yearInner, { y: 0 });
    gsap.set(yearNum, { opacity: 0, scale: 1 });
    gsap.set(yearCopy, { opacity: 0, y: 0 });
    yearNum.textContent = "2000";

    if (section02Tl) {
        section02Tl.kill();
        section02Tl = null;
    }
    gsap.killTweensOf([section02, philosophy, philosophyWheel, philosophyTitle, philosophyStage, philosophyEarly, philosophyFun]);
    gsap.set(section02, { opacity: 0, visibility: "hidden" });
    gsap.set(philosophy, { scale: 1, opacity: 1 });
    gsap.set(philosophyWheel, { opacity: 0, visibility: "hidden" });
    gsap.set(philosophyTitle, { x: 0, y: 0, scale: 1, opacity: 1 });
    gsap.set(philosophyStage, { opacity: 0, x: 0, y: 0, scale: 1 });
    gsap.set([philosophyEarly, philosophyFun], { opacity: 0, x: 0, y: 0, scale: 1 });

    onSection03 = false;
    if (section03Tl) {
        section03Tl.kill();
        section03Tl = null;
    }
    closeStory(false);
    setStoryFloat(false);
    gsap.killTweensOf([section03, storiesStage]);
    gsap.set(section03, { opacity: 0, visibility: "hidden", y: 0 });
    gsap.set(storiesStage, { scale: 1, opacity: 1 });

    onSection04 = false;
    if (section04Tl) {
        section04Tl.kill();
        section04Tl = null;
    }
    gsap.killTweensOf(section04);
    gsap.set(section04, { opacity: 0, visibility: "hidden", y: 0 });
    resetBook();

    onSection05 = false;
    if (section05Tl) {
        section05Tl.kill();
        section05Tl = null;
    }
    gsap.killTweensOf(section05);
    gsap.set(section05, { opacity: 0, visibility: "hidden" });
    resetSection05();

    onSection06 = false;
    if (section06Tl) {
        section06Tl.kill();
        section06Tl = null;
    }
    gsap.killTweensOf([section06, songVinyl, songHead, songBody, songSide, songMain, ...songFoot, ...songIntroNotes]);
    gsap.set(section06, { opacity: 0, visibility: "hidden", y: 0, clipPath: "none" });
    resetSongStage();

    gsap.set(fullscreenNoise, {
        display: "none",
        visibility: "hidden",
        opacity: 0,
        filter: "brightness(1) contrast(1)"
    });

    // TV 중앙 기준으로 확대 (아이 머리카락 안 보이게 크게)
    const tvRect = tvContent.getBoundingClientRect();
    const sceneRect = scene.getBoundingClientRect();

    const startScale = Math.max(
        Math.max(window.innerWidth / tvRect.width, window.innerHeight / tvRect.height) * 1.9,
        3.4
    );

    const tvX = tvRect.left + tvRect.width / 2;
    const tvY = tvRect.top + tvRect.height / 2;

    // transform-origin은 scene 기준 좌표
    gsap.set(scene, {
        transformOrigin: `${tvX - sceneRect.left}px ${tvY - sceneRect.top}px`,
        scale: startScale,
        x: window.innerWidth / 2 - tvX,
        y: window.innerHeight / 2 - tvY,
        force3D: true
    });

    gsap.set(powerLine, {
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
        width: 0,
        height: 0,
        opacity: 0
    });

    gsap.set(powerFlash, { scaleY: 0, opacity: 0 });

    floatRemote();
}

function setRemoteVisible(visible) {
    gsap.to(remote, { opacity: visible ? 1 : 0, duration: .4, overwrite: "auto" });
    remoteNext.style.pointerEvents = visible ? "" : "none";
    // 리모컨이 사라진 뒤에 휠 안내가 뜸
    gsap.to(wheelHint, { opacity: visible ? 0 : .85, duration: .4, overwrite: "auto" });
}

function floatRemote() {
    gsap.killTweensOf(remote);
    gsap.set(remote, { xPercent: -50, y: 0, rotation: -6, opacity: 1 });
    gsap.set(wheelHint, { opacity: 0, x: 0, y: 0, scale: 1 });
    remoteNext.style.pointerEvents = "";
    gsap.to(remote, {
        y: 16,
        rotation: 6,
        duration: .85,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
}


// ===== 인트로 · 채널 신호 =====

// 흔들리며 몇 번 비쳤다 끊긴 뒤 제자리에 잡힘
function addSignalLock(tl) {
    tl
        .set(tvRoll, { top: "-25%", opacity: 0 })
        .to(tvRoll, { top: "105%", opacity: .8, duration: .75, ease: "none" })
        .to(rgbTint, { opacity: .5, duration: .12 }, "<")

        .set(story, { opacity: .35 }, "<")
        .set(storyImg, { x: -22, skewX: 10, yPercent: -18, filter: "grayscale(1) contrast(1.8) brightness(1.4)" }, "<")
        .set(story, { opacity: 0 }, "<+=.07")

        .set(story, { opacity: .65 }, "<+=.11")
        .set(storyImg, { x: 14, skewX: -7, yPercent: 22, filter: "saturate(.4) contrast(1.5) brightness(1.25)" }, "<")
        .set(story, { opacity: .15 }, "<+=.06")

        .set(story, { opacity: .85 }, "<+=.07")
        .set(storyImg, { x: -8, skewX: 4, yPercent: -10, filter: "saturate(.7) contrast(1.3) brightness(1.3)" }, "<")

        .set(story, { opacity: 1 }, "<+=.08")
        .to(storyImg, { x: 0, skewX: 0, yPercent: 0, duration: .45, ease: "elastic.out(1, .55)" }, "<")
        .to(storyImg, { filter: "saturate(1) contrast(1) brightness(1)", duration: .5, ease: "power2.out" }, "<")
        .to(rgbTint, { opacity: .04, duration: .5, ease: "power2.out" }, "<")
        .set(tvRoll, { opacity: 0 });
}

function stopChannelVideo() {
    clearTimeout(clipTimer);
    clipTimer = null;
    storyVideo.pause();
    storyVideo.removeAttribute("src");
    storyVideo.load();
    gsap.killTweensOf(storyVideo);
    gsap.set(storyVideo, { opacity: 0 });
}

function playChannelVideo(src) {
    const url = channelVideos[src];
    if (!url) return;

    storyVideo.src = url;
    storyVideo.currentTime = 0;
    storyVideo.muted = true;

    storyVideo.play().then(() => {
        gsap.to(storyVideo, { opacity: 1, duration: .2 });
    }).catch(() => {});

    clipTimer = setTimeout(() => {
        storyVideo.pause();
        gsap.to(storyVideo, {
            opacity: 0,
            duration: .35,
            onComplete: () => {
                storyVideo.removeAttribute("src");
                storyVideo.load();
            }
        });
    }, clipSeconds * 1000);
}

const libraryChannel = "./images/thum-img-cont06.png";

// 빈칸에 들어 있는 제목을 화면 가운데 큰 글자로 옮길 위치
function titlePose() {
    gsap.set(librarySlot, { x: 0, y: 0, scale: 1 });
    const tv = tvContent.getBoundingClientRect();
    const slot = librarySlot.getBoundingClientRect();
    if (!slot.height) return { x: 0, y: 0, scale: 1 };

    return {
        x: (tv.left + tv.width / 2) - (slot.left + slot.width / 2),
        y: (tv.top + tv.height / 2) - (slot.top + slot.height / 2),
        scale: 4 / 3
    };
}

function showLibraryTitle() {
    libraryStep = 1;
    const pose = titlePose();
    gsap.to(storyImg, { opacity: .55, filter: "blur(5px)", duration: .5 });
    // 3D 레이어로 올라가면 작은 크기로 그린 걸 늘려서 흐려지므로 2D 유지
    gsap.fromTo(librarySlot,
        { opacity: 0, force3D: false, ...pose },
        { opacity: 1, duration: 1, delay: .5, ease: "power1.out" }
    );
}

function fadeOutLibraryTitle() {
    libraryStep = 0;
    gsap.killTweensOf(librarySlot);
    gsap.killTweensOf(storyImg);
    gsap.to(librarySlot, { opacity: 0, duration: .4 });
    gsap.to(storyImg, { opacity: 1, filter: "blur(0px)", duration: .4 });
}

// 빈칸에 있던 제목이 제자리로 줄어들고, 그다음 나머지 문구가 뜸
function showLibraryDesc() {
    libraryStep = 2;
    gsap.killTweensOf([librarySlot, libraryCopy, libraryDesc, libraryLogo]);
    gsap.timeline()
        .to(librarySlot, { x: 0, y: 0, scale: 1, force3D: false, duration: .9, ease: "power3.inOut" })
        .addLabel("placed")
        .to(libraryDesc, { "--dim": 1, duration: .8, ease: "power1.out" }, "placed-=.2")
        .to([libraryCopy, libraryLogo], { opacity: 1, duration: .8, ease: "power1.out" }, "placed+=.15");
}

function hideLibraryDesc() {
    libraryStep = 1;
    const pose = titlePose();
    gsap.killTweensOf([librarySlot, libraryCopy, libraryDesc, libraryLogo]);
    gsap.timeline()
        .to([libraryCopy, libraryLogo], { opacity: 0, duration: .3 })
        .to(libraryDesc, { "--dim": 0, duration: .3 }, "<")
        .to(librarySlot, { ...pose, force3D: false, duration: .7, ease: "power3.inOut" });
}

// 문장 안에 있는 로고를 TV 위쪽 가운데로 옮길 위치
function logoPose() {
    gsap.set(libraryLogo, { x: 0, y: 0, scale: 1 });
    const tv = tvContent.getBoundingClientRect();
    const logo = libraryLogo.getBoundingClientRect();

    return {
        x: (tv.left + tv.width / 2) - (logo.left + logo.width / 2),
        y: (tv.top + tv.height * 0.18) - (logo.top + logo.height / 2),
        scale: 1.8
    };
}

function showLibraryClass() {
    libraryStep = 3;
    const pose = logoPose();
    gsap.killTweensOf([libraryLogo, libraryCopy, librarySlot, libraryClass]);
    gsap.timeline()
        .to(libraryLogo, { ...pose, force3D: false, duration: .8, ease: "power3.inOut" })
        .to([libraryCopy, librarySlot], { opacity: 0, duration: .4 }, "<")
        .to(libraryClass, { opacity: 1, duration: .7, ease: "power1.out" }, "-=.25");
}

function hideLibraryClass() {
    libraryStep = 2;
    gsap.killTweensOf([libraryLogo, libraryCopy, librarySlot, libraryClass]);
    gsap.timeline()
        .to(libraryClass, { opacity: 0, duration: .3 })
        .to(libraryLogo, { x: 0, y: 0, scale: 1, force3D: false, duration: .7, ease: "power3.inOut" }, "<")
        .to([libraryCopy, librarySlot], { opacity: 1, duration: .5 }, "<+=.15");
}

function resetLibraryText() {
    gsap.killTweensOf([librarySlot, libraryCopy, libraryDesc, libraryLogo, libraryClass]);
    gsap.set(librarySlot, { opacity: 0, scale: 1, x: 0, y: 0 });
    gsap.set(libraryCopy, { opacity: 0 });
    gsap.set(libraryLogo, { opacity: 0, x: 0, y: 0, scale: 1 });
    gsap.set(libraryClass, { opacity: 0 });
    gsap.set(libraryDesc, { "--dim": 0 });
}

function hideLibraryTitle() {
    libraryStep = 0;
    resetLibraryText();
    gsap.killTweensOf(storyImg);
    gsap.set(storyImg, { opacity: 1, filter: "brightness(1) contrast(1)" });
}

function showChannelNumber(index) {
    channelOsd.textContent = "CH " + String(index + 1).padStart(2, "0");
    gsap.killTweensOf(channelOsd);
    gsap.fromTo(channelOsd, { opacity: 1 }, { opacity: 0, delay: 1.4, duration: .4 });
}


// ===== 인트로 · TV를 화면에 맞추기 =====

// TV가 화면을 꽉 채우도록 키울 배율. 지금 방 화면(scale 1)에서 재야 함
function tvFillPose() {
    const tv = tvContent.getBoundingClientRect();
    const sceneRect = scene.getBoundingClientRect();
    const tvX = tv.left + tv.width / 2;
    const tvY = tv.top + tv.height / 2;

    return {
        origin: `${tvX - sceneRect.left}px ${tvY - sceneRect.top}px`,
        scale: Math.max(window.innerWidth / tv.width, window.innerHeight / tv.height),
        x: window.innerWidth / 2 - tvX,
        y: window.innerHeight / 2 - tvY
    };
}

// TV가 화면을 채울 때 로고가 한가운데에서 커진 채로 남는 위치
function logoCenterPose() {
    const tv = tvContent.getBoundingClientRect();
    const logo = libraryLogo.getBoundingClientRect();

    return {
        x: gsap.getProperty(libraryLogo, "x") + ((tv.left + tv.width / 2) - (logo.left + logo.width / 2)),
        y: gsap.getProperty(libraryLogo, "y") + ((tv.top + tv.height / 2) - (logo.top + logo.height / 2)),
        scale: 2.6
    };
}

// TV가 화면보다 넓게 커지면 오른쪽 끝의 휠이 화면 밖으로 나간다.
// 화면 오른쪽 가운데에 남도록, 지금 위치에서 옮길 양을 계산
function wheelFillPose(scenePose) {
    const hint = wheelHint.getBoundingClientRect();
    const wheelScale = gsap.getProperty(wheelHint, "scale") || 1;
    const hintWidth = hint.width / wheelScale;
    const hintTarget = Math.min(64, Math.max(36, window.innerWidth * 0.036));
    const sceneScale = scenePose.scale;

    const tv = tvContent.getBoundingClientRect();
    const tvX = tv.left + tv.width / 2;
    const tvY = tv.top + tv.height / 2;
    const anchorX = hint.right;
    const anchorY = hint.top + hint.height / 2;
    const margin = Math.max(24, window.innerWidth * 0.028);

    return {
        x: (window.innerWidth - margin - window.innerWidth / 2) / sceneScale - (anchorX - tvX),
        y: tvY - anchorY,
        scale: hintTarget / (hintWidth * sceneScale),
        transformOrigin: "right center"
    };
}

// 이미 화면을 채운 뒤, 로고를 위쪽 가운데로 보낼 위치
function logoTopPose() {
    const logo = libraryLogo.getBoundingClientRect();
    const sceneScale = gsap.getProperty(scene, "scale") || 1;
    const logoScale = gsap.getProperty(libraryLogo, "scale") || 1;
    const desired = Math.min(window.innerHeight * 0.18, 220);

    return {
        x: gsap.getProperty(libraryLogo, "x") + (window.innerWidth / 2 - (logo.left + logo.width / 2)) / sceneScale,
        y: gsap.getProperty(libraryLogo, "y") + (window.innerHeight * 0.26 - (logo.top + logo.height / 2)) / sceneScale,
        scale: desired * logoScale / logo.height
    };
}

// ===== 섹션 1 =====
function enterSection01() {
    onSection01 = true;
    switching = true;
    const pose = tvFillPose();
    const logo = logoCenterPose();
    logoBeforeSection = {
        x: gsap.getProperty(libraryLogo, "x"),
        y: gsap.getProperty(libraryLogo, "y"),
        scale: gsap.getProperty(libraryLogo, "scale")
    };

    const hint = wheelFillPose(pose);

    gsap.set(section01, { visibility: "visible", opacity: 1 });
    gsap.set(sectionCopy, { opacity: 0, y: 20 });
    gsap.set(scene, { transformOrigin: pose.origin });
    gsap.killTweensOf([libraryLogo, libraryClass, libraryDesc, story, noiseCanvas, scanline, rgbTint, wheelHint]);

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(scene, { scale: pose.scale, x: pose.x, y: pose.y, duration: 1.35, ease: "power3.inOut" })
        .to(roomBg, { opacity: 0, duration: 1.35, ease: "power2.inOut" }, "<")
        // 화면 속 이미지와 문구는 걷히고, 로고만 가운데로
        .to(story, { opacity: 0, duration: .55 }, "<")
        .to([noiseCanvas, scanline, rgbTint, libraryClass], { opacity: 0, duration: .55 }, "<")
        .to(libraryDesc, { "--dim": 0, duration: .55 }, "<")
        .to(libraryLogo, { ...logo, force3D: false, duration: 1.35, ease: "power3.inOut" }, "<")
        .to(wheelHint, { ...hint, force3D: false, duration: 1.35, ease: "power3.inOut" }, "<");
}

function showSectionMessage() {
    sectionStep = 1;
    switching = true;
    logoBigPose = {
        x: gsap.getProperty(libraryLogo, "x"),
        y: gsap.getProperty(libraryLogo, "y"),
        scale: gsap.getProperty(libraryLogo, "scale")
    };

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(libraryLogo, { ...logoTopPose(), force3D: false, duration: .9, ease: "power3.inOut" })
        .to(sectionCopy, { opacity: 1, y: 0, duration: .8, ease: "power2.out", stagger: .12 }, "-=.4");
}

function hideSectionMessage() {
    sectionStep = 0;
    switching = true;

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(sectionCopy, { opacity: 0, y: 16, duration: .25 })
        .to(libraryLogo, { ...logoBigPose, force3D: false, duration: .8, ease: "power3.inOut" }, "<");
}

// 리스닝 이미지가 아래에 깔릴 자리를 비워둔 채라, 문구만 있을 땐 화면 가운데로 내려야 함
// offsetTop은 transform 영향을 안 받아서 움직이는 중에도 원래 자리 기준으로 잴 수 있음
function koreaCenterY() {
    return window.innerHeight / 2 - (sectionKorea.offsetTop + sectionKorea.offsetHeight / 2);
}

function showKoreaMessage() {
    sectionStep = 2;
    switching = true;
    const centerY = koreaCenterY();

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(sectionCopy, { opacity: 0, y: -16, duration: .4, ease: "power2.in" })
        .to(libraryLogo, { opacity: 0, duration: .4, ease: "power2.in" }, "<")
        .fromTo(sectionKorea,
            { opacity: 0, y: centerY + 30, scale: 1 },
            { opacity: 1, y: centerY, duration: .8, ease: "power2.out" }, "-=.05");
}

function hideKoreaMessage() {
    sectionStep = 1;
    switching = true;

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(sectionKorea, { opacity: 0, y: "+=20", duration: .3 })
        .to(libraryLogo, { opacity: 1, duration: .5 })
        .to(sectionCopy, { opacity: 1, y: 0, duration: .6, ease: "power2.out", stagger: .1 }, "<");
}

// 제목은 작아져도 자리 높이는 그대로라, 보이는 묶음(작은 제목 + 이미지 + 문구)의 중심을 화면 가운데로 맞춘다
function stackCenterY(mediaHeight) {
    const scale = 0.62;
    const media = sectionListening.querySelector(".listening-media");
    const copy = sectionListening.querySelector(".media-copy");
    const innerGap = sectionListening.offsetHeight - media.offsetHeight - copy.offsetHeight;
    const visualTop = sectionKorea.offsetTop + sectionKorea.offsetHeight * (1 - scale);
    const visualBottom = sectionListening.offsetTop + mediaHeight + innerGap + copy.offsetHeight;
    return window.innerHeight / 2 - (visualTop + visualBottom) / 2;
}

function mediaBoxHeight(mode) {
    const vh = window.innerHeight / 100;
    const vw = window.innerWidth / 100;
    const listenH = Math.min(42 * vh, 68 * vw * 941 / 1672);
    if (mode === "writing") return listenH * 1672 / 941 * 934 / 1536;
    if (mode === "speaking") return listenH * 1672 / 941 * 899 / 1494;
    if (mode === "reading") return listenH * 1672 / 941 * 693 / 1536;
    return listenH;
}

function showListening() {
    sectionStep = 3;
    switching = true;

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(sectionKorea, { y: 0, scale: .62, transformOrigin: "center bottom", duration: .9, ease: "power3.inOut" })
        .to(sectionCont, { y: stackCenterY(mediaBoxHeight("listening")), duration: .9, ease: "power3.inOut" }, "<")
        .fromTo(sectionListening,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: .8, ease: "power2.out" }, "-=.45");
}

function hideListening() {
    sectionStep = 2;
    switching = true;
    const centerY = koreaCenterY();

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(sectionListening, { opacity: 0, y: 30, duration: .35 })
        .to(sectionCont, { y: 0, duration: .8, ease: "power3.inOut" }, "<")
        .to(sectionKorea, { y: centerY, scale: 1, duration: .8, ease: "power3.inOut" }, "<");
}

// 섹션 1 단계 4~6. 듣기·읽기·말하기·쓰기 중 모드 하나만 켠다
function moveSkill(step, mode) {
    sectionStep = step;
    switching = true;
    sectionListening.classList.remove("is-reading", "is-speaking", "is-writing");
    if (mode !== "listening") sectionListening.classList.add("is-" + mode);
    const y = stackCenterY(mediaBoxHeight(mode));

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl.to(sectionCont, { y, duration: .85, ease: "power3.inOut" });
}

function showReading() { moveSkill(4, "reading"); }
function hideReading() { moveSkill(3, "listening"); }
function showSpeaking() { moveSkill(5, "speaking"); }
function hideSpeaking() { moveSkill(4, "reading"); }
function showWriting() { moveSkill(6, "writing"); }
function hideWriting() { moveSkill(5, "speaking"); }

function showYear() {
    sectionStep = 7;
    switching = true;
    yearNum.textContent = "2000";

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(sectionCont, { opacity: 0, y: "-=40", duration: .5, ease: "power2.in" })
        .fromTo(yearNum,
            { opacity: 0, scale: .7 },
            { opacity: 1, scale: 1, duration: .9, ease: "expo.out" }, "-=.1");
}

function hideYear() {
    sectionStep = 6;
    switching = true;
    const y = stackCenterY(mediaBoxHeight("writing"));

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(yearNum, { opacity: 0, scale: .8, duration: .35, ease: "power2.in" })
        .fromTo(sectionCont, { y: y - 40 }, { opacity: 1, y, duration: .6, ease: "power2.out" });
}

function showYearCount() {
    sectionStep = 8;
    switching = true;
    const counter = { value: 2000 };
    const lift = -(yearCopy.offsetHeight / 2);

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(counter, {
            value: 2026,
            duration: .7,
            ease: "power1.in",
            onUpdate: () => { yearNum.textContent = Math.round(counter.value); }
        })
        .to(yearNum, { scale: 1.08, duration: .12, yoyo: true, repeat: 1, ease: "power2.out" })
        .to(yearInner, { y: lift, duration: .8, ease: "power3.inOut" }, "-=.05")
        .fromTo(yearCopy,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: .7, ease: "power2.out" }, "-=.4");
}

function hideYearCount() {
    sectionStep = 7;
    switching = true;
    const counter = { value: 2020 };

    section01Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section01Tl
        .to(yearCopy, { opacity: 0, y: 16, duration: .3 })
        .to(yearInner, { y: 0, duration: .7, ease: "power3.inOut" }, "<")
        .to(counter, {
            value: 2000,
            duration: .5,
            ease: "power1.out",
            onUpdate: () => { yearNum.textContent = Math.round(counter.value); }
        }, "<");
}

// ===== 섹션 2 =====
// 작은 제목 자리에서 화면 가운데로 키울 때. 왼쪽 가운데를 기준으로 커진다
function philosophyTitleCenter() {
    const w = philosophyTitle.offsetWidth;
    const h = philosophyTitle.offsetHeight;
    const frame = philosophyTitle.parentElement.getBoundingClientRect();
    const originX = frame.left + philosophyTitle.offsetLeft;
    const originY = frame.top + philosophyTitle.offsetTop + h / 2;
    const scale = Math.min(3, Math.max(1.8, (window.innerWidth * 0.8) / w));

    return {
        x: window.innerWidth / 2 - originX - (w * scale) / 2,
        y: window.innerHeight * 0.46 - originY,
        scale
    };
}

function enterSection02() {
    onSection02 = true;
    section02Step = 0;
    switching = true;

    gsap.set(section02, { visibility: "visible", opacity: 0 });
    gsap.set(philosophyWheel, { visibility: "visible", opacity: 0 });
    gsap.set(philosophyTitle, { x: 0, y: 0, scale: 1, opacity: 1 });
    gsap.set(philosophyStage, { opacity: 0, x: 0, y: 0, scale: 1 });
    gsap.set([philosophyEarly, philosophyFun], { opacity: 0, x: 0, y: 0, scale: 1 });
    const pose = philosophyTitleCenter();

    if (section02Tl) section02Tl.kill();
    section02Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section02Tl
        .to(section01, { opacity: 0, duration: .4, ease: "power2.in" })
        .to(section02, { opacity: 1, duration: .55, ease: "power2.out" }, "-=.12")
        .to(philosophyWheel, { opacity: 1, duration: .55, ease: "power2.out" }, "<")
        .fromTo(philosophyTitle,
            { ...pose, opacity: 0, y: pose.y + 26, force3D: false },
            { ...pose, opacity: 1, duration: .7, ease: "power2.out", force3D: false }, "<");
}

function leaveSection02() {
    onSection02 = false;
    switching = true;

    if (section02Tl) section02Tl.kill();
    section02Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section02, { visibility: "hidden" });
            gsap.set(philosophyWheel, { visibility: "hidden" });
            gsap.set(philosophyTitle, { x: 0, y: 0, scale: 1, opacity: 1 });
            switching = false;
        }
    });
    section02Tl
        .to(philosophyTitle, { opacity: 0, duration: .25 })
        .to(section02, { opacity: 0, duration: .35 }, "<")
        .to(philosophyWheel, { opacity: 0, duration: .35 }, "<")
        .to(section01, { opacity: 1, duration: .45, ease: "power2.out" }, "-=.1");
}

function showPhilosophyDetail() {
    section02Step = 1;
    switching = true;

    if (section02Tl) section02Tl.kill();
    section02Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(philosophyTitle, { clearProps: "transform" });
            switching = false;
        }
    });
    section02Tl
        .to(philosophyTitle, { x: 0, y: 0, scale: 1, duration: .9, ease: "power3.inOut", force3D: false })
        .fromTo(philosophyStage,
            { opacity: 1, x: stageOffscreenX(), y: 0 },
            { x: 0, duration: .9, ease: "power3.inOut" }, "-=.42");
}

function hidePhilosophyDetail() {
    section02Step = 0;
    switching = true;
    const pose = philosophyTitleCenter();

    if (section02Tl) section02Tl.kill();
    section02Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section02Tl
        .to(philosophyStage, { x: stageOffscreenX(), duration: .85, ease: "power3.inOut" })
        .to(philosophyTitle, { ...pose, duration: .85, ease: "power3.inOut", force3D: false }, "<");
}

// 묶음 왼쪽 끝이 화면 오른쪽 밖에 놓이는 거리. 여기서 출발해야 들어올 때까지 안 보인다
function stageOffscreenX() {
    return window.innerWidth - philosophyStage.parentElement.getBoundingClientRect().left;
}

// 섹션 2 단계 2·3. 다음 묶음이 오른쪽에서 들어와 앞 묶음을 덮는다
function slidePhilosophyStage(step, incoming, covered, forward) {
    section02Step = step;
    switching = true;
    if (section02Tl) section02Tl.kill();
    section02Tl = gsap.timeline({
        onComplete: () => {
            if (!forward) gsap.set(incoming, { opacity: 0, x: 0, y: 0 });
            switching = false;
        }
    });
    if (forward) {
        section02Tl
            .fromTo(incoming,
                { opacity: 1, x: stageOffscreenX(), y: 0 },
                { x: 0, duration: 1, ease: "power3.inOut" })
            .to(covered, { scale: .96, opacity: .5, duration: 1, ease: "power3.inOut" }, "<");
        return;
    }
    section02Tl
        .to(incoming, { x: stageOffscreenX(), duration: .9, ease: "power3.inOut" })
        .to(covered, { scale: 1, opacity: 1, duration: .9, ease: "power3.inOut" }, "<");
}

function showPhilosophyEarly() { slidePhilosophyStage(2, philosophyEarly, philosophyStage, true); }
function hidePhilosophyEarly() { slidePhilosophyStage(1, philosophyEarly, philosophyStage, false); }
function showPhilosophyFun() { slidePhilosophyStage(3, philosophyFun, philosophyEarly, true); }
function hidePhilosophyFun() { slidePhilosophyStage(2, philosophyFun, philosophyEarly, false); }

function leaveSection01() {
    onSection01 = false;
    switching = true;
    sectionListening.classList.remove("is-reading", "is-speaking", "is-writing");

    section01Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section01, { visibility: "hidden" });
            switching = false;
        }
    });
    section01Tl
        .to(sectionCopy, { opacity: 0, y: 16, duration: .25 })
        .to(section01, { opacity: 0, duration: .25 }, "<")
        .to(scene, { scale: 1, x: 0, y: 0, duration: 1.15, ease: "power3.inOut" }, "<")
        .to(roomBg, { opacity: 1, duration: 1.15, ease: "power2.inOut" }, "<")
        .to(story, { opacity: 1, duration: .7 }, "<")
        .to(noiseCanvas, { opacity: 1, duration: .7 }, "<")
        .to(scanline, { opacity: .07, duration: .7 }, "<")
        .to(rgbTint, { opacity: .04, duration: .7 }, "<")
        .to(libraryDesc, { "--dim": 1, duration: .7 }, "<")
        .to(libraryClass, { opacity: 1, duration: .7 }, "<")
        .to(libraryLogo, { ...logoBeforeSection, force3D: false, duration: 1.15, ease: "power3.inOut" }, "<")
        .to(wheelHint, { x: 0, y: 0, scale: 1, force3D: false, duration: 1.15, ease: "power3.inOut" }, "<");
}

// ===== 섹션 3 =====
// 말풍선 자리는 여기만 둔다
const storySpots = {
    meet: { left: "2.5%", top: "43.7%", scale: 1 },
    read: { left: "6.4%", top: "10.3%", scale: 1.28 },
    choose: { left: "10%", top: "80.7%", scale: 1.55 },
    habit: { left: "67.3%", top: "9.5%", scale: 1.16 },
    speak: { left: "64.2%", top: "76.4%", scale: 1.38 }
};

function bubbleKey(bubble) {
    return [...bubble.classList].find(name => storySpots[name.slice(7)])?.slice(7);
}

function placeBubble(bubble, spot, duration) {
    bubble._storyScale = spot.scale;
    if (!duration) bubble._storyScaleNow = spot.scale;
    gsap.to(bubble, {
        left: spot.left,
        top: spot.top,
        duration,
        ease: "power3.inOut",
        overwrite: "auto"
    });
    if (!storyFloating) gsap.set(bubble, { scale: spot.scale });
}

const storyRing = ["meet", "habit", "speak", "choose", "read"];

const stories = {
    meet: {
        photo: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_member.png",
        age: "초6 (여)",
        period: "4세부터 8년",
        video: "https://www.littlefox.co.kr/ko/media/index/cVBtOFhqam9nMGZDNXdqdHFrdFY5MGN5Q0FSYUdUc0JEQjM4ZUJpNzVTc0ZrSTdYN1gwekhkcWdIZUg0cmF6Z0hYUnJGUG1IZlpIdDBQclZNR1dBV0E9PQ==",
        paragraphs: [
            "아이들이 리틀팍스를 볼 때는 영어를 공부로 안 느끼고 흥미롭게 느껴서 지속적으로 할 수 있었어요. 아이들이 영어로 표현하고 싶어 하고요.",
            "기본적으로 그동안 리틀팍스를 많이 봤기 때문에 금방 영어유치원에서, 성장하는 게 보였어요. 그래서 아이도 자신감을 가지고 즐겁게 다녔어요. 1년 다녔는데도 끝날 때는 일취월장해서 영어 쓰기도 잘하고, 아웃풋이 좋으니까 아이도 자신감을 갖더라고요.",
            "리틀팍스는 아이가 부담도 안 느끼고, 즐겁게 들으면서 공부하니까 학원에서도 시너지가 생기더라고요. 몇 개월 지나면 레벨 업 되고, 또 레벨 업 되고, 이런 식으로 레벨 업 되니까 아이가 자신감을 갖고 할 수 있었던 것 같아요."
        ]
    },
    read: {
        photo: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_member2.png",
        age: "초5 (남), 7세 (여)",
        period: "6세,2세부터 6년",
        video: "https://www.littlefox.co.kr/ko/media/index/UE93MVBFRXdNS2ZYb3lmT01rVmQ2aEFEVUwwTnkxSHd0KzNmSU5tZ01zajBPdUg3RHJvUDZ0Z0I1bGRONzhNYVlsRkdDaXdJMFBibmR6SC9rQ2JGRGc9PQ===",
        paragraphs: [
            "진하(첫째)는 정말 리틀팍스를 보면서 한 거라고는 매일 꾸준히 적어도 한 시간 이상은 하루도 거르지 않고 매일 봤던 거 그거 하나였거든요.",
            "진하는 학원을 다녔다거나 집에서 제가 따로 공부를 시킨다거나 그런 거는 한 번도 없었는데도 불구하고, 영어를 꾸준히 노출해 줬던 게 이 아이한테는 큰 내공이 쌓였던 게 아닌가 생각을 많이 해 봤어요.",
            "민서는 둘째다 보니까 태어나서 두 살 후반부터 오빠랑 같이 시청을 했어요 … 오히려 진하보다 더 신경을 안 썼는데도 불구하고 민서는 어렸을 때부터 노출을 해서 그런지 발음이라든가 빨아들이는 흡수력이 진하보다 더 좋더라고요.",
            "얘가 영어 말하기를 한 번도 한 적이 없는데 대답을 하고 있어서 저도 신기했어요 … 그 일이 리틀팍스를 본 지 3-4년 정도 지난 뒤 일이거든요. 역시 말하기는 정말 충분한 리스닝이 된 뒤에 이루어지는 게 스피킹이라는 것을 제가 다시 한번 진하를 통해서 체험했죠."
        ]
    },
    choose: {
        photo: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_member3.png",
        age: "초3 (남)",
        period: "5세부터 5년 6개월",
        video: "https://www.littlefox.co.kr/ko/media/index/dTlhVE11d2RFc2Q3b1RuWmVFSHRNRXJWKzhzL1JQWElsUzhpWk1nUFlib2YyYURHTzZyajVFUXZSMUgvNDZrUlRWRDV4L0JPd1VqSTJleWJQTk5Icnc9PQ==",
        paragraphs: [
            "36개월이 정말 중요한 시기라고 생각했어요. 그 안에 최대한 많이 영어에 노출해 주고 사교육은 시키지 않았어요. 어릴 때부터 환경만 만들어 주면 스스로 공부할 것 같아 보였고, 예상대로 지금은 자기 주도 학습을 하는 아이로 가는 거 같아요.",
            "언어가 학습이 되면 늦는 거 같아요. 아직 아이가 어릴 때, 언어를 '학습'하지 않고 '습득'하는 시기에 놀이로써 배울 수 있지 않을까 생각이 들어요.",
            "그래서 영어 환경을 만드는 것이 중요한 거 같아요. 영어유치원이나 학원이 아니라 집에서 하루에 1시간 정도만 꾸준히 해도 효과가 있을 거예요."
        ]
    },
    habit: {
        photo: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_member4.png",
        age: "초5 (여)",
        period: "5세부터 6년5개월",
        video: "https://cdn.littlefox.co.kr/media/News/64a4aa48a5d116c896a05347f92e4974c1174ff66641334b5c5b7114aa31cdb6.mp4?20220614114253",
        paragraphs: [
            "[학생] 다섯 살 때부터 리틀팍스를 했던 거 같은데 그때는 이걸 영어를 공부한다는 생각보다 재밌는 애니메이션 영상을 본다는 느낌으로 했거든요. 단기간 동안은 많이 느는 게 안 보이는데 장기간 동안 엄청 많이 보고, 엄청 많이 듣고 하면은 정말로 이 표현이 어느 순간 내 것이 되는 걸 느꼈어요.",
            "[부모] 첫째 때 다 해봤어요. 둘째인 재이 때는 그런 것들이 엄마의 선택이 아닌 아이가 좋아하고 아이가 스스로 즐길 때 시너지 효과가 난다는 것을 알았기 때문에 불안함은 없었어요. … 푸시 하지 않는 어떻게 보면 내버려 둠이 아이의 성장의 밑거름이 됐다고요."
        ]
    },
    speak: {
        photo: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_member5.png",
        age: "초6 (여)",
        period: "초3부터 3년",
        video: "https://cdn.littlefox.co.kr/media/interview/d6205c12bae97126e370a3870f72e4c9be4eff54e04900c4eee5776b5d968c08.mp4?20221101132451",
        paragraphs: [
            "[학생] 처음에 볼 때는 ‘Hello’ 그런 것 밖에 몰랐거든요. 그 정도만 알아듣고, 사실상 다 알아듣지는 못했어요. 애니메이션이니까 … 눈으로 보면서도 조금씩 이해하고, 해석도 같이 보면서 다 이해하게 됐던 것 같아요 … Fun at Kids Central에 빠지고 난 다음부터 영어를 엄청 듣게 됐어요.",
            "고학년이 되고 난 뒤부터 글 쓰는 걸 엄청 좋아했어요. 영어 실력이 4학년, 5학년 그때부터 팍팍 늘었거든요.",
            "[부모] 리틀팍스 말하기 CLASS가 기능적인 부분들이 추가돼서 저는 너무 좋았어요 … CLASS를 하면서 동화 나오는 성우의 강세, 리듬 패턴이나 이런 것들을 모방하면서 비슷하게 하려고 후천적으로 노력을 하는데 … 그런 것들이 되게 재미있데요.",
            "아이는 불안하지 않은데 부모는 불안하잖아요. 불안은 내 몫이니 내가 해결을 해야 되니까 벽 보고 숫자 세기도 해보고 … 나가서 걷기 이런 것들 많이 했던 것 같아요."
        ]
    }
};

function stopStoryVideo() {
    interviewVideo.pause();
    interviewSource.removeAttribute("src");
    interviewVideo.load();
}

function closeStory(animate) {
    storyWall.classList.remove("is-open");
    storyBubbles.forEach(bubble => {
        bubble.classList.remove("is-gone");
        placeBubble(bubble, storySpots[bubbleKey(bubble)], animate ? .7 : 0);
    });
    stopStoryVideo();
    if (!animate) {
        storyCard.hidden = true;
        storyDim.hidden = true;
        gsap.set([storyCard, storyDim], { opacity: 1, clearProps: "transform" });
        return;
    }
    gsap.to([storyCard, storyDim], {
        opacity: 0,
        duration: .25,
        onComplete: () => {
            storyCard.hidden = true;
            storyDim.hidden = true;
            gsap.set([storyCard, storyDim], { opacity: 1, clearProps: "transform" });
        }
    });
}

function openStory(bubble) {
    const story = stories[bubbleKey(bubble)];
    storyRing.forEach((key, index) => {
        const item = document.querySelector(".bubble-" + key);
        const nextKey = storyRing[(index + 1) % storyRing.length];
        item.classList.remove("is-gone");
        placeBubble(item, storySpots[nextKey], .8);
    });
    storyWall.classList.add("is-open");
    storyCard.setAttribute("aria-label", bubble.dataset.title);
    storyPhoto.src = story.photo;
    storyPhoto.alt = bubble.dataset.title;
    storyMeta.textContent = "ㆍ연령 : " + story.age + "\nㆍ이용기간 : " + story.period;
    storyCopy.replaceChildren(...story.paragraphs.map(text => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
    }));
    storyCopy.scrollTop = 0;
    interviewSource.src = story.video;
    interviewVideo.load();
    storyCard.hidden = false;
    storyDim.hidden = false;
    gsap.fromTo([storyCard, storyDim], { opacity: 0 }, { opacity: 1, duration: .35, ease: "power2.out", overwrite: "auto" });
}

let storyPointer = { x: -9999, y: -9999, active: false };
let storyFloating = false;

function floatStories(now = 0) {
    if (!storyFloating) return;
    const time = now / 1000;
    storyBubbles.forEach((bubble, index) => {
        if (bubble.classList.contains("is-gone")) {
            gsap.set(bubble, { x: 0, y: 0 });
            return;
        }
        const rect = bubble.getBoundingClientRect();
        const shiftX = gsap.getProperty(bubble, "x") || 0;
        const shiftY = gsap.getProperty(bubble, "y") || 0;
        const centerX = rect.left + rect.width / 2 - shiftX;
        const centerY = rect.top + rect.height / 2 - shiftY;
        const dx = centerX - storyPointer.x;
        const dy = centerY - storyPointer.y;
        const distance = Math.hypot(dx, dy) || 1;
        const reach = 240;
        const near = storyPointer.active && distance < reach ? 1 - distance / reach : 0;
        const push = near * 54;
        const targetScale = bubble._storyScale || 1;
        bubble._storyScaleNow = bubble._storyScaleNow ?? targetScale;
        bubble._storyScaleNow += (targetScale - bubble._storyScaleNow) * .08;
        gsap.set(bubble, {
            x: Math.sin(time * .7 + index) * 12 + (dx / distance) * push + Math.sin(time * 1.7 + index * 2) * 22 * near,
            y: Math.cos(time * .55 + index * 1.3) * 10 + (dy / distance) * push + Math.cos(time * 1.4 + index) * 16 * near,
            scale: bubble._storyScaleNow * (1 + Math.sin(time * .9 + index) * .035) * (1 + near * .08)
        });
    });
    requestAnimationFrame(floatStories);
}

function setStoryFloat(on) {
    if (on === storyFloating) return;
    storyFloating = on;
    if (on) requestAnimationFrame(floatStories);
    else storyBubbles.forEach(bubble => gsap.set(bubble, { x: 0, y: 0, scale: bubble._storyScale || 1 }));
}

section03.addEventListener("pointermove", event => {
    storyPointer.x = event.clientX;
    storyPointer.y = event.clientY;
    storyPointer.active = true;
});
section03.addEventListener("pointerleave", () => { storyPointer.active = false; });


// ===== 섹션 4 =====

// 문단은 배열, { mark }는 형광펜. image는 왼쪽 원 안에 들어갈 그림
const userNotes = [
    {
        theme: { accent: "#3d8be0", soft: "#d6e8fc", avatar: "#dcebfb" },
        image: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_chr1.png",
        age: "초3 (여)",
        period: "6세부터 5년",
        title: "리틀팍스와 친구가 된 아이 ♡",
        body: [
            ["초등학교 1학년 들어가면서 영어 학원에 정식 등록을 하고 아이에겐 리틀팍스는 잠시 쉬어가는 게 어떻겠냐고 제안을 했어요. 근데 이번에도 아이는 절대 안 된다면서 ", { mark: "자기 생일 선물로 리틀팍스 구독을 해달라고 하더라고요." }],
            ["아이가 영어학원에서도 … 2학년인데도 불구하고 4,5학년 누나 형들과 수업을 하고 있었고 대회에 나가서는 형 누나들을 제치고 혼자서 1등급을 받았습니다. 전 이 모든 게 ", { mark: "리틀팍스를 통해 흘려듣기부터 시작된 단단한 기초가 있어서 가능했다" }, "고 생각합니다."],
            ["리틀팍스 하는 시간만큼은 자유롭게 아이가 보고 싶은 거 보고 하고 싶은 거 하면서 쉬는 시간 즐기는 시간으로 활용하면 너무 좋겠다 싶어서 ", { mark: "리틀팍스는 공부가 아닌 놀이다 라고 항상 접근을 했어요" }, ". 저희가 마치 티비로 드라마나 예능 보는 것처럼 말이죠 ^^"]
        ],
        link: "https://www.littlefox.co.kr/ko/testimonials_forum/bbs_view/1346236/1/1/N/null/null/N/"
    },
    {
        theme: { accent: "#2f9e73", soft: "#d3f1e3", avatar: "#dcf3e8" },
        image: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_chr2.png",
        age: "중3 (남)",
        period: "초2부터 6년 8개월",
        title: "리팍 덕분에! (리팍에 대한 고마움)",
        body: [
            ["제가 영어 전공자임에도 아이들 영어는 손도 대지 못하고 어영부영 시간을 보냈습니다. 초등 2학년이 되어 아이들은 준비 없이 치른 학교 영어 시험에서 보기 좋게 28점, 34점으로 최하위 점수를 받았습니다."],
            ["그때부터 시작된 리팍은 … 엄마인 제가 보고 들어도 너무 재미있어 … ", { mark: "아이들과 함께 초창기에는 하루 2-3시간씩 보는 일이 많았습니다." }, " 모든 단계별로 동화가 있어 단계적으로 보다 보면 ", { mark: "어느새 입에서 영어가 나오는 신기한 경험을 했습니다." }, " … 리팍 동화를 이용해 책도 만들어 읽기 연습도 많이 했습니다. ", { mark: "자연스럽게 영어책을 읽을 수 있게 되었습니다." }],
            ["조금 아쉬운 것은 6-7세쯤 리팍을 좀 더 일찍 알았더라면 입니다 … 리팍을 아이들이 좋아하기만 하면 효과는 서서히 나타날 것이니 ", { mark: "너무 조급해 하지 마셔요." }, " 아이들에게 ", { mark: "당근을 주시면서" }, " 리팍을 접하게 해 주시면 더 좋고요."]
        ],
        link: "https://www.littlefox.co.kr/ko/testimonials_forum/bbs_view/1315099/1/1/N/null/null/N/N"
    },
    {
        theme: { accent: "#e0606a", soft: "#fde0e0", avatar: "#fde7e5" },
        image: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_chr3.png",
        age: "초5 (남)",
        period: "7세부터 5년 8개월",
        title: "슬기로운 영어습득",
        body: [
            ["[학생] 처음에 엄마가 Bat and Friends를 틀어주셨을 때 ", { mark: "무슨말 인지 하나도 알아들을 수는 없었지만 내용이 너무 재미있어서 계속 봤어요." }],
            ["1학년 때 가족이 제주도 여행 갔을 때부터 제가 의도하지 않았는데 리틀팍스에서 봤던 문장들을 내뱉기 시작했고 … 제가 외워야겠다 생각하거나 노력하지 않았는데 ", { mark: "반복해서 보다 보니까 저절로 외워지고, 일상생활에서도 동화 속에서 봤던 상황이 생기면 제가 영어로 말하게 되었어요." }],
            ["2학년 2학기에 학교 방과 후 영어 선생님과 영어 대화가 가능했고 … 4학년 겨울에는 원어민 선생님과의 대화로 … 30분 넘게 막힘없이 대화할 수 있었고 … 가끔 애니메이션 영화나 미국 드라마 볼 때 엄마가 못 알아들으면 저한테 물어보세요."]
        ],
        link: "https://www.littlefox.co.kr/ko/testimonials_forum/bbs_view/1323670/1/1/N/null/null/N/N"
    },
    {
        theme: { accent: "#d4920f", soft: "#fcefc6", avatar: "#fdf3d5" },
        image: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_chr4.png",
        age: "초2 (남), 7세 (남)",
        period: "6세, 4세부터 4년",
        title: "임금님 귀는 당나귀귀!!! 소문내고 싶은 리틀팍스~",
        body: [
            ["영어를 어떻게 할까 고민하는 친구 엄마들을 만나면, \"우리 집은 리틀팍스를 하고 있다.\"라고 꼭 말합니다. 리틀팍스가 왜 좋은지, 어떻게 활용하면 좋은지, 우리 아이들은 얼마나 실력이 늘고 있는지, 구구절절 이야기하고 싶지만 .. ", { mark: "대나무 숲에 가서 \"리틀팍스 꼭! 하세요!! 우리 애들 리틀팍스만 했는데, 영어 실력 좋아요!!\"라고 소리치고 싶은 심정입니다." }],
            ["중고등학교에서는 시험도 쳐야 하고, 대학 입시도 치야 하므로, 나중에는 영어도 공부로 생각하게 될 날이 있겠지만, ", { mark: "아직 우리 아이들은 영어를 공부로 생각하지 않습니다." }, " 학원에서 배우거나 문제집을 풀면서 접하는 것이 아니고, ", { mark: "재미있는 스토리가 있는 만화로 접하기 때문입니다." }]
        ],
        link: "https://www.littlefox.co.kr/ko/testimonials_forum/bbs_view/1291024/1/1/N/null/null/N/"
    },
    {
        theme: { accent: "#7b61d1", soft: "#e8e0fb", avatar: "#ede7fc" },
        image: "https://res.littlefox.co.kr/static/layout/global/img/welcome3/img_chr5.png",
        age: "고3 (여)",
        period: "6세부터 11년 3개월",
        title: "서울대 21학번, 리틀팍스 덕분에 합격했습니다!",
        body: [
            ["[학생] 제가 리틀팍스를 접한 것은 6살입니다. 어머니는 리틀팍스의 다양한 영어 동화를 흘려듣도록 자주 틀어놓으셨습니다. 어느 순간부터, 스스로 리틀팍스 앞에 붙어있는 시간이 길어졌고, ", { mark: "리틀팍스를 듣는 시간은, 제게 '노는 시간'이었습니다." }, " ", { mark: "리틀팍스는 제가 모르는 사이에 '영어에 대한 흥미'도 선사해 주었던 것 같습니다." }, " ", { mark: "판타지 동화를 즐겨보았는데, 관심을 확장해나가, 'Magic tree house'와 같은 영어 원서들도 찾아 읽게 되었고, 결국 제가 영어 소설을 쓰기에 이르렀습니다." }],
            ["신기하게도, 영어점수는 늘 상위권이었습니다. 영어 1등급은 물론이고, 고등학교 1학년 때 4등급이었던 러시아어 성적을 1등급으로 올려놓을 수 있었습니다. 결국, 서울대학교 노어노문학과에 지원하게 되었고, 서울대 합격이라는 결과를 선물받을 수 있었던 것에, 다시 한번 리틀팍스에게 고맙다고 전하고 싶습니다."]
        ],
        link: "https://www.littlefox.co.kr/ko/testimonials_forum/bbs_view/1254912/1/1/N/null/null/N/"
    }
];

noteTabs = userNotes.map((_, index) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "user-note-tab" + (index ? "" : " is-active");
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", index ? "false" : "true");
    tab.textContent = String(index + 1).padStart(2, "0");
    return tab;
});
noteTabList.replaceChildren(...noteTabs);
noteTotal.textContent = String(userNotes.length).padStart(2, "0");

function renderNote(index) {
    const note = userNotes[index];
    noteIndex = index;

    // 넘기는 종이에 복제해도 색이 따라가도록 페이지마다 둔다
    [notePageLeft, notePageRight].forEach(page => {
        Object.entries(note.theme).forEach(([key, value]) => page.style.setProperty("--note-" + key, value));
    });

    notePhoto.src = note.image;
    const age = document.createElement("span");
    const period = document.createElement("span");
    age.textContent = "연령 : " + note.age;
    period.textContent = "이용기간 : " + note.period;
    noteMeta.replaceChildren(age, period);
    noteTitle.textContent = note.title;
    const text = document.createElement("div");
    text.className = "user-note-story-text";
    text.append(...note.body.map(parts => {
        const paragraph = document.createElement("p");
        paragraph.append(...parts.map(part => {
            if (typeof part === "string") return part;
            const mark = document.createElement("mark");
            mark.className = "user-note-highlight";
            mark.textContent = part.mark;
            return mark;
        }));
        return paragraph;
    }));
    noteBody.replaceChildren(text);
    centerNoteText();
    noteLink.href = note.link;
    noteCurrent.textContent = String(index + 1).padStart(2, "0");

    const last = index === userNotes.length - 1;
    notePrev.disabled = index === 0;
    noteNext.disabled = last;
    noteCorner.hidden = last;
    noteTabs.forEach((tab, i) => {
        tab.classList.toggle("is-active", i === index);
        tab.setAttribute("aria-selected", String(i === index));
    });
}

// 본문을 종이 줄 칸 단위로 세로 가운데에 둔다. 칸이 부족하면 첫 줄부터 보여 준다
function centerNoteText() {
    const text = noteBody.querySelector(".user-note-story-text");
    if (!text) return;
    text.style.marginTop = "0px";
    if (noteContent.hidden) return;
    const line = parseFloat(getComputedStyle(noteBody).lineHeight);
    const room = noteBody.clientHeight - text.offsetHeight;
    if (!(line > 0) || room < line) return;
    text.style.marginTop = Math.floor(room / 2 / line) * line + "px";
}

// 넘기는 종이 한 면에 페이지 복제본을 붙인다. page가 없으면 빈 종이
function paperFace(face, page) {
    if (!page) {
        face.replaceChildren();
        return;
    }
    const copy = page.cloneNode(true);
    copy.style.opacity = "";
    copy.style.visibility = "";
    copy.querySelectorAll("[id]").forEach(el => el.removeAttribute("id"));
    face.replaceChildren(copy);
}

// dir 1: 오른쪽 장이 왼쪽으로, -1: 왼쪽 장이 오른쪽으로. 먼저 넘어가는 장이 위에 쌓인다
function prepareFlips(count, dir) {
    noteFlips.forEach((flip, i) => {
        paperFace(flip.children[0]);
        paperFace(flip.children[1]);
        gsap.set(flip, {
            left: dir > 0 ? "50%" : "0%",
            transformOrigin: dir > 0 ? "left center" : "right center",
            transformPerspective: 2400,
            rotationY: 0,
            zIndex: count - i,
            visibility: i < count ? "visible" : "hidden"
        });
    });
}

// 반쯤 넘어갔을 때 z를 올려야 먼저 넘어간 장 위에 다음 장이 쌓인다
function addFlips(tl, count, dir, at, gap, duration) {
    for (let i = 0; i < count; i++) {
        const start = at + i * gap;
        tl.to(noteFlips[i], { rotationY: dir > 0 ? -180 : 180, duration, ease: "power2.inOut" }, start)
            .set(noteFlips[i], { zIndex: 10 + i }, start + duration / 2);
    }
}

function resetFlips() {
    gsap.set(noteFlips, { visibility: "hidden", rotationY: 0 });
    gsap.set(noteHold, { visibility: "hidden" });
    noteFlips.forEach(flip => {
        paperFace(flip.children[0]);
        paperFace(flip.children[1]);
    });
    paperFace(noteHold);
}

function resetBook() {
    if (noteTl) {
        noteTl.kill();
        noteTl = null;
    }
    resetFlips();
    renderNote(0);
    noteContent.hidden = true;
    noteBook.dataset.state = "closed";
    gsap.set(noteBook, { x: 0, xPercent: -25 });
    gsap.set(noteCover, { rotationY: 0, zIndex: 5, transformPerspective: 2400, transformOrigin: "left center" });
    gsap.set(notePageLeft, { autoAlpha: 1 });
    gsap.set([notePencil, noteGuide], { autoAlpha: 0 });
}

// 표지가 넘어간 뒤 속지가 촤라락 넘어가고, 마지막 장 뒷면이 index번 수기의 왼쪽 페이지
function openBook(index = 0) {
    if (switching) return;
    switching = true;
    noteBook.dataset.state = "opening";
    renderNote(index);
    noteContent.hidden = false;
    centerNoteText();

    prepareFlips(noteFlips.length, 1);
    paperFace(noteFlips[noteFlips.length - 1].children[1], notePageLeft);
    gsap.set(notePageLeft, { autoAlpha: 0 });

    if (noteTl) noteTl.kill();
    noteTl = gsap.timeline({
        onComplete: () => {
            gsap.set(notePageLeft, { autoAlpha: 1 });
            resetFlips();
            noteBook.dataset.state = "open";
            switching = false;
        }
    });
    noteTl
        .to(noteBook, { xPercent: 0, duration: 1, ease: "power3.inOut" }, 0)
        .to(noteCover, { rotationY: -180, duration: 1, ease: "power3.inOut" }, 0)
        .set(noteCover, { zIndex: 2 }, .5)
        .to([notePencil, noteGuide], { autoAlpha: 1, duration: .5 }, .8);
    addFlips(noteTl, noteFlips.length, 1, .75, .1, .6);
}

function closeBook() {
    if (switching) return;
    switching = true;

    if (noteTl) noteTl.kill();
    noteTl = gsap.timeline({
        onComplete: () => {
            noteContent.hidden = true;
            gsap.set(notePageLeft, { autoAlpha: 1 });
            noteBook.dataset.state = "closed";
            switching = false;
        }
    });
    noteTl
        .to([notePencil, noteGuide], { autoAlpha: 0, duration: .3 }, 0)
        .to(notePageLeft, { autoAlpha: 0, duration: .2 }, 0)
        .to(noteBook, { xPercent: -25, duration: .9, ease: "power3.inOut" }, .15)
        .to(noteCover, { rotationY: 0, duration: .9, ease: "power3.inOut" }, .15)
        .set(noteCover, { zIndex: 5 }, .6);
}

// 넘어가는 동안 반대쪽 페이지는 이전 내용 복제본(hold)으로 가려 둔다
function goNote(target) {
    if (switching || noteBook.dataset.state !== "open") return;
    if (target === noteIndex || target < 0 || target >= userNotes.length) return;
    switching = true;
    const dir = target > noteIndex ? 1 : -1;
    const count = Math.min(Math.abs(target - noteIndex), noteFlips.length);

    prepareFlips(count, dir);
    paperFace(noteHold, dir > 0 ? notePageLeft : notePageRight);
    gsap.set(noteHold, { left: dir > 0 ? "0%" : "50%", visibility: "visible" });
    paperFace(noteFlips[0].children[0], dir > 0 ? notePageRight : notePageLeft);
    renderNote(target);
    paperFace(noteFlips[count - 1].children[1], dir > 0 ? notePageLeft : notePageRight);

    if (noteTl) noteTl.kill();
    noteTl = gsap.timeline({
        onComplete: () => {
            resetFlips();
            switching = false;
        }
    });
    addFlips(noteTl, count, dir, 0, .12, .75);
}

// ===== 섹션 3 · 들어오고 나가기 =====
function enterSection03() {
    onSection03 = true;
    onSection02 = false;
    switching = true;
    closeStory(false);
    setStoryFloat(true);
    if (section03Tl) section03Tl.kill();
    gsap.set(section03, { visibility: "visible", opacity: 1 });

    section03Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section03Tl.fromTo(section03,
        { y: "100vh" },
        { y: 0, duration: 1, ease: "power3.inOut" });
}

function leaveSection03() {
    onSection03 = false;
    onSection02 = true;
    switching = true;
    closeStory(false);
    setStoryFloat(false);
    if (section03Tl) section03Tl.kill();

    section03Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section03, { visibility: "hidden", opacity: 0, y: 0 });
            switching = false;
        }
    });
    section03Tl.to(section03, { y: "100vh", duration: .9, ease: "power3.inOut" });
}

function enterSection04() {
    onSection04 = true;
    onSection03 = false;
    switching = true;
    closeStory(false);
    if (section04Tl) section04Tl.kill();
    resetBook();
    gsap.set(section04, { visibility: "visible", opacity: 1 });

    section04Tl = gsap.timeline({
        onComplete: () => {
            setStoryFloat(false);
            switching = false;
        }
    });
    section04Tl.fromTo(section04,
        { y: "100vh" },
        { y: 0, duration: 1, ease: "power3.inOut" });
}

function leaveSection04() {
    onSection04 = false;
    onSection03 = true;
    switching = true;
    setStoryFloat(true);
    if (section04Tl) section04Tl.kill();

    section04Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section04, { visibility: "hidden", opacity: 0, y: 0 });
            resetBook();
            switching = false;
        }
    });
    section04Tl.to(section04, { y: "100vh", duration: .9, ease: "power3.inOut" });
}

// ===== 섹션 5 =====
// featured.jpg 원본 184x123 비율 그대로 둬야 잘리지 않는다
const SECTION05_RATIO = 184 / 123;
const section05Ids = [
    ...range(11, 61), ...range(63, 87), ...range(97, 153), ...range(170, 183)
];

function range(from, to) {
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}

// 바깥 열일수록 크고 더 기울여 곡면처럼 보이게 한다. 같은 열은 같은 기울기라 서로 겹치지 않는다
function layoutSection05Screen() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const gap = Math.max(8, vw * .006);
    const baseWidth = vw * .118;
    const growth = .085;

    const columns = [{ col: 0, x: 0, w: baseWidth }];
    for (const side of [-1, 1]) {
        let edge = baseWidth / 2;
        for (let k = 1; edge < vw / 2; k++) {
            const w = baseWidth * (1 + growth * k);
            const x = edge + gap + w / 2;
            columns.push({ col: side * k, x: side * x, w });
            edge = x + w / 2;
        }
    }

    const holeW = section05Copy.offsetWidth * .78 / 2 + vw * .025;
    const holeH = section05Copy.offsetHeight * .78 / 2 + vh * .035;
    const cells = [];
    columns.forEach(({ col, x, w }) => {
        const h = w / SECTION05_RATIO;
        const pitch = h + gap;
        const rows = Math.ceil((vh / 2 + h) / pitch);
        for (let row = -rows; row <= rows; row++) {
            const y = row * pitch;
            if (Math.abs(x) - w / 2 < holeW && Math.abs(y) - h / 2 < holeH) continue;
            if (Math.abs(y) - h / 2 > vh / 2) continue;
            cells.push({ col, x, y, w, h });
        }
    });
    cells.sort((a, b) => Math.hypot(a.x, a.y * 1.4) - Math.hypot(b.x, b.y * 1.4));

    if (section05Thumbs.length !== cells.length) {
        section05Gallery.replaceChildren();
        section05Thumbs = cells.map((_, index) => {
            const thumb = document.createElement("img");
            const id = section05Ids[index % section05Ids.length];
            thumb.className = "section05-thumb";
            thumb.alt = "";
            thumb.src = `https://img.littlefox.co.kr/static/contents/series/FS${String(id).padStart(4, "0")}/featured.jpg`;
            thumb.dataset.src = thumb.src;
            section05Gallery.append(thumb);
            return thumb;
        });
    }

    cells.forEach((cell, index) => {
        const thumb = section05Thumbs[index];
        thumb.style.width = `${cell.w}px`;
        thumb.style.height = `${cell.h}px`;
        thumb.dataset.x = cell.x;
        thumb.dataset.y = cell.y;
        thumb.dataset.w = cell.w;
        thumb.dataset.h = cell.h;
        thumb.dataset.skew = Math.sign(cell.col) * Math.min(Math.abs(cell.col) * 1.8, 9);
        const ringW = holeW + baseWidth * .72;
        const ringH = holeH + baseWidth / SECTION05_RATIO * .85;
        const besideText = Math.abs(cell.x) - cell.w / 2 < ringW && Math.abs(cell.y) - cell.h / 2 < ringH;
        const besideTable = Math.abs(cell.x) - cell.w / 2 < section05Levels.offsetWidth / 2 + vw * .09
            && Math.abs(cell.y) - cell.h / 2 < section05Levels.offsetHeight / 2 + vh * .07;
        thumb.dataset.inner = besideText ? "1" : "";
        thumb.dataset.wide = !besideText && besideTable ? "1" : "";
    });
}

function setSection05Chart(progress) {
    section05Segs.forEach(seg => {
        const value = Number(seg.dataset.value) * progress;
        seg.style.width = `${value}%`;
        seg.querySelector("b").textContent = `${Math.round(value)}%`;
    });
}

function resetSection05() {
    section05Step = 0;
    section05Cast = [];
    layoutSection05Screen();
    gsap.killTweensOf([section05Copy, section05Hint, section05Chart, section05Levels, section05Topics, ...section05TopicReveals, ...section05Thumbs]);
    gsap.set(section05Copy, { y: 0, scale: 1, opacity: 1 });
    gsap.set(section05Chart, { opacity: 0, visibility: "hidden" });
    gsap.set(section05Levels, { opacity: 0, visibility: "hidden", y: 18 });
    gsap.set(section05Topics, { visibility: "hidden" });
    gsap.set(section05TopicReveals, { opacity: 0, y: 16 });
    section05Gallery.style.zIndex = "";
    section05Levels.style.zIndex = "";
    section05Topics.classList.remove("is-ready");
    section05Topics.setAttribute("aria-hidden", "true");
    setSection05Topic(0);
    setSection05Chart(0);
    gsap.set(section05Hint, { opacity: 1, y: 0 });
    section05Thumbs.forEach(thumb => {
        thumb.style.zIndex = "";
        gsap.set(thumb, {
            xPercent: -50,
            yPercent: -50,
            x: Number(thumb.dataset.x) * .35,
            y: Number(thumb.dataset.y) * .35,
            width: Number(thumb.dataset.w),
            height: Number(thumb.dataset.h),
            skewY: 0,
            scale: .4,
            opacity: 0,
            borderRadius: 8
        });
    });
}

function showSection05Gallery() {
    if (section05Step || switching) return;
    section05Step = 1;
    switching = true;
    if (section05Tl) section05Tl.kill();

    section05Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section05Tl
        .to(section05Copy, { scale: .78, duration: 1.05, ease: "power3.inOut" }, 0)
        .to(section05Thumbs, {
            x: (_, thumb) => Number(thumb.dataset.x),
            y: (_, thumb) => Number(thumb.dataset.y),
            skewY: (_, thumb) => Number(thumb.dataset.skew),
            scale: 1,
            opacity: 1,
            duration: .8,
            ease: "power3.out",
            stagger: { amount: .7 }
        }, .05);
}

function hideSection05Gallery() {
    if (!section05Step || switching) return;
    switching = true;
    if (section05Tl) section05Tl.kill();

    section05Tl = gsap.timeline({
        onComplete: () => {
            section05Step = 0;
            switching = false;
        }
    });
    section05Tl
        .to(section05Thumbs, {
            x: (_, thumb) => Number(thumb.dataset.x) * .35,
            y: (_, thumb) => Number(thumb.dataset.y) * .35,
            skewY: 0,
            scale: .4,
            opacity: 0,
            duration: .5,
            ease: "power3.in",
            stagger: { amount: .35, from: "end" }
        })
        .to(section05Copy, { scale: 1, duration: .55, ease: "power3.out" }, "-=.3");
}

function section05InnerThumbs() {
    return section05Thumbs.filter(thumb => thumb.dataset.inner === "1");
}

function openSection05Center() {
    if (section05Step !== 1 || switching) return;
    section05Step = 2;
    switching = true;
    if (section05Tl) section05Tl.kill();

    const chartProgress = { value: 0 };
    gsap.set(section05Chart, { visibility: "visible" });
    section05Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section05Tl
        .to(section05Copy, { opacity: 0, duration: .4, ease: "power2.in" }, 0)
        .to(section05InnerThumbs(), {
            opacity: 0,
            scale: .86,
            duration: .45,
            ease: "power2.in",
            stagger: { amount: .22, from: "center" }
        }, 0)
        .to(section05Chart, { opacity: 1, duration: .35 }, .22)
        .to(chartProgress, {
            value: 1,
            duration: 1.05,
            ease: "power2.out",
            onUpdate: () => setSection05Chart(chartProgress.value)
        }, .28);
}

function closeSection05Center() {
    if (section05Step !== 2 || switching) return;
    switching = true;
    if (section05Tl) section05Tl.kill();

    const chartProgress = { value: 1 };
    section05Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section05Chart, { visibility: "hidden" });
            section05Step = 1;
            switching = false;
        }
    });
    section05Tl
        .to(chartProgress, {
            value: 0,
            duration: .45,
            ease: "power2.in",
            onUpdate: () => setSection05Chart(chartProgress.value)
        }, 0)
        .to(section05Chart, { opacity: 0, duration: .3 }, 0)
        .to(section05InnerThumbs(), {
            opacity: 1,
            scale: 1,
            duration: .4,
            ease: "power2.out",
            stagger: { amount: .18, from: "center" }
        }, .12)
        .to(section05Copy, { opacity: 1, duration: .4, ease: "power2.out" }, .16);
}

function section05WideThumbs() {
    return section05Thumbs.filter(thumb => thumb.dataset.wide === "1");
}

function showSection05Levels() {
    if (section05Step !== 2 || switching) return;
    section05Step = 3;
    switching = true;
    if (section05Tl) section05Tl.kill();

    gsap.set(section05Levels, { visibility: "visible", y: 18 });
    section05Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section05Chart, { visibility: "hidden" });
            switching = false;
        }
    });
    section05Tl
        .to(section05WideThumbs(), {
            x: (_, thumb) => Number(thumb.dataset.x) * 1.45,
            y: (_, thumb) => Number(thumb.dataset.y) * 1.45,
            opacity: 0,
            scale: .55,
            duration: .55,
            ease: "power2.in",
            stagger: { amount: .22, from: "center" }
        }, 0)
        .to(section05Chart, { opacity: 0, duration: .3 }, 0)
        .to(section05Levels, { opacity: 1, y: 0, duration: .55, ease: "power2.out" }, .18);
}

function hideSection05Levels() {
    if (section05Step !== 3 || switching) return;
    switching = true;
    if (section05Tl) section05Tl.kill();

    gsap.set(section05Chart, { visibility: "visible" });
    section05Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section05Levels, { visibility: "hidden" });
            section05Step = 2;
            switching = false;
        }
    });
    section05Tl
        .to(section05Levels, { opacity: 0, y: 18, duration: .3, ease: "power2.in" }, 0)
        .to(section05Chart, { opacity: 1, duration: .35 }, .12)
        .to(section05WideThumbs(), {
            x: (_, thumb) => Number(thumb.dataset.x),
            y: (_, thumb) => Number(thumb.dataset.y),
            opacity: 1,
            scale: 1,
            duration: .45,
            ease: "power2.out",
            stagger: { amount: .16, from: "center" }
        }, .12);
}

// 소개 페이지 '동화 주제별 구성'의 편수, 작품, 썸네일
const section05TopicData = [
    { name: "세계명작", count: "1,542", lines: ["오래 사랑받아 온 이야기들을", "영어 동화로 만나보세요."], stories: [
        { title: "피터 래빗", src: "https://img.littlefox.co.kr/static/contents/series/FS0087/featured.jpg" },
        { title: "미녀와 야수", src: "https://img.littlefox.co.kr/static/contents/series/FS0176/featured.jpg" },
        { title: "벨벳 토끼", src: "https://img.littlefox.co.kr/static/contents/series/FS0126/featured.jpg" },
        { title: "버드나무에 부는 바람", src: "https://img.littlefox.co.kr/static/contents/series/FS0046/featured.jpg" },
        { title: "행복한 왕자", src: "https://img.littlefox.co.kr/static/contents/series/FS0181/featured.jpg" },
        { title: "홍길동전", src: "https://img.littlefox.co.kr/static/contents/series/FS0153/featured.jpg" },
        { title: "가벼운 공주", src: "https://img.littlefox.co.kr/static/contents/series/FS0113/featured.jpg" },
        { title: "엄지공주", src: "https://img.littlefox.co.kr/static/contents/series/FS0044/featured.jpg" },
        { title: "소원 들어주는 우물", src: "https://img.littlefox.co.kr/static/contents/series/FS0039/featured.jpg" },
        { title: "닥터 두리틀", src: "https://img.littlefox.co.kr/static/contents/series/FS0028/featured.jpg" },
        { title: "삼국지", src: "https://img.littlefox.co.kr/static/contents/series/FS0182/featured.jpg" },
        { title: "서유기", src: "https://img.littlefox.co.kr/static/contents/series/FS0078/featured.jpg" },
        { title: "이상한 나라의 앨리스", src: "https://img.littlefox.co.kr/static/contents/series/FS0106/featured.jpg" },
        { title: "정글북", src: "https://img.littlefox.co.kr/static/contents/series/FS0097/featured.jpg" },
        { title: "마법에 걸린 성", src: "https://img.littlefox.co.kr/static/contents/series/FS0069/featured.jpg" },
        { title: "걸리버 여행기", src: "https://img.littlefox.co.kr/static/contents/series/FS0041/featured.jpg" },
        { title: "플란더스의 개", src: "https://img.littlefox.co.kr/static/contents/series/FS0038/featured.jpg" },
        { title: "기찻길 옆 아이들", src: "https://img.littlefox.co.kr/static/contents/series/FS0030/featured.jpg" },
        { title: "피노키오", src: "https://img.littlefox.co.kr/static/contents/series/FS0029/featured.jpg" },
        { title: "하이디", src: "https://img.littlefox.co.kr/static/contents/series/FS0035/featured.jpg" },
        { title: "인어공주", src: "https://img.littlefox.co.kr/static/contents/series/FS0013/featured.jpg" },
        { title: "크리스마스 캐럴", src: "https://img.littlefox.co.kr/static/contents/series/FS0174/featured.jpg" },
        { title: "왕자와 거지", src: "https://img.littlefox.co.kr/static/contents/series/FS0152/featured.jpg" },
        { title: "소공자", src: "https://img.littlefox.co.kr/static/contents/series/FS0122/featured.jpg" },
        { title: "폴리아나", src: "https://img.littlefox.co.kr/static/contents/series/FS0116/featured.jpg" },
        { title: "키다리 아저씨", src: "https://img.littlefox.co.kr/static/contents/series/FS0103/featured.jpg" },
        { title: "피터 팬", src: "https://img.littlefox.co.kr/static/contents/series/FS0025/featured.jpg" },
        { title: "소공녀", src: "https://img.littlefox.co.kr/static/contents/series/FS0079/featured.jpg" },
        { title: "비밀의 화원", src: "https://img.littlefox.co.kr/static/contents/series/FS0051/featured.jpg" },
        { title: "블랙 뷰티", src: "https://img.littlefox.co.kr/static/contents/series/FS0049/featured.jpg" },
        { title: "오즈의 마법사", src: "https://img.littlefox.co.kr/static/contents/series/FS0031/featured.jpg" },
        { title: "톰 소여의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0032/featured.jpg" },
        { title: "스위스의 로빈슨 가족", src: "https://img.littlefox.co.kr/static/contents/series/FS0072/featured.jpg" },
        { title: "80일간의 세계일주", src: "https://img.littlefox.co.kr/static/contents/series/FS0037/featured.jpg" },
        { title: "안데르센 & 다른 작가 동화", src: "https://img.littlefox.co.kr/static/contents/series/FS0132/featured.jpg" },
        { title: "작은 신사들", src: "https://img.littlefox.co.kr/static/contents/series/FS0108/featured.jpg" },
        { title: "허클베리 핀의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0026/featured.jpg" },
        { title: "빨간 머리 앤", src: "https://img.littlefox.co.kr/static/contents/series/FS0033/featured.jpg" },
        { title: "보물섬", src: "https://img.littlefox.co.kr/static/contents/series/FS0043/featured.jpg" },
        { title: "작은 아씨들", src: "https://img.littlefox.co.kr/static/contents/series/FS0040/featured.jpg" },
        { title: "셜록 홈즈", src: "https://img.littlefox.co.kr/static/contents/series/FS0022/featured.jpg" },
        { title: "왕자와 거지", src: "https://img.littlefox.co.kr/static/contents/series/FS0015/featured.jpg" },
        { title: "올리버 트위스트", src: "https://img.littlefox.co.kr/static/contents/series/FS0058/featured.jpg" },
        { title: "늑대개 화이트팽", src: "https://img.littlefox.co.kr/static/contents/series/FS0082/featured.jpg" },
        { title: "오스카 와일드", src: "https://img.littlefox.co.kr/static/contents/series/FS0021/featured.jpg" },
        { title: "제인 에어", src: "https://img.littlefox.co.kr/static/contents/series/FS0061/featured.jpg" },
        { title: "괴도 루팡", src: "https://img.littlefox.co.kr/static/contents/series/FS0020/featured.jpg" },
        { title: "셰익스피어", src: "https://img.littlefox.co.kr/static/contents/series/FS0019/featured.jpg" },
        { title: "오페라의 유령", src: "https://img.littlefox.co.kr/static/contents/series/FS0115/featured.jpg" },
        { title: "레 미제라블", src: "https://img.littlefox.co.kr/static/contents/series/FS0076/featured.jpg" },
        { title: "위대한 유산", src: "https://img.littlefox.co.kr/static/contents/series/FS0052/featured.jpg" },
        { title: "그리스 신화", src: "https://img.littlefox.co.kr/static/contents/series/FS0017/featured.jpg" },
        { title: "해저 2만리", src: "https://img.littlefox.co.kr/static/contents/series/FS0068/featured.jpg" },
        { title: "오 헨리", src: "https://img.littlefox.co.kr/static/contents/series/FS0018/featured.jpg" },
        { title: "드라큘라", src: "https://img.littlefox.co.kr/static/contents/series/FS0016/featured.jpg" }
    ] },
    { name: "전래동화·공주", count: "296", lines: ["오래 전해 온 이야기와 공주 이야기를", "영어 동화로 만나보세요."], stories: [
        { title: "라푼젤", src: "https://img.littlefox.co.kr/static/contents/series/FS0125/featured.jpg" },
        { title: "장화 신은 고양이", src: "https://img.littlefox.co.kr/static/contents/series/FS0105/featured.jpg" },
        { title: "잭과 콩나무", src: "https://img.littlefox.co.kr/static/contents/series/FS0107/featured.jpg" },
        { title: "신데렐라", src: "https://img.littlefox.co.kr/static/contents/series/FS0100/featured.jpg" },
        { title: "백설공주와 일곱 난쟁이", src: "https://img.littlefox.co.kr/static/contents/series/FS0101/featured.jpg" },
        { title: "전래동화 1", src: "https://img.littlefox.co.kr/static/contents/series/FS0134/featured.jpg" },
        { title: "이솝우화", src: "https://img.littlefox.co.kr/static/contents/series/FS0131/featured.jpg" },
        { title: "알라딘", src: "https://img.littlefox.co.kr/static/contents/series/FS0045/featured.jpg" },
        { title: "로빈 후드의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0099/featured.jpg" },
        { title: "전래동화 2", src: "https://img.littlefox.co.kr/static/contents/series/FS0135/featured.jpg" },
        { title: "미녀와 야수", src: "https://img.littlefox.co.kr/static/contents/series/FS0176/featured.jpg" },
        { title: "가벼운 공주", src: "https://img.littlefox.co.kr/static/contents/series/FS0113/featured.jpg" },
        { title: "엄지공주", src: "https://img.littlefox.co.kr/static/contents/series/FS0044/featured.jpg" },
        { title: "인어공주", src: "https://img.littlefox.co.kr/static/contents/series/FS0013/featured.jpg" }
    ] },
    { name: "판타지·공상과학", count: "1,200", lines: ["상상 속 세계와 신기한 과학을", "영어 동화로 만나보세요."], stories: [
        { title: "제인과 핍의 달콤한 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0179/featured.jpg" },
        { title: "옛날이야기 마법 헛간", src: "https://img.littlefox.co.kr/static/contents/series/FS0123/featured.jpg" },
        { title: "우주 순찰대", src: "https://img.littlefox.co.kr/static/contents/series/FS0104/featured.jpg" },
        { title: "매직 마커", src: "https://img.littlefox.co.kr/static/contents/series/FS0012/featured.jpg" },
        { title: "슈퍼히어로 로봇", src: "https://img.littlefox.co.kr/static/contents/series/FS0170/featured.jpg" },
        { title: "벨벳 토끼", src: "https://img.littlefox.co.kr/static/contents/series/FS0126/featured.jpg" },
        { title: "생일 요정", src: "https://img.littlefox.co.kr/static/contents/series/FS0114/featured.jpg" },
        { title: "마법사와 고양이", src: "https://img.littlefox.co.kr/static/contents/series/FS0083/featured.jpg" },
        { title: "대니의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0034/featured.jpg" },
        { title: "소원 들어주는 우물", src: "https://img.littlefox.co.kr/static/contents/series/FS0039/featured.jpg" },
        { title: "이상한 나라의 앨리스", src: "https://img.littlefox.co.kr/static/contents/series/FS0106/featured.jpg" },
        { title: "마법에 걸린 성", src: "https://img.littlefox.co.kr/static/contents/series/FS0069/featured.jpg" },
        { title: "알라딘", src: "https://img.littlefox.co.kr/static/contents/series/FS0045/featured.jpg" },
        { title: "지구에 온 앨리", src: "https://img.littlefox.co.kr/static/contents/series/FS0117/featured.jpg" },
        { title: "몬스터 아카데미", src: "https://img.littlefox.co.kr/static/contents/series/FS0086/featured.jpg" },
        { title: "피터 팬", src: "https://img.littlefox.co.kr/static/contents/series/FS0025/featured.jpg" },
        { title: "오즈의 마법사", src: "https://img.littlefox.co.kr/static/contents/series/FS0031/featured.jpg" },
        { title: "레드 매직", src: "https://img.littlefox.co.kr/static/contents/series/FS0059/featured.jpg" },
        { title: "올림픽 챔피언", src: "https://img.littlefox.co.kr/static/contents/series/FS0077/featured.jpg" },
        { title: "해저 2만리", src: "https://img.littlefox.co.kr/static/contents/series/FS0068/featured.jpg" }
    ] },
    { name: "슈퍼히어로·모험", count: "1,033", lines: ["용감한 영웅과 신나는 모험을", "영어 동화로 만나보세요."], stories: [
        { title: "슈퍼히어로 로봇", src: "https://img.littlefox.co.kr/static/contents/series/FS0170/featured.jpg" },
        { title: "홍길동전", src: "https://img.littlefox.co.kr/static/contents/series/FS0153/featured.jpg" },
        { title: "로켓걸", src: "https://img.littlefox.co.kr/static/contents/series/FS0065/featured.jpg" },
        { title: "로켓걸의 갤럭시 스쿼드 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0120/featured.jpg" },
        { title: "서유기", src: "https://img.littlefox.co.kr/static/contents/series/FS0078/featured.jpg" },
        { title: "로켓걸의 서유기 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0110/featured.jpg" },
        { title: "코라의 나침반", src: "https://img.littlefox.co.kr/static/contents/series/FS0124/featured.jpg" },
        { title: "우주 순찰대", src: "https://img.littlefox.co.kr/static/contents/series/FS0104/featured.jpg" },
        { title: "서부로 가다", src: "https://img.littlefox.co.kr/static/contents/series/FS0173/featured.jpg" },
        { title: "대니의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0034/featured.jpg" },
        { title: "삼국지", src: "https://img.littlefox.co.kr/static/contents/series/FS0182/featured.jpg" },
        { title: "데이지 두리틀", src: "https://img.littlefox.co.kr/static/contents/series/FS0175/featured.jpg" },
        { title: "걸리버 여행기", src: "https://img.littlefox.co.kr/static/contents/series/FS0041/featured.jpg" },
        { title: "피노키오", src: "https://img.littlefox.co.kr/static/contents/series/FS0029/featured.jpg" },
        { title: "로빈 후드의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0099/featured.jpg" },
        { title: "톰 소여의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0032/featured.jpg" },
        { title: "스위스의 로빈슨 가족", src: "https://img.littlefox.co.kr/static/contents/series/FS0072/featured.jpg" },
        { title: "80일간의 세계일주", src: "https://img.littlefox.co.kr/static/contents/series/FS0037/featured.jpg" },
        { title: "허클베리 핀의 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0026/featured.jpg" },
        { title: "보물섬", src: "https://img.littlefox.co.kr/static/contents/series/FS0043/featured.jpg" }
    ] },
    { name: "미스터리·탐정", count: "328", lines: ["수수께끼를 풀어 가는 이야기를", "영어 동화로 만나보세요."], stories: [
        { title: "몬스터 아카데미", src: "https://img.littlefox.co.kr/static/contents/series/FS0086/featured.jpg" },
        { title: "레모네이드 탐정단", src: "https://img.littlefox.co.kr/static/contents/series/FS0055/featured.jpg" },
        { title: "셜록 홈즈", src: "https://img.littlefox.co.kr/static/contents/series/FS0022/featured.jpg" },
        { title: "괴도 루팡", src: "https://img.littlefox.co.kr/static/contents/series/FS0020/featured.jpg" },
        { title: "오페라의 유령", src: "https://img.littlefox.co.kr/static/contents/series/FS0115/featured.jpg" },
        { title: "드라큘라", src: "https://img.littlefox.co.kr/static/contents/series/FS0016/featured.jpg" }
    ] },
    { name: "공룡·자동차·동물", count: "570", lines: ["좋아하는 공룡, 자동차, 동물을", "영어 동화로 만나보세요."], stories: [
        { title: "공룡 친구들", src: "https://img.littlefox.co.kr/static/contents/series/FS0102/featured.jpg" },
        { title: "공룡을 만나요", src: "https://img.littlefox.co.kr/static/contents/series/FS0177/featured.jpg" },
        { title: "타이어타운스쿨", src: "https://img.littlefox.co.kr/static/contents/series/FS0084/featured.jpg" },
        { title: "배트와 친구들", src: "https://img.littlefox.co.kr/static/contents/series/FS0056/featured.jpg" },
        { title: "코라의 나침반", src: "https://img.littlefox.co.kr/static/contents/series/FS0124/featured.jpg" },
        { title: "동물 친구들", src: "https://img.littlefox.co.kr/static/contents/series/FS0074/featured.jpg" },
        { title: "야생동물 대모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0180/featured.jpg" },
        { title: "닥터 두리틀", src: "https://img.littlefox.co.kr/static/contents/series/FS0028/featured.jpg" },
        { title: "정글북", src: "https://img.littlefox.co.kr/static/contents/series/FS0097/featured.jpg" },
        { title: "블랙 뷰티", src: "https://img.littlefox.co.kr/static/contents/series/FS0049/featured.jpg" },
        { title: "늑대개 화이트팽", src: "https://img.littlefox.co.kr/static/contents/series/FS0082/featured.jpg" },
        { title: "땅에 사는 동물", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00041/featured.jpg" },
        { title: "물에 사는 동물", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00042/featured.jpg" },
        { title: "곤충 & 기타", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00043/featured.jpg" }
    ] },
    { name: "가족·이웃·우정", count: "1,247", lines: ["가족과 친구 이야기를", "영어 동화로 만나보세요."], stories: [
        { title: "샘과 강아지 럭키", src: "https://img.littlefox.co.kr/static/contents/series/FS0014/featured.jpg" },
        { title: "개구쟁이 리키", src: "https://img.littlefox.co.kr/static/contents/series/FS0036/featured.jpg" },
        { title: "카터 패밀리", src: "https://img.littlefox.co.kr/static/contents/series/FS0067/featured.jpg" },
        { title: "하나의 앨범", src: "https://img.littlefox.co.kr/static/contents/series/FS0027/featured.jpg" },
        { title: "놀라운 발명가 이기", src: "https://img.littlefox.co.kr/static/contents/series/FS0066/featured.jpg" },
        { title: "윌로우크릭 쌍둥이", src: "https://img.littlefox.co.kr/static/contents/series/FS0048/featured.jpg" },
        { title: "기찻길 옆 아이들", src: "https://img.littlefox.co.kr/static/contents/series/FS0030/featured.jpg" },
        { title: "작은 신사들", src: "https://img.littlefox.co.kr/static/contents/series/FS0108/featured.jpg" },
        { title: "작은 아씨들", src: "https://img.littlefox.co.kr/static/contents/series/FS0040/featured.jpg" },
        { title: "가족", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00024/featured.jpg" },
        { title: "이웃", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00025/featured.jpg" },
        { title: "안전 & 기타", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00026/featured.jpg" },
        { title: "안녕 컵케이크!", src: "https://img.littlefox.co.kr/static/contents/series/FS0172/featured.jpg" },
        { title: "공룡 친구들", src: "https://img.littlefox.co.kr/static/contents/series/FS0102/featured.jpg" },
        { title: "배트와 친구들", src: "https://img.littlefox.co.kr/static/contents/series/FS0056/featured.jpg" },
        { title: "버드와 킵의 하루", src: "https://img.littlefox.co.kr/static/contents/series/FS0064/featured.jpg" },
        { title: "말하는 강아지 네로", src: "https://img.littlefox.co.kr/static/contents/series/FS0183/featured.jpg" },
        { title: "사우스 스트릿 스쿨", src: "https://img.littlefox.co.kr/static/contents/series/FS0054/featured.jpg" },
        { title: "버드나무에 부는 바람", src: "https://img.littlefox.co.kr/static/contents/series/FS0046/featured.jpg" },
        { title: "에버그린 캠프", src: "https://img.littlefox.co.kr/static/contents/series/FS0178/featured.jpg" },
        { title: "하이디", src: "https://img.littlefox.co.kr/static/contents/series/FS0035/featured.jpg" },
        { title: "지구에 온 앨리", src: "https://img.littlefox.co.kr/static/contents/series/FS0117/featured.jpg" },
        { title: "빨간 머리 앤", src: "https://img.littlefox.co.kr/static/contents/series/FS0033/featured.jpg" },
        { title: "우정", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00027/featured.jpg" }
    ] },
    { name: "인물·역사", count: "371", lines: ["사람의 삶과 역사 속 이야기를", "영어 동화로 만나보세요."], stories: [
        { title: "역사 속의 슈퍼스타", src: "https://img.littlefox.co.kr/static/contents/series/FS0109/featured.jpg" },
        { title: "뉴스 속의 인물들", src: "https://img.littlefox.co.kr/static/contents/series/FS0075/featured.jpg" },
        { title: "과학자 & 발명가", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00028/featured.jpg" },
        { title: "기업가 & 선구자", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00029/featured.jpg" },
        { title: "예술가 & 작가", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00030/featured.jpg" },
        { title: "환경 & 인권 운동가", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00031/featured.jpg" },
        { title: "지도자", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00032/featured.jpg" },
        { title: "사진 여행: 역사 속으로", src: "https://img.littlefox.co.kr/static/contents/series/FS0042/featured.jpg" },
        { title: "할아버지의 역사 이야기", src: "https://img.littlefox.co.kr/static/contents/series/FS0050/featured.jpg" },
        { title: "나의 삶: 역사 속의 직업들", src: "https://img.littlefox.co.kr/static/contents/series/FS0023/featured.jpg" },
        { title: "세계를 뒤흔든 재난", src: "https://img.littlefox.co.kr/static/contents/series/FS0063/featured.jpg" },
        { title: "세계 역사", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00033/featured.jpg" },
        { title: "문화 역사", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00034/featured.jpg" }
    ] },
    { name: "과학·자연·예술·문화", count: "254", lines: ["과학, 자연, 예술과 문화를", "영어 동화로 만나보세요."], stories: [
        { title: "큐티의 과학 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0047/featured.jpg" },
        { title: "지구 & 우주", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00035/featured.jpg" },
        { title: "기술", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00036/featured.jpg" },
        { title: "인체 & 건강", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00037/featured.jpg" },
        { title: "날씨 & 계절", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00038/featured.jpg" },
        { title: "환경", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00039/featured.jpg" },
        { title: "식물", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00040/featured.jpg" },
        { title: "놀라운 세계 명소", src: "https://img.littlefox.co.kr/static/contents/series/FS0057/featured.jpg" },
        { title: "유럽 & 아프리카", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00050/featured.jpg" },
        { title: "아시아 & 아메리카", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00051/featured.jpg" },
        { title: "스포트라이트", src: "https://img.littlefox.co.kr/static/contents/series/FS0098/featured.jpg" },
        { title: "예술", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00047/featured.jpg" },
        { title: "문화", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00048/featured.jpg" },
        { title: "명절 & 기념일", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00049/featured.jpg" }
    ] },
    { name: "파닉스·읽기 학습", count: "471", lines: ["소리와 글자를 익히는 이야기를", "영어 동화로 만나보세요."], stories: [
        { title: "ABC 북", src: "https://img.littlefox.co.kr/static/contents/series/FS0070/featured.jpg" },
        { title: "워드 패밀리", src: "https://img.littlefox.co.kr/static/contents/series/FS0071/featured.jpg" },
        { title: "제인과 핍의 달콤한 모험", src: "https://img.littlefox.co.kr/static/contents/series/FS0179/featured.jpg" },
        { title: "레터팀", src: "https://img.littlefox.co.kr/static/contents/series/FS0118/featured.jpg" },
        { title: "파닉스 스토리 1", src: "https://img.littlefox.co.kr/static/contents/series/FS0111/featured.jpg" },
        { title: "파닉스 스토리 2", src: "https://img.littlefox.co.kr/static/contents/series/FS0112/featured.jpg" },
        { title: "블롭들", src: "https://img.littlefox.co.kr/static/contents/series/FS0127/featured.jpg" },
        { title: "나는 어디에 있을까요?", src: "https://img.littlefox.co.kr/static/contents/series/FS0080/featured.jpg" },
        { title: "나는 누구일까요?", src: "https://img.littlefox.co.kr/static/contents/series/FS0081/featured.jpg" },
        { title: "초록 숲 친구들", src: "https://img.littlefox.co.kr/static/contents/series/FS0073/featured.jpg" },
        { title: "나의 첫 영어책 1", src: "https://img.littlefox.co.kr/static/contents/series/FS0128/featured.jpg" },
        { title: "나의 첫 영어책 2", src: "https://img.littlefox.co.kr/static/contents/series/FS0129/featured.jpg" },
        { title: "나의 첫 영어책 3", src: "https://img.littlefox.co.kr/static/contents/series/FS0130/featured.jpg" }
    ] },
    { name: "생활영어", count: "353", lines: ["일상에서 쓰는 표현을", "영어 동화로 만나보세요."], stories: [
        { title: "켈리 선생님반 아이들", src: "https://img.littlefox.co.kr/static/contents/series/FS0011/featured.jpg" },
        { title: "옛날이야기 마법 헛간", src: "https://img.littlefox.co.kr/static/contents/series/FS0123/featured.jpg" },
        { title: "개구쟁이 리키", src: "https://img.littlefox.co.kr/static/contents/series/FS0036/featured.jpg" },
        { title: "매직 마커", src: "https://img.littlefox.co.kr/static/contents/series/FS0012/featured.jpg" },
        { title: "하나의 앨범", src: "https://img.littlefox.co.kr/static/contents/series/FS0027/featured.jpg" }
    ] },
    { name: "기초 학습", count: "141", lines: ["처음 영어를 만나는 이야기를", "영어 동화로 만나보세요."], stories: [
        { title: "숫자 & 시간", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00052/featured.jpg" },
        { title: "모양 & 색깔", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00053/featured.jpg" },
        { title: "동물", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00054/featured.jpg" },
        { title: "음식 & 물건", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00055/featured.jpg" },
        { title: "직업 & 장소", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00056/featured.jpg" },
        { title: "신체 & 안전", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00057/featured.jpg" },
        { title: "날씨 & 계절", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00058/featured.jpg" },
        { title: "놀이 & 활동", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00059/featured.jpg" },
        { title: "반대 & 비교", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00060/featured.jpg" },
        { title: "가족 & 기타", src: "https://img.littlefox.co.kr/static/contents/topic/SRV00061/featured.jpg" }
    ] }
];

// 주제 버튼·편수·작품 제목은 section05TopicData만 쓴다
section05Topics.querySelector(".section05-topics-chips").replaceChildren(...section05TopicData.map((topic, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = topic.name;
    if (!index) button.classList.add("is-active");
    button.setAttribute("aria-pressed", index ? "false" : "true");
    return button;
}));
section05TopicButtons = [...section05Topics.querySelectorAll(".section05-topics-chips button")];
setSection05Topic(0);

function section05VisibleStories() {
    const stories = section05TopicData[section05TopicIndex].stories;
    return section05TopicLabels.map((_, labelIndex) => stories[(section05TopicOffset + labelIndex) % stories.length]);
}

function applySection05TopicSlides(animate) {
    const visible = section05VisibleStories();
    section05TopicLabels.forEach((label, labelIndex) => {
        label.textContent = visible[labelIndex].title;
    });
    if (!section05Cast.length) return;
    section05Cast.forEach((thumb, thumbIndex) => {
        thumb.src = visible[thumbIndex].src;
    });
    if (animate) gsap.fromTo(section05Cast, { opacity: .2 }, { opacity: 1, duration: .35, overwrite: "auto" });
}

function setSection05Topic(index) {
    const topic = section05TopicData[index];
    if (!topic) return;
    section05TopicIndex = index;
    section05TopicOffset = 0;
    section05TopicButtons.forEach((button, buttonIndex) => {
        const active = buttonIndex === index;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    section05TopicName.textContent = topic.name;
    section05TopicCount.textContent = topic.count;
    section05TopicDesc.replaceChildren();
    topic.lines.forEach((line, lineIndex) => {
        if (lineIndex) section05TopicDesc.append(document.createElement("br"));
        section05TopicDesc.append(line);
    });
    applySection05TopicSlides(section05Cast.length > 0);
}

function moveSection05Topic(dir) {
    const total = section05TopicData[section05TopicIndex].stories.length;
    section05TopicOffset = (section05TopicOffset + dir + total) % total;
    applySection05TopicSlides(true);
}

section05Topics.querySelector(".section05-topics-chips").addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button || !section05Topics.classList.contains("is-ready") || button.classList.contains("is-active")) return;
    const index = section05TopicButtons.indexOf(button);
    if (index < 0) return;
    setSection05Topic(index);
});

section05Topics.querySelector(".section05-topics-nav").addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button || !section05Topics.classList.contains("is-ready")) return;
    moveSection05Topic(Number(button.dataset.dir));
});

function section05SlotPoints() {
    const root = section05.getBoundingClientRect();
    const originX = root.left + root.width / 2;
    const originY = root.top + root.height / 2;
    return [...section05Topics.querySelectorAll(".section05-slot-frame")].map(frame => {
        const rect = frame.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2 - originX,
            y: rect.top + rect.height / 2 - originY,
            w: rect.width,
            h: rect.height
        };
    });
}

function section05PickCast(count, targetY) {
    const visible = section05Thumbs.filter(thumb => thumb.dataset.inner !== "1" && thumb.dataset.wide !== "1");
    const pool = visible.length >= count ? visible : section05Thumbs;
    const nearest = [...pool].sort((a, b) => {
        const delta = Math.abs(Number(a.dataset.y) - targetY) - Math.abs(Number(b.dataset.y) - targetY);
        return delta || Number(a.dataset.x) - Number(b.dataset.x);
    }).slice(0, Math.max(count * 4, count));
    nearest.sort((a, b) => Number(a.dataset.x) - Number(b.dataset.x));
    if (nearest.length <= count) return nearest;
    const picked = [];
    const used = new Set();
    for (let index = 0; index < count; index++) {
        let at = Math.round((index * (nearest.length - 1)) / Math.max(count - 1, 1));
        for (let guard = 0; used.has(at) && guard < nearest.length; guard++) at = (at + 1) % nearest.length;
        if (used.has(at)) break;
        used.add(at);
        picked.push(nearest[at]);
    }
    return picked;
}

function showSection05Topics() {
    if (section05Step !== 3 || switching) return;
    section05Step = 4;
    switching = true;
    if (section05Tl) section05Tl.kill();

    gsap.set(section05Topics, { visibility: "visible" });
    gsap.set(section05TopicReveals, { opacity: 0, y: 16 });
    section05Gallery.style.zIndex = "4";
    section05Levels.style.zIndex = "3";
    const points = section05SlotPoints();
    const targetY = points.reduce((sum, point) => sum + point.y, 0) / points.length;
    section05Cast = section05PickCast(points.length, targetY);
    applySection05TopicSlides(false);
    const rest = section05Thumbs.filter(thumb => !section05Cast.includes(thumb) && thumb.dataset.inner !== "1" && thumb.dataset.wide !== "1");

    section05Tl = gsap.timeline({
        onComplete: () => {
            section05Topics.classList.add("is-ready");
            section05Topics.setAttribute("aria-hidden", "false");
            gsap.set(section05Levels, { visibility: "hidden" });
            switching = false;
        }
    });
    section05Tl
        .to(section05Levels, { opacity: 0, y: 14, duration: .32, ease: "power2.in" }, 0)
        .to(rest, {
            x: (_, thumb) => Number(thumb.dataset.x) * .9,
            y: (_, thumb) => Number(thumb.dataset.y) * .86,
            skewY: 0,
            opacity: 0,
            scale: .9,
            duration: .62,
            ease: "power2.inOut"
        }, 0)
        .to(section05TopicReveals, {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power2.out",
            stagger: { each: .03 }
        }, .3);

    section05Cast.forEach((thumb, index) => {
        const point = points[index];
        section05Tl.to(thumb, {
            x: point.x,
            y: point.y,
            width: point.w,
            height: point.h,
            skewY: 0,
            scale: 1,
            opacity: 1,
            borderRadius: 14,
            zIndex: 8,
            duration: 1,
            ease: "power3.inOut"
        }, index * .04);
    });
}

function hideSection05Topics() {
    if (section05Step !== 4 || switching) return;
    switching = true;
    section05Topics.classList.remove("is-ready");
    section05Topics.setAttribute("aria-hidden", "true");
    if (section05Tl) section05Tl.kill();

    const cast = section05Cast.slice();
    cast.forEach(thumb => { if (thumb.dataset.src) thumb.src = thumb.dataset.src; });
    const rest = section05Thumbs.filter(thumb => !cast.includes(thumb) && thumb.dataset.inner !== "1" && thumb.dataset.wide !== "1");
    gsap.set(section05Levels, { visibility: "visible" });
    section05Tl = gsap.timeline({
        onComplete: () => {
            cast.forEach(thumb => { thumb.style.zIndex = ""; });
            section05Gallery.style.zIndex = "";
            section05Levels.style.zIndex = "";
            gsap.set(section05Topics, { visibility: "hidden" });
            section05Cast = [];
            section05Step = 3;
            switching = false;
        }
    });
    section05Tl
        .to(section05TopicReveals, { opacity: 0, y: 12, duration: .28, ease: "power2.in" }, 0)
        .to(rest, {
            x: (_, thumb) => Number(thumb.dataset.x),
            y: (_, thumb) => Number(thumb.dataset.y),
            skewY: (_, thumb) => Number(thumb.dataset.skew),
            opacity: 1,
            scale: 1,
            duration: .55,
            ease: "power2.out"
        }, .06)
        .to(section05Levels, { opacity: 1, y: 0, duration: .45, ease: "power2.out" }, .18);

    cast.forEach((thumb, index) => {
        section05Tl.to(thumb, {
            x: Number(thumb.dataset.x),
            y: Number(thumb.dataset.y),
            width: Number(thumb.dataset.w),
            height: Number(thumb.dataset.h),
            skewY: Number(thumb.dataset.skew),
            scale: 1,
            opacity: 1,
            borderRadius: 8,
            duration: .72,
            ease: "power3.inOut"
        }, index * .03);
    });
}

function enterSection05() {
    onSection05 = true;
    onSection04 = false;
    switching = true;
    if (section05Tl) section05Tl.kill();
    resetSection05();
    gsap.set(section05, { visibility: "visible", opacity: 0 });

    section05Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section05Tl.to(section05, { opacity: 1, duration: .7, ease: "power2.inOut" });
}

function leaveSection05() {
    onSection05 = false;
    onSection04 = true;
    switching = true;
    if (section05Tl) section05Tl.kill();

    section05Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section05, { visibility: "hidden", opacity: 0 });
            resetSection05();
            switching = false;
        }
    });
    section05Tl.to(section05, { opacity: 0, duration: .6, ease: "power2.inOut" });
}

// ===== 섹션 6 =====
function songSlideX() {
    return songVinyl.offsetWidth * .72;
}

function showSong(index) {
    const song = songs[index];
    songIndex = index;
    songVinylLabel.src = song.image;
    songSleeveName.textContent = song.name;
    songSleeveCount.textContent = `${song.count}곡`;
    songTopicButtons.forEach((button, buttonIndex) => {
        const active = buttonIndex === index;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
    });
}

function ejectSong() {
    songOut = true;
    songVinyl.classList.add("is-out");
    gsap.to(songVinyl, { x: songSlideX(), duration: .85, ease: "power3.out", overwrite: "auto" });
}

function tuckSong() {
    songOut = false;
    songVinyl.classList.remove("is-out");
    gsap.to(songVinyl, { x: 0, duration: .7, ease: "power3.inOut", overwrite: "auto" });
}

function resetSongPlayer() {
    songIndex = 0;
    songOut = false;
    gsap.killTweensOf(songVinyl);
    gsap.set(songVinyl, { x: 0 });
    songVinyl.classList.remove("is-out");
    showSong(0);
}

function chooseSong(index) {
    const same = index === songIndex;
    showSong(index);
    if (same && songOut) tuckSong();
    else if (songOut) gsap.fromTo(songVinyl, { x: songSlideX() * .82 }, { x: songSlideX(), duration: .45, ease: "power2.out", overwrite: "auto" });
    else ejectSong();
}

function playSongNotes() {
    songIntroNotes.forEach(note => note.classList.add("is-dancing"));
}

function stopSongNotes() {
    songIntroNotes.forEach(note => note.classList.remove("is-dancing"));
}

function songHeadShift(from, to) {
    return {
        x: (from.left + from.width / 2) - (to.left + to.width / 2),
        y: (from.top + from.height / 2) - (to.top + to.height / 2),
        scale: from.width / to.width
    };
}

function resetSongStage() {
    section06Step = 0;
    section06.classList.remove("is-title", "is-ratio", "is-layout");
    songRoot.setAttribute("aria-hidden", "true");
    stopSongNotes();
    gsap.killTweensOf([songHead, songBody, songSide, songMain, ...songFoot, ...songIntroNotes]);
    gsap.set(songIntroNotes, { opacity: 0, scale: .25, y: 80 });
    gsap.set(songHead, { opacity: 0, x: 0, y: 0, scale: 1, xPercent: 0, yPercent: 0 });
    gsap.set(songBody, { opacity: 0, clearProps: "transform" });
    gsap.set(songSide, { opacity: 1, scale: 1, x: 0, y: 0, xPercent: 0, yPercent: 0 });
    gsap.set([songMain, ...songFoot], { opacity: 1, y: 0 });
    resetSongPlayer();
}

function songCircleClip() {
    const radius = Math.ceil(Math.hypot(window.innerWidth, window.innerHeight) / 2) + 8;
    return {
        closed: "circle(0px at 50% 50%)",
        open: `circle(${radius}px at 50% 50%)`
    };
}

function enterSection06() {
    onSection06 = true;
    onSection05 = false;
    switching = true;
    if (section06Tl) section06Tl.kill();
    resetSongStage();
    const clip = songCircleClip();
    gsap.set(section06, { visibility: "visible", opacity: 1, y: 0, clipPath: clip.closed });
    playSongNotes();

    section06Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section06, { clipPath: "none" });
            switching = false;
        }
    });
    section06Tl.to(section06, { clipPath: clip.open, duration: 1.05, ease: "power3.inOut" }, 0);
    section06Tl.fromTo(songIntroNotes,
        { opacity: 0, scale: .15, y: 90 },
        { opacity: 1, scale: 1, y: 0, duration: .9, ease: "back.out(1.6)", stagger: .12 },
        .32);
}

function showSongTitle() {
    if (section06Step !== 0 || switching) return;
    section06Step = 1;
    switching = true;
    if (section06Tl) section06Tl.kill();

    section06.classList.add("is-title");
    gsap.set(songHead, { xPercent: -50, yPercent: -50, x: 0, y: 36, scale: .82, opacity: 0 });

    section06Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section06Tl.to(songIntroNotes, {
        opacity: 0,
        scale: .45,
        y: -40,
        duration: .42,
        ease: "power2.in",
        stagger: .05
    }, 0);
    section06Tl.add(stopSongNotes, .42);
    section06Tl.to(songHead, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: .75,
        ease: "power3.out"
    }, .24);
}

function hideSongTitle() {
    if (section06Step !== 1 || switching) return;
    switching = true;
    if (section06Tl) section06Tl.kill();
    playSongNotes();

    section06Tl = gsap.timeline({
        onComplete: () => {
            section06.classList.remove("is-title");
            gsap.set(songHead, { opacity: 0, x: 0, y: 0, scale: 1, xPercent: 0, yPercent: 0 });
            section06Step = 0;
            switching = false;
        }
    });
    section06Tl.to(songHead, { opacity: 0, y: 28, scale: .84, duration: .32, ease: "power2.in" }, 0);
    section06Tl.fromTo(songIntroNotes,
        { opacity: 0, scale: .35, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: .7, ease: "back.out(1.6)", stagger: .08 },
        .12);
}

function placeSongHead(from) {
    gsap.set(songHead, { x: 0, y: 0, scale: 1, xPercent: 0, yPercent: 0, opacity: 1 });
    const shift = songHeadShift(from, songHead.getBoundingClientRect());
    gsap.set(songHead, { ...shift, transformOrigin: "50% 50%" });
}

function showSongRatio() {
    if (section06Step !== 1 || switching) return;
    section06Step = 2;
    switching = true;
    if (section06Tl) section06Tl.kill();

    const from = songHead.getBoundingClientRect();
    section06.classList.remove("is-title");
    section06.classList.add("is-ratio");
    gsap.set(songBody, { opacity: 1, clearProps: "transform" });
    gsap.set(songSide, { opacity: 0, yPercent: -50, y: 28, scale: 1, x: 0, xPercent: 0 });
    placeSongHead(from);
    songRoot.setAttribute("aria-hidden", "false");

    section06Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section06Tl.to(songHead, { x: 0, y: 0, scale: 1, duration: .9, ease: "power3.inOut" }, 0);
    section06Tl.to(songSide, { opacity: 1, y: 0, duration: .65, ease: "power2.out" }, .22);
}

function hideSongRatio() {
    if (section06Step !== 2 || switching) return;
    switching = true;
    if (section06Tl) section06Tl.kill();

    section06Tl = gsap.timeline({
        onComplete: () => {
            songRoot.setAttribute("aria-hidden", "true");
            section06Step = 1;
            switching = false;
        }
    });
    section06Tl.to(songSide, { opacity: 0, y: 20, duration: .26, ease: "power2.in" }, 0);
    section06Tl.add(() => {
        const from = songHead.getBoundingClientRect();
        section06.classList.remove("is-ratio");
        section06.classList.add("is-title");
        gsap.set(songBody, { opacity: 0, clearProps: "transform" });
        gsap.set(songSide, { opacity: 1, y: 0 });
        gsap.set(songHead, { x: 0, y: 0, scale: 1, xPercent: -50, yPercent: -50, opacity: 1 });
        const shift = songHeadShift(from, songHead.getBoundingClientRect());
        gsap.set(songHead, { ...shift, transformOrigin: "50% 50%" });
    }, .22);
    section06Tl.to(songHead, { x: 0, y: 0, scale: 1, duration: .85, ease: "power3.inOut" }, .24);
}

function showSongLayout() {
    if (section06Step !== 2 || switching) return;
    section06Step = 3;
    switching = true;
    if (section06Tl) section06Tl.kill();

    section06Tl = gsap.timeline({
        onComplete: () => { switching = false; }
    });
    section06Tl.to(songSide, { opacity: 0, duration: .28, ease: "power2.in" }, 0);
    section06Tl.add(() => {
        section06.classList.remove("is-ratio");
        section06.classList.add("is-layout");
        gsap.set(songSide, { opacity: 0 });
        gsap.set(songMain, { opacity: 0, y: 28 });
        gsap.set(songFoot, { opacity: 0, y: 18 });
    }, .22);
    section06Tl.to(songMain, { opacity: 1, y: 0, duration: .65, ease: "power3.out" }, .24);
    section06Tl.to(songFoot, { opacity: 1, y: 0, duration: .5, stagger: .07, ease: "power2.out" }, .32);
}

function hideSongLayout() {
    if (section06Step !== 3 || switching) return;
    switching = true;
    if (section06Tl) section06Tl.kill();
    if (songOut) {
        songOut = false;
        songVinyl.classList.remove("is-out");
        gsap.set(songVinyl, { x: 0 });
    }

    section06Tl = gsap.timeline({
        onComplete: () => {
            section06Step = 2;
            switching = false;
        }
    });
    section06Tl.to([songMain, ...songFoot], { opacity: 0, y: 14, duration: .24, ease: "power2.in" }, 0);
    section06Tl.add(() => {
        section06.classList.remove("is-layout");
        section06.classList.add("is-ratio");
        gsap.set(songMain, { opacity: 1, y: 0 });
        gsap.set(songFoot, { opacity: 1, y: 0 });
        gsap.set(songSide, { opacity: 0, yPercent: -50, y: 18 });
    }, .2);
    section06Tl.to(songSide, { opacity: 1, y: 0, duration: .55, ease: "power2.out" }, .22);
}

function leaveSection06() {
    onSection06 = false;
    onSection05 = true;
    switching = true;
    if (section06Tl) section06Tl.kill();

    const clip = songCircleClip();
    gsap.set(section06, { y: 0, clipPath: clip.open });
    section06Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section06, { visibility: "hidden", opacity: 0, y: 0, clipPath: "none" });
            resetSongStage();
            switching = false;
        }
    });
    section06Tl.to(songIntroNotes, { opacity: 0, scale: .35, duration: .4, ease: "power2.in" }, 0);
    section06Tl.to(section06, { clipPath: clip.closed, duration: .9, ease: "power3.inOut" }, 0);
}

// ===== 공통 · 휠과 채널 =====
function wheelPixels(event) {
    if (event.deltaMode === 1) return event.deltaY * 32;
    if (event.deltaMode === 2) return event.deltaY * window.innerHeight;
    return event.deltaY;
}

function canInnerScroll(node, delta) {
    let el = node instanceof Element ? node : null;
    while (el && el !== document.documentElement) {
        const overflowY = getComputedStyle(el).overflowY;
        if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight + 2) {
            const limit = el.scrollHeight - el.clientHeight;
            if (delta > 0 && el.scrollTop < limit - 1) return true;
            if (delta < 0 && el.scrollTop > 1) return true;
        }
        el = el.parentElement;
    }
    return false;
}

function changeChannel(dir) {
    if (!introDone || switching || !storyCard.hidden) return;

    // 섹션 6
    if (onSection06) {
        if (dir > 0 && section06Step === 0) showSongTitle();
        else if (dir > 0 && section06Step === 1) showSongRatio();
        else if (dir > 0 && section06Step === 2) showSongLayout();
        else if (dir < 0 && section06Step === 3) hideSongLayout();
        else if (dir < 0 && section06Step === 2) hideSongRatio();
        else if (dir < 0 && section06Step === 1) hideSongTitle();
        else if (dir < 0 && section06Step === 0) leaveSection06();
        return;
    }

    // 섹션 5
    if (onSection05) {
        if (dir > 0 && section05Step === 0) showSection05Gallery();
        else if (dir > 0 && section05Step === 1) openSection05Center();
        else if (dir > 0 && section05Step === 2) showSection05Levels();
        else if (dir > 0 && section05Step === 3) showSection05Topics();
        else if (dir > 0 && section05Step === 4) enterSection06();
        else if (dir < 0 && section05Step === 4) hideSection05Topics();
        else if (dir < 0 && section05Step === 3) hideSection05Levels();
        else if (dir < 0 && section05Step === 2) closeSection05Center();
        else if (dir < 0 && section05Step === 1) hideSection05Gallery();
        else if (dir < 0) leaveSection05();
        return;
    }

    // 섹션 4
    if (onSection04) {
        if (dir < 0) leaveSection04();
        else enterSection05();
        return;
    }

    // 섹션 3
    if (onSection03) {
        if (dir < 0) leaveSection03();
        else enterSection04();
        return;
    }

    // 섹션 2
    if (onSection02) {
        if (dir > 0) {
            if (section02Step === 3) {
                enterSection03();
                return;
            }
            const next = [showPhilosophyDetail, showPhilosophyEarly, showPhilosophyFun][section02Step];
            if (next) next();
        } else if (section02Step === 3) {
            hidePhilosophyFun();
        } else if (section02Step === 2) {
            hidePhilosophyEarly();
        } else if (section02Step === 1) {
            hidePhilosophyDetail();
        } else {
            leaveSection02();
        }
        return;
    }

    // 섹션 1
    if (onSection01) {
        if (dir > 0) {
            if (sectionStep === 8) {
                enterSection02();
                return;
            }
            const next = [showSectionMessage, showKoreaMessage, showListening, showReading, showSpeaking, showWriting, showYear, showYearCount][sectionStep];
            if (next) next();
        } else {
            [leaveSection01, hideSectionMessage, hideKoreaMessage, hideListening, hideReading, hideSpeaking, hideWriting, hideYear, hideYearCount][sectionStep]();
        }
        return;
    }

    // CLASS 문구까지 본 뒤 한 번 더 내리면 section01 풀화면으로
    if (channels[currentChannel] === libraryChannel && dir > 0 && libraryStep >= 3) {
        enterSection01();
        return;
    }

    // 도서관 채널에선 채널을 넘기기 전에 이미지 → 제목 → 소개 문구 순서로 한 단계씩
    if (channels[currentChannel] === libraryChannel) {
        const steps = dir > 0
            ? [[showLibraryTitle, 1.5], [showLibraryDesc, 1.6], [showLibraryClass, 1.4]][libraryStep]
            : [null, [fadeOutLibraryTitle, .6], [hideLibraryDesc, 1.1], [hideLibraryClass, 1.2]][libraryStep];

        if (steps) {
            const [run, rest] = steps;
            switching = true;
            run();
            gsap.delayedCall(rest, () => { switching = false; });
            return;
        }
    }

    const next = currentChannel + dir;
    if (next < 0 || next >= channels.length) return;

    switching = true;
    currentChannel = next;
    stopChannelVideo();
    hideLibraryTitle();

    channelTl = gsap.timeline({
        // 트랙패드 관성 스크롤로 연달아 넘어가지 않게 잠깐 쉼
        onComplete: () => {
            playChannelVideo(channels[currentChannel]);
            // 도서관 채널은 도착 스크롤의 관성으로 제목까지 바로 뜨지 않게 더 오래 쉼
            const rest = channels[currentChannel] === libraryChannel ? 1 : .35;
            gsap.delayedCall(rest, () => { switching = false; });
        }
    });

    // 브라운관처럼 가운데 가로선으로 접혔다가 새 채널로 펼쳐짐
    channelTl
        .set(storyImg, { filter: "brightness(1) contrast(1)" })
        .to(storyImg, { scaleY: .015, scaleX: 1.04, filter: "brightness(2.4) contrast(1.3)", duration: .16, ease: "power3.in" })
        .to(storyImg, { scaleX: 0, opacity: 0, duration: .1, ease: "power2.in" })
        .call(() => {
            storyImg.src = channels[currentChannel];
            showChannelNumber(currentChannel);
            // 도서관 채널부터는 계속 리모컨 대신 휠 안내
            const libraryIndex = channels.indexOf(libraryChannel);
            setRemoteVisible(libraryIndex === -1 || currentChannel < libraryIndex);
        })
        .to({}, { duration: .12 })
        .set(storyImg, { scaleY: .015, scaleX: 1.04, opacity: 1 })
        .to(storyImg, { scaleY: 1, scaleX: 1, duration: .34, ease: "expo.out" })
        .to(storyImg, { filter: "brightness(1) contrast(1)", duration: .45, ease: "power2.out" }, "<");
}

songTopicButtons.forEach((button, index) => {
    button.addEventListener("click", () => chooseSong(index));
});
songSleeve.addEventListener("click", () => {
    if (songOut) tuckSong();
    else ejectSong();
});
remoteNext.addEventListener("click", () => changeChannel(1));
storyBubbles.forEach(bubble => bubble.addEventListener("click", () => openStory(bubble)));
storyClose.addEventListener("click", () => closeStory(true));
storyDim.addEventListener("click", () => closeStory(true));
// 그림 파일이 아직 없으면 깨진 아이콘 대신 빈 원으로 둔다
notePhoto.addEventListener("error", () => notePhoto.removeAttribute("src"));
window.addEventListener("resize", () => {
    if (!noteContent.hidden) centerNoteText();
});
noteOpen.addEventListener("click", () => openBook(0));
noteClose.addEventListener("click", closeBook);
noteTabs.forEach((tab, index) => tab.addEventListener("click", () => {
    if (noteBook.dataset.state === "closed") openBook(index);
    else goNote(index);
}));
notePrev.addEventListener("click", () => goNote(noteIndex - 1));
noteNext.addEventListener("click", () => goNote(noteIndex + 1));
noteCorner.addEventListener("click", () => goNote(noteIndex + 1));
storyCard.addEventListener("wheel", e => e.stopPropagation(), { passive: true });
storyCopy.addEventListener("touchend", e => e.stopPropagation());

window.addEventListener("wheel", e => {
    const delta = wheelPixels(e);
    if (!delta || !introDone || !storyCard.hidden) return;
    if (canInnerScroll(e.target, delta)) return;
    if (switching || Math.abs(delta) < 8) return;
    changeChannel(delta > 0 ? 1 : -1);
}, { passive: true });

let touchStartY = null;
window.addEventListener("touchstart", e => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });
window.addEventListener("touchend", e => {
    if (touchStartY === null) return;
    const diff = touchStartY - e.changedTouches[0].clientY;
    touchStartY = null;
    if (canInnerScroll(e.target, diff)) return;
    if (Math.abs(diff) > 40) changeChannel(diff > 0 ? 1 : -1);
});

window.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" || e.key === "PageDown") changeChannel(1);
    if (e.key === "ArrowUp" || e.key === "PageUp") changeChannel(-1);
});


// ===== 인트로 · 재생 =====

function playIntro() {
    resetIntro();

    timeline = gsap.timeline();

    // 검은 화면
    timeline.to({}, { duration: .35 });

    // TV 켜짐: 점 -> 가로선 -> 흰 빛
    timeline
        .to(powerLine, { width: 8, height: 8, opacity: 1, duration: .18, ease: "back.out(3)" })
        .to(powerLine, { width: 5, height: 5, duration: .14, ease: "power2.in" })
        .to(powerLine, { width: "100vw", height: 3, duration: .28, ease: "expo.out" })
        .to(powerLine, { opacity: .35, duration: .04, yoyo: true, repeat: 3, ease: "none" })
        .to({}, { duration: .12 })
        .to(powerFlash, { scaleY: 1, opacity: 1, duration: .22, ease: "expo.out" })
        .to(powerLine, { height: 14, opacity: 0, duration: .2, ease: "power2.out" }, "<");

    // 흰 빛 걷히면서 노이즈
    timeline
        .call(startNoise)
        .set(fullscreenNoise, {
            display: "block",
            visibility: "visible",
            opacity: 1,
            filter: "brightness(1.6) contrast(1.2)"
        })
        .to(powerFlash, { opacity: 0, duration: .45, ease: "power2.out" })
        .to(fullscreenNoise, { filter: "brightness(1) contrast(1.04)", duration: .5, ease: "power2.out" }, "<");

    // 치지직
    timeline
        .to(fullscreenNoise, { filter: "brightness(1.12) contrast(1.06)", duration: .1 })
        .to(fullscreenNoise, { filter: "brightness(.92) contrast(1.03)", duration: .1 })
        .to(fullscreenNoise, { filter: "brightness(1) contrast(1.04)", duration: .14 })
        .to({}, { duration: .45 });

    // 확대된 TV 노이즈로 바꿔치기
    timeline
        .set(scene, { visibility: "visible" })
        .to(fullscreenNoise, { opacity: 0, duration: .16, ease: "none" })
        .set(fullscreenNoise, { visibility: "hidden" });

    // 채널 잡히는 느낌으로 썸네일 등장
    addSignalLock(timeline);
    timeline.to({}, { duration: .3 });

    // 방 전체로 줌아웃
    timeline
        .to(scene, { scale: 1, x: 0, y: 0, duration: 1.8, ease: "power3.inOut" })
        .call(() => { introDone = true; });
}


resizeNoise();

// 이미지 레이아웃 잡힌 뒤에 TV 좌표 재야 해서 두 프레임 대기
window.addEventListener("load", () => {
    requestAnimationFrame(() => requestAnimationFrame(playIntro));
});

let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        resizeNoise();
        playIntro();
    }, 250);
});
