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
const section01 = document.querySelector(".section01");
const remote = document.querySelector(".remote");
const wheelHint = document.querySelector(".wheel-hint");
const remoteNext = document.querySelector(".remote-next");

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


// ---------- noise ----------

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


// ---------- reset ----------

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
    gsap.killTweensOf([scene, roomBg, section01]);
    gsap.set(roomBg, { opacity: 1 });
    gsap.set(section01, { opacity: 0, visibility: "hidden" });

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
    gsap.set(wheelHint, { opacity: 0 });
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


// ---------- signal ----------

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


// ---------- channel ----------

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

// 지금 위치에서 TV 한가운데로. scale은 화면을 채운 뒤에도 로고가 크게 남도록
function logoCenterPose() {
    const tv = tvContent.getBoundingClientRect();
    const logo = libraryLogo.getBoundingClientRect();
    const dx = (tv.left + tv.width / 2) - (logo.left + logo.width / 2);
    const dy = (tv.top + tv.height / 2) - (logo.top + logo.height / 2);

    return {
        x: gsap.getProperty(libraryLogo, "x") + dx,
        y: gsap.getProperty(libraryLogo, "y") + dy,
        scale: 2.6
    };
}

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

    gsap.set(section01, { visibility: "visible" });
    gsap.set(scene, { transformOrigin: pose.origin });
    gsap.killTweensOf([libraryLogo, libraryClass, libraryDesc, story, noiseCanvas, scanline, rgbTint]);

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
        .to(section01, { opacity: 1, duration: .4 }, "-=.2");
}

function leaveSection01() {
    onSection01 = false;
    switching = true;

    section01Tl = gsap.timeline({
        onComplete: () => {
            gsap.set(section01, { visibility: "hidden" });
            switching = false;
        }
    });
    section01Tl
        .to(section01, { opacity: 0, duration: .25 })
        .to(scene, { scale: 1, x: 0, y: 0, duration: 1.15, ease: "power3.inOut" }, "<")
        .to(roomBg, { opacity: 1, duration: 1.15, ease: "power2.inOut" }, "<")
        .to(story, { opacity: 1, duration: .7 }, "<")
        .to(noiseCanvas, { opacity: 1, duration: .7 }, "<")
        .to(scanline, { opacity: .07, duration: .7 }, "<")
        .to(rgbTint, { opacity: .04, duration: .7 }, "<")
        .to(libraryDesc, { "--dim": 1, duration: .7 }, "<")
        .to(libraryClass, { opacity: 1, duration: .7 }, "<")
        .to(libraryLogo, { ...logoBeforeSection, force3D: false, duration: 1.15, ease: "power3.inOut" }, "<");
}

function changeChannel(dir) {
    if (!introDone || switching) return;

    if (onSection01) {
        if (dir < 0) leaveSection01();
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

remoteNext.addEventListener("click", () => changeChannel(1));

window.addEventListener("wheel", e => {
    if (Math.abs(e.deltaY) < 8) return;
    changeChannel(e.deltaY > 0 ? 1 : -1);
}, { passive: true });

let touchStartY = null;
window.addEventListener("touchstart", e => { touchStartY = e.touches[0].clientY; }, { passive: true });
window.addEventListener("touchend", e => {
    if (touchStartY === null) return;
    const diff = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 40) changeChannel(diff > 0 ? 1 : -1);
    touchStartY = null;
});

window.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" || e.key === "PageDown") changeChannel(1);
    if (e.key === "ArrowUp" || e.key === "PageUp") changeChannel(-1);
});


// ---------- intro ----------

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
