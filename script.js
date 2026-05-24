const creators = [
  { id: 1, name: "simonardila", minecraftName: "Simonardila", twitchName: "simonardila", profileUrl: "https://es.namemc.com/profile/Simonardila.1" },
  { id: 2, name: "vani_stunt18", minecraftName: "VaniStunt18", twitchName: "vani_stunt18", profileUrl: "https://es.namemc.com/profile/VaniStunt18.1" },
  { id: 3, name: "simple_ianx", minecraftName: "X_ianx_X", twitchName: "simple_ianx", profileUrl: "https://es.namemc.com/profile/X_ianx_X.1" },
  { id: 4, name: "ishadownplay", minecraftName: "iShadowMC", twitchName: "ishadownplay", profileUrl: "https://es.namemc.com/profile/iShadowMC.6" },
  { id: 5, name: "ammiwangpiro", minecraftName: "AmmiWangpiro", twitchName: "ammiwangpiro", profileUrl: "https://es.namemc.com/profile/AmmiWangpiro.1" },
  { id: 6, name: "natoovr", minecraftName: "NatooVR", twitchName: "natoovr", profileUrl: "https://es.namemc.com/profile/NatooVR.1" },
  { id: 7, name: "shustineuwu", minecraftName: "Shustineuwu", twitchName: "shustineuwu", profileUrl: "https://es.namemc.com/profile/Shustineuwu.1" },
  { id: 8, name: "ekoo_01", minecraftName: "Ekco01", twitchName: "ekoo_01", profileUrl: "https://es.namemc.com/profile/Ekco01.1" },
  { id: 9, name: "rouzbel", minecraftName: "Rouzbel", twitchName: "rouzbel_", profileUrl: "https://es.namemc.com/profile/Rouzbel.1" },
  { id: 10, name: "felipancreaz", minecraftName: "felipancreaz", twitchName: "felipancreaz", profileUrl: "https://es.namemc.com/profile/felipancreaz.1" },
  { id: 11, name: "zitrocol", minecraftName: "zitrocol", streamName: "zitrocol", profileUrl: "https://es.namemc.com/profile/zitrocol.1" },
  { id: 12, name: "thedalex", minecraftName: "TheDalex_YT", streamPlatform: "kick", streamName: "thedalex-yt", profileUrl: "https://es.namemc.com/profile/TheDalex_YT.1" },
  { id: 13, name: "keri_tv", minecraftName: "keri__tv", streamName: "keri_tv", profileUrl: "https://es.namemc.com/profile/keri__tv.1" },
  { id: 14, name: "deibybicho", minecraftName: "Deiby777", streamName: "deibybicho_", profileUrl: "https://es.namemc.com/profile/Deiby777.1" },
  { id: 15, name: "litdeivi", minecraftName: "litdeivi", streamName: "litdeivi", profileUrl: "https://es.namemc.com/profile/LITDEIVI.1" },
  { id: 16, name: "ivanguz_23", minecraftName: "ivanguz23_", streamName: "ivanguz_23", profileUrl: "https://es.namemc.com/profile/ivanguz23_.1" },
  { id: 17, name: "sutd33", minecraftName: "sutd33", streamName: "sutd33", profileUrl: "https://es.namemc.com/profile/sutd33.1" },
  { id: 18, name: "thefoquitasc", minecraftName: "TheFoquita", streamName: "thefoquitasc", profileUrl: "https://es.namemc.com/profile/TheFoquita.1" },
  { id: 19, name: "chinabalaslocas", minecraftName: "Chinabalaslocas", streamName: "chinabalaslocas", profileUrl: "https://es.namemc.com/profile/Chinabalaslocas.1" },
  { id: 20, name: "darkiuns", minecraftName: "bobishey22", streamName: "darkiuns", profileUrl: "https://es.namemc.com/profile/bobishey22.1" },
  { id: 21, name: "kelosg7", minecraftName: "kelosg7", streamName: "kelosg7", profileUrl: "https://es.namemc.com/profile/kelosg7.1" },
  { id: 22, name: "iamchewi", minecraftName: "ChewiGod", streamName: "iamchewi", profileUrl: "https://es.namemc.com/profile/ChewiGod.1" },
  { id: 23, name: "soyvima", minecraftName: "soyvima", streamName: "soyvima", profileUrl: "https://es.namemc.com/profile/soyvima.1" },
  { id: 24, name: "florezfz", minecraftName: "FlorezFz9", minecraftUuid: "e6b1c095cfa94441a736d37f4e7a4c1d", skinTexture: "https://textures.minecraft.net/texture/64d535c3410e1e26f2651f47603b75af28e7432a755d9c77b89008acf80a2952", streamName: "florezfz", profileUrl: "https://es.namemc.com/profile/FlorezFz9.1" },
  { id: 25, name: "mal_g", minecraftName: "Mal_G", streamName: "mal_g", profileUrl: "https://es.namemc.com/profile/Mal_G.1" },
  { id: 26, name: "idkponque", minecraftName: "idkponque", minecraftUuid: "d3f04ba0f2494b9585618d6ca7974e83", skinTexture: "https://textures.minecraft.net/texture/8686a50191fd868e6399a16a0e704b5f7ab4a1d20f3b504b63ee46ead91125aa", streamName: "idkponque", profileUrl: "https://es.namemc.com/profile/idkponque.1" },
  { id: 27, name: "fre-soil", minecraftName: "fre_soil", streamPlatform: "kick", streamName: "fre-soil", profileUrl: "https://es.namemc.com/profile/fre_soil.1" },
  { id: 28, name: "sebasconlimon", minecraftName: "sebasconlimon", streamName: "sebasconlimon", profileUrl: "https://es.namemc.com/profile/sebasconlimon.1" },
  { id: 29, name: "papikayl", minecraftName: "papikayl", streamName: "papikayl", profileUrl: "https://es.namemc.com/profile/papikayl.1" },
  { id: 30, name: "keideota_", minecraftName: "keideota", streamName: "keideota_", profileUrl: "https://es.namemc.com/profile/keideota.1" },
  { id: 31, name: "milzyvt", minecraftName: "milzyvt", streamName: "milzyvt", profileUrl: "https://es.namemc.com/profile/milzyvt.1" },
  { id: 32, name: "ttvmichii", minecraftName: "TTVmichii1", streamPlatform: "kick", streamName: "ttvmichii", profileUrl: "https://es.namemc.com/profile/TTVmichii1.1" },
  { id: 33, name: "lilwill7", minecraftName: "LilWill7_", streamName: "lilwill7_", profileUrl: "https://es.namemc.com/profile/LilWill7_.1" },
  { id: 34, name: "f1r3m4n007", minecraftName: "f1r3m4n007", streamName: "f1r3m4n007", profileUrl: "https://es.namemc.com/profile/f1r3m4n007.1" },
  { id: 35, name: "sregg0", minecraftName: "sregg0", streamName: "sregg0", profileUrl: "https://es.namemc.com/profile/sregg0.1" },
  { id: 36, name: "mishellgomez", minecraftName: "MishellGomez", streamName: "mishellgomez", profileUrl: "https://es.namemc.com/profile/MishellGomez.1" },
  { id: 37, name: "gatronnn", minecraftName: "Gatronn", streamName: "gatronnn", profileUrl: "https://es.namemc.com/profile/Gatronn.1" },
  { id: 38, name: "arekipito", minecraftName: "KIPITOSTW", streamName: "arekipito", profileUrl: "https://es.namemc.com/profile/KIPITOSTW.1" },
  { id: 39, name: "carlogato", minecraftName: "carlogato", streamPlatform: "kick", streamName: "carlogato", profileUrl: "https://es.namemc.com/profile/carlogato.1" },
  { id: 40, name: "soypiini", minecraftName: "soypiini", streamName: "soypiini", profileUrl: "https://es.namemc.com/profile/soypiini.1" },
  { id: 41, name: "sandia_enjoyer", minecraftName: "saaandia", streamName: "sandia_enjoyer", profileUrl: "https://es.namemc.com/profile/saaandia.1" },
  { id: 42, name: "electroinsanity", minecraftName: "Electrolnsanity", streamName: "electroinsanity", profileUrl: "https://es.namemc.com/profile/Electrolnsanity.1" },
  { id: 43, name: "sirpandebono", minecraftName: "sirpandebono", streamName: "sirpandebono_", profileUrl: "https://es.namemc.com/profile/sirpandebono.1" },
  { id: 44, name: "fayber_7", minecraftName: "Fayber_7", streamName: "fayber_7", profileUrl: "https://es.namemc.com/profile/Fayber_7.1" },
  { id: 45, name: "kadficaaa", minecraftName: "kadficaaa", streamName: "kadficaaa", profileUrl: "https://es.namemc.com/profile/kadficaaa.1" },
  { id: 46, name: "6torres9", minecraftName: "6MrMike9", streamPlatform: "tiktok", streamName: "6torres9", profileUrl: "https://es.namemc.com/profile/6MrMike9.1" },
  { id: 47, name: "veroskky", minecraftName: "Veroskky", streamName: "veroskky", profileUrl: "https://es.namemc.com/profile/Veroskky.1" },
  { id: 48, name: "combatlizard8", minecraftName: "Combatlizard8", streamName: "combatlizard8", profileUrl: "https://es.namemc.com/profile/Combatlizard8.1" },
  { id: 49, name: "fefoneitor", minecraftName: "fefoneitor", streamName: "fefoneitor", profileUrl: "https://es.namemc.com/profile/fefoneitor.1" },
  { id: 50, name: "elsleevz", minecraftName: "ElSleevzVLT", streamPlatform: "kick", streamName: "elsleevz", profileUrl: "https://es.namemc.com/profile/ElSleevzVLT.1" },
  { id: 51, name: "bambirini", minecraftName: "Bambirinii", streamName: "bambirini", profileUrl: "https://es.namemc.com/profile/Bambirinii.1" },
  { id: 52, name: "vaalerinavzz", minecraftName: "VaalerinaVzz", streamName: "vaalerinavzz", profileUrl: "https://es.namemc.com/profile/VaalerinaVzz.1" },
  { id: 53, name: "mochi9706", minecraftName: "Mochi9706", streamName: "mochi9706", profileUrl: "https://es.namemc.com/profile/Mochi9706.1" },
  { id: 54, name: "phootis", minecraftName: "TTVPhotis", streamName: "phootis", profileUrl: "https://es.namemc.com/profile/TTVPhotis.1" },
  { id: 55, name: "ivaneofi", minecraftName: "ivaneofi", streamName: "ivaneofi", profileUrl: "https://es.namemc.com/profile/ivaneofi.1" },
  { id: 56, name: "fateplay", minecraftName: "FatePlay_", streamPlatform: "kick", streamName: "fateplay", profileUrl: "https://es.namemc.com/profile/FatePlay_.1" },
  { id: 57, name: "myreiden17", minecraftName: "myreiden17", streamName: "myreiden17", profileUrl: "https://es.namemc.com/profile/myreiden17.1" },
  { id: 58, name: "miguefly", minecraftName: "miguefly", streamName: "miguefly", profileUrl: "https://es.namemc.com/profile/miguefly.1" },
  { id: 59, name: "nathalia_gr1", minecraftName: "nathalia_gr1", streamName: "nattsie", profileUrl: "https://es.namemc.com/profile/nathalia_gr1.1" },
  { id: 60, name: "TitoElBambinoXD ", minecraftName: "TitoElBambinoXD", streamName: "TitoElBambinoXD ", profileUrl: "https://es.namemc.com/profile/TitoElBambinoXD.1" },
  { id: 61, name: "Ale555YT", minecraftName: "Ale555YT", streamName: "Ale555TV", profileUrl: "https://es.namemc.com/profile/Ale555YT.1" },
  { id: 62, name: "pattysousou", minecraftName: "pdsousa16", streamName: "pattysousou", profileUrl: "https://es.namemc.com/profile/pdsousa16.1" },
  { id: 63, name: "dawnhasashi", minecraftName: "the1dawn", streamName: "dawnhasashi", profileUrl: "https://es.namemc.com/profile/the1dawn.1" },
  { id: 64, name: "tifani10p", minecraftName: "Tifan1p", streamName: "tifani10p", profileUrl: "https://es.namemc.com/profile/Tifan1p.1" },
];

const adminTokenKey = "squid-admin-authenticated";
const storageKey = "squid-player-statuses";
const adminPasswordValue = "squid-admin";
const pathName = window.location.pathname.replace(/\/+$/, "");
const isAdminPage = pathName.endsWith("/admin")
  || pathName.endsWith("/admin.html")
  || new URLSearchParams(window.location.search).has("admin")
  || window.location.hash === "#admin";
let isAdminAuthenticated = localStorage.getItem(adminTokenKey) === "1";
const staticDeadPlayers = Array.isArray(window.PAELLA_STATIC_DEAD_PLAYERS)
  ? window.PAELLA_STATIC_DEAD_PLAYERS
  : ["thedalex", "vaalerinavzz", "vani_stunt18"];
const forcedLivePlayers = Array.isArray(window.PAELLA_FORCE_LIVE_PLAYERS)
  ? window.PAELLA_FORCE_LIVE_PLAYERS
  : [];
const players = creators.map((creator) => ({
  ...creator,
  streamPlatform: creator.streamPlatform || "twitch",
  streamName: creator.streamName || creator.twitchName || makeTwitchSlug(creator.name),
  status: isStaticDeadPlayer(creator) ? "dead" : "alive",
  palette: makePalette(creator.name, creator.id)
}));

// Dia 1 empezo el 21 de mayo de 2026 a las 8:00 p. m. Colombia.
// Dia 2 empieza el 22 de mayo de 2026 a las 8:00 p. m. Colombia / 7:00 p. m. centro de Mexico.
const eventStartDateUtc = Date.UTC(2026, 4, 22, 1, 0, 0);
const eventLengthDays = 6;
const eventDayDurationMs = 24 * 60 * 60 * 1000;
const twitchCheckInterval = 5 * 60 * 1000;
const streamStates = new Map(players.map((player) => [player.id, { status: "checking", label: "Revisando" }]));

const grid = document.querySelector("#players");
const template = document.querySelector("#player-card-template");
const searchInput = document.querySelector("#search");
const filterButtons = [...document.querySelectorAll(".filter")];
const eventDay = document.querySelector("#event-day");
const eventDayBadge = document.querySelector("#event-day-badge");
const liveCount = document.querySelector("#live-count");
const liveBadge = document.querySelector("#live-badge");
const aliveCount = document.querySelector("#alive-count");
const deadCount = document.querySelector("#dead-count");
const totalCount = document.querySelector("#total-count");
const totalBadge = document.querySelector("#total-badge");
const aliveProgress = document.querySelector("#alive-progress");
const adminState = document.querySelector("#admin-state");
const adminLoginForm = document.querySelector("#admin-login-form");
const adminPassword = document.querySelector("#admin-password");
const adminLogout = document.querySelector("#admin-logout");
const adminMessage = document.querySelector("#admin-message");

let activeFilter = "all";

document.body.classList.toggle("admin-mode", isAdminPage);
document.body.classList.toggle("public-mode", !isAdminPage);
document.body.classList.toggle("admin-locked", isAdminPage && !isAdminAuthenticated);
document.body.classList.toggle("admin-authenticated", isAdminPage && isAdminAuthenticated);

function makeTwitchSlug(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9_]/g, "");
}

function normalizeStaticPlayerKey(value) {
  return String(value).trim().toLowerCase();
}

function isStaticDeadPlayer(creator) {
  const keys = [
    creator.id,
    creator.name,
    creator.minecraftName,
    creator.twitchName,
    creator.streamName
  ].filter((value) => value !== undefined && value !== null);

  return staticDeadPlayers.some((deadPlayer) => {
    if (typeof deadPlayer === "number") return creator.id === deadPlayer;

    const normalizedDeadPlayer = normalizeStaticPlayerKey(deadPlayer);
    return keys.some((key) => normalizeStaticPlayerKey(key) === normalizedDeadPlayer);
  });
}

function matchesStaticPlayer(player, values) {
  const keys = [
    player.id,
    player.name,
    player.minecraftName,
    player.twitchName,
    player.streamName
  ].filter((value) => value !== undefined && value !== null);

  return values.some((value) => {
    if (typeof value === "number") return player.id === value;

    const normalizedValue = normalizeStaticPlayerKey(value);
    return keys.some((key) => normalizeStaticPlayerKey(key) === normalizedValue);
  });
}

function streamUrl(player) {
  if (player.streamPlatform === "kick") return `https://kick.com/${player.streamName}`;
  if (player.streamPlatform === "tiktok") return `https://www.tiktok.com/@${player.streamName}`;
  return `https://www.twitch.tv/${player.streamName}`;
}

function streamPlatformLabel(player) {
  if (player.streamPlatform === "kick") return "Kick";
  if (player.streamPlatform === "tiktok") return "TikTok";
  return "Twitch";
}

function getEventDay(now = new Date()) {
  const daysSinceStart = Math.floor((now.getTime() - eventStartDateUtc) / eventDayDurationMs);

  if (daysSinceStart < 0) return 1;
  return Math.min(eventLengthDays, daysSinceStart + 1);
}

function updateEventDay() {
  const day = getEventDay();
  eventDay.textContent = day;
  eventDayBadge.textContent = day;
}

function scheduleEventDayUpdate() {
  const now = new Date();
  const nextDayIndex = Math.max(1, Math.floor((now.getTime() - eventStartDateUtc) / eventDayDurationMs) + 1);
  const nextChange = eventStartDateUtc + (nextDayIndex * eventDayDurationMs) + 2000;
  const delay = Math.max(1000, nextChange - now.getTime());

  window.setTimeout(() => {
    updateEventDay();
    scheduleEventDayUpdate();
  }, delay);
}

function makePalette(name, id) {
  const seed = [...name].reduce((sum, char) => sum + char.charCodeAt(0), id * 17);
  const skins = ["#9d6b4f", "#b47a5e", "#d09a75", "#6f4938", "#e0b08d", "#8a5f4a"];
  const hairs = ["#1b1713", "#3b2517", "#6b3b17", "#e09d26", "#f5f5f5", "#111827", "#5b2b83"];
  const eyes = ["#202426", "#1f67ff", "#22ffaa", "#8f3dff", "#ff2b4f", "#f2f2f2"];

  return {
    skin: skins[seed % skins.length],
    hair: hairs[(seed * 3) % hairs.length],
    eye: eyes[(seed * 5) % eyes.length],
    accent: seed % 4 === 0 ? "#23ff86" : seed % 4 === 1 ? "#ff234f" : seed % 4 === 2 ? "#ff9e2f" : "#ffffff",
    shadow: "rgba(0, 0, 0, 0.22)"
  };
}

function avatarPattern(player) {
  const { skin, hair, eye, accent, shadow } = player.palette;
  const hasMask = player.id % 9 === 0;
  const hasHood = player.id % 11 === 0;
  const hasGlow = player.id % 5 === 0;
  const hairline = player.id % 3;
  const pixels = Array(64).fill(skin);

  const set = (indexes, color) => indexes.forEach((index) => pixels[index] = color);

  set([0, 1, 2, 3, 4, 5, 6, 7], hair);
  set(hairline === 0 ? [8, 9, 10, 11, 12, 13] : hairline === 1 ? [8, 9, 10, 14, 15] : [8, 9, 14, 15], hair);
  set([16, 23, 24, 31], darken(skin));
  set([26, 29], eye);
  set([27, 28], hasGlow ? accent : "#f7f7f7");
  set([34, 35, 36, 37], shadow);
  set([43, 44], darken(skin));
  set([50, 51, 52, 53], darken(skin));

  if (hasMask) {
    set([16, 17, 18, 19, 20, 21, 22, 23, 24, 31, 32, 39], "#101413");
    set([27, 28], accent);
  }

  if (hasHood) {
    set([0, 1, 2, 5, 6, 7, 8, 15, 16, 23, 24, 31, 32, 39, 40, 47], accent);
  }

  if (player.id % 7 === 0) {
    set([2, 3, 4, 10, 11, 12], "#f1f1f1");
  }

  return pixels;
}

function darken(color) {
  if (color.startsWith("rgba")) return color;
  const value = color.replace("#", "");
  const rgb = [0, 2, 4].map((start) => Math.max(0, parseInt(value.slice(start, start + 2), 16) - 32));
  return `rgb(${rgb.join(",")})`;
}

function renderPixelAvatar(avatar, player) {
  avatar.classList.add("is-pixel");
  avatar.classList.remove("has-skin-texture");
  avatar.replaceChildren();

  avatarPattern(player).forEach((color) => {
    const pixel = document.createElement("span");
    pixel.className = "px";
    pixel.style.background = color;
    avatar.append(pixel);
  });
}

function avatarUrls(player) {
  if (player.minecraftUuid) {
    return [
      `https://crafthead.net/cube/${player.minecraftUuid}/128`,
      `https://crafthead.net/helm/${player.minecraftUuid}/128`,
      `https://crafatar.com/avatars/${player.minecraftUuid}?size=128&overlay`,
      `https://crafthead.net/avatar/${player.minecraftUuid}/128`,
      `https://api.mcheads.org/head/${encodeURIComponent(player.minecraftName)}/128`
    ];
  }

  const name = encodeURIComponent(player.minecraftName);
  return [
    `https://mc-heads.net/avatar/${name}/128.png`,
    `https://api.mcheads.org/head/${name}/128`,
    `https://crafthead.net/avatar/${name}/128`,
    `https://minotar.net/helm/${name}/128`,
    `https://visage.surgeplay.com/face/128/${name}`
  ];
}

function renderMinecraftHead(avatar, player) {
  if (player.skinTexture) {
    renderSkinTexture(avatar, player);
    return;
  }

  avatar.classList.remove("is-pixel");
  avatar.classList.remove("has-skin-texture");
  avatar.replaceChildren();

  const image = document.createElement("img");
  const urls = avatarUrls(player);
  let urlIndex = 0;

  image.alt = "";
  image.decoding = "async";
  image.loading = "lazy";
  image.src = urls[urlIndex];
  image.addEventListener("error", () => {
    urlIndex += 1;

    if (urlIndex < urls.length) {
      image.src = urls[urlIndex];
      return;
    }

    renderPixelAvatar(avatar, player);
  });
  avatar.append(image);
}

function renderSkinTexture(avatar, player) {
  avatar.classList.remove("is-pixel");
  avatar.classList.add("has-skin-texture");
  avatar.replaceChildren();

  const skinHead = document.createElement("div");
  const base = document.createElement("img");
  const overlay = document.createElement("img");

  skinHead.className = "skin-head";
  base.className = "skin-layer skin-base";
  overlay.className = "skin-layer skin-overlay";
  base.alt = "";
  overlay.alt = "";
  base.decoding = "async";
  overlay.decoding = "async";
  base.loading = "lazy";
  overlay.loading = "lazy";
  base.src = player.skinTexture;
  overlay.src = player.skinTexture;
  base.addEventListener("error", () => {
    player.skinTexture = "";
    renderMinecraftHead(avatar, player);
  }, { once: true });

  skinHead.append(base, overlay);
  avatar.append(skinHead);
}

function setAdminMessage(message, tone = "neutral") {
  if (!adminMessage) return;
  adminMessage.textContent = message;
  adminMessage.dataset.tone = tone;
}

function updateAdminUi() {
  if (!isAdminPage) return;

  document.body.classList.toggle("admin-authenticated", isAdminAuthenticated);
  document.body.classList.toggle("admin-locked", !isAdminAuthenticated);
  adminState.textContent = isAdminAuthenticated ? "Sesion admin" : "Solo lectura";

  if (isAdminAuthenticated) {
    setAdminMessage("Puedes cambiar quienes aparecen con vida o eliminados.", "success");
  } else {
    setAdminMessage("Entra con la clave admin para editar estados.", "neutral");
  }
}

function applyStatusMap(statuses = {}) {
  let changed = false;

  players.forEach((player) => {
    const status = statuses[String(player.id)];
    if (!["alive", "dead"].includes(status) || player.status === status) return;
    player.status = status;
    changed = true;
  });

  return changed;
}

function readStoredStatuses() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch (error) {
    return {};
  }
}

function saveStatuses() {
  const statusMap = Object.fromEntries(players.map((player) => [player.id, player.status]));
  localStorage.setItem(storageKey, JSON.stringify(statusMap));
}

function loadStatuses() {
  if (!isAdminPage) return;
  if (applyStatusMap(readStoredStatuses())) render();
}

function updatePlayerStatus(player, status) {
  player.status = status;
  saveStatuses();
  render();
  setAdminMessage(`${player.name} ahora aparece como ${status === "alive" ? "vivo" : "muerto"}.`, "success");
}

function handleAdminLogin(event) {
  event.preventDefault();
  const password = adminPassword.value.trim();

  if (!password) {
    setAdminMessage("Escribe la clave admin.", "error");
    return;
  }

  if (password !== adminPasswordValue) {
    isAdminAuthenticated = false;
    localStorage.removeItem(adminTokenKey);
    updateAdminUi();
    render();
    setAdminMessage("Clave incorrecta.", "error");
    return;
  }

  isAdminAuthenticated = true;
  localStorage.setItem(adminTokenKey, "1");
  adminPassword.value = "";
  updateAdminUi();
  render();
}

function handleAdminLogout() {
  isAdminAuthenticated = false;
  localStorage.removeItem(adminTokenKey);
  updateAdminUi();
  render();
}

function updateLiveStats() {
  const live = [...streamStates.values()].filter((state) => state.status === "live").length;
  liveCount.textContent = live;
  liveBadge.textContent = live;
}

function updateStats() {
  const alive = players.filter((player) => player.status === "alive").length;
  const dead = players.length - alive;
  aliveCount.textContent = alive;
  deadCount.textContent = dead;
  totalCount.textContent = players.length;
  totalBadge.textContent = players.length;
  aliveProgress.style.width = `${(alive / players.length) * 100}%`;
  updateLiveStats();
}

async function fetchText(url, options = {}) {
  const { timeoutMs = 12000, ...fetchOptions } = options;
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  const response = await fetch(url, {
    cache: "no-store",
    ...fetchOptions,
    signal: controller.signal,
    headers: {
      "Accept": "text/plain, application/json;q=0.9, */*;q=0.8",
      ...(fetchOptions.headers || {})
    }
  });
  window.clearTimeout(timeoutId);

  if (!response.ok) return null;
  return response.text();
}

function parseJsonPayload(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const objectStart = text.indexOf("{");
    const arrayStart = text.indexOf("[");
    const starts = [objectStart, arrayStart].filter((index) => index >= 0);
    if (!starts.length) return null;

    const start = Math.min(...starts);
    const end = text[start] === "{" ? text.lastIndexOf("}") : text.lastIndexOf("]");
    if (end <= start) return null;

    try {
      return JSON.parse(text.slice(start, end + 1));
    } catch (nestedError) {
      return null;
    }
  }
}

async function fetchJson(url, options = {}) {
  try {
    const text = await fetchText(url, options);
    if (!text) return null;

    return parseJsonPayload(text);
  } catch (error) {
    return null;
  }
}

async function fetchJsonWithCorsFallback(url) {
  const direct = await fetchJson(url);
  if (direct) return direct;

  const jina = await fetchJson(`https://r.jina.ai/http://${url}`, { timeoutMs: 15000 });
  if (jina) return jina;

  return fetchJson(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`, { timeoutMs: 8000 });
}

function parseKickPayload(payload) {
  const livestream = payload?.livestream || payload?.live_stream || null;
  const isLive = Boolean(payload?.is_live || livestream?.is_live || livestream?.session_title || livestream?.slug);

  return {
    isLive,
    title: livestream?.session_title || payload?.session_title || payload?.recent_categories?.[0]?.name || "",
    viewerCount: Number(livestream?.viewer_count || payload?.viewer_count || 0) || 0
  };
}

async function fetchKickStatus(player) {
  const channel = encodeURIComponent(player.streamName);

  try {
    const response = await fetch(`/api/kick-live?channel=${channel}`);
    if (!response.ok) throw new Error("Local Kick API unavailable");

    const payload = await response.json();
    if (!payload.ok) throw new Error("Local Kick API returned an invalid payload");

    return {
      isLive: Boolean(payload.is_live),
      title: payload.title || "",
      viewerCount: payload.viewer_count || 0
    };
  } catch (error) {
    const endpoints = [
      `https://kick.com/api/v2/channels/${channel}`,
      `https://kick.com/api/v1/channels/${channel}`
    ];

    for (const endpoint of endpoints) {
      const payload = await fetchJsonWithCorsFallback(endpoint);
      if (payload) return parseKickPayload(payload);
    }

    return null;
  }
}

async function fetchTwitchStatus(player) {
  const channel = encodeURIComponent(player.streamName);

  try {
    const cacheBust = `t=${Date.now()}`;
    const [uptime, viewersText] = await Promise.all([
      fetchText(`https://decapi.me/twitch/uptime/${channel}?${cacheBust}`),
      fetchText(`https://decapi.me/twitch/viewercount/${channel}?${cacheBust}`)
    ]);

    if (!uptime) {
      const graphqlStatus = await fetchTwitchGraphqlStatus(player);
      return graphqlStatus || fetchTwitchIvrStatus(player);
    }

    const isLive = uptime.length > 0 && !/not live|no está en vivo|offline/i.test(uptime);
    if (!uptime) return null;

    const cleanUptime = uptime.trim();
    const viewerCount = Number.parseInt((viewersText || "").replace(/[^\d]/g, ""), 10) || 0;

    return {
      isLive,
      title: isLive ? uptime : "",
      viewerCount: isLive ? viewerCount : 0
    };
  } catch (error) {
    const graphqlStatus = await fetchTwitchGraphqlStatus(player);
    return graphqlStatus || fetchTwitchIvrStatus(player);
  }
}

async function fetchTwitchGraphqlStatus(player) {
  const payload = await fetchJson("https://gql.twitch.tv/gql", {
    method: "POST",
    timeoutMs: 10000,
    headers: {
      "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko",
      "Content-Type": "application/json"
    },
    body: JSON.stringify([{
      operationName: "StreamMetadata",
      query: "query StreamMetadata($channelLogin: String!) { user(login: $channelLogin) { lastBroadcast { title } stream { id title viewersCount createdAt } } }",
      variables: { channelLogin: player.streamName }
    }])
  });

  const user = payload?.[0]?.data?.user;
  if (!user) return null;

  const stream = user.stream || null;

  return {
    isLive: Boolean(stream),
    title: stream?.title || user.lastBroadcast?.title || "",
    viewerCount: Number(stream?.viewersCount || 0) || 0
  };
}

async function fetchTwitchIvrStatus(player) {
  const channel = encodeURIComponent(player.streamName);
  const payload = await fetchJson(`https://api.ivr.fi/v2/twitch/user?login=${channel}`);
  const user = Array.isArray(payload) ? payload[0] : payload;
  if (!user) return null;

  const stream = user.stream || null;

  return {
    isLive: Boolean(stream),
    title: stream?.title || user.lastBroadcast?.title || "",
    viewerCount: Number(stream?.viewers || stream?.viewerCount || stream?.viewer_count || 0) || 0
  };
}

async function fetchStreamStatus(player) {
   if (matchesStaticPlayer(player, window.PAELLA_FORCE_LIVE_PLAYERS)) {
     return { isLive: true, title: "Marcado en vivo", viewerCount: 0 };
   }

  if (player.streamPlatform === "kick") return fetchKickStatus(player);
  if (player.streamPlatform === "tiktok") return { isLive: false, title: "", viewerCount: 0 };
  return fetchTwitchStatus(player);
}

async function refreshStreamStatuses() {
  await Promise.all(players.map(async (player) => {
    const result = await fetchStreamStatus(player);
    const previous = streamStates.get(player.id);

    if (!result) {
      streamStates.set(player.id, previous?.status === "live"
        ? previous
        : { status: "offline", label: "Offline" });
      return;
    }

    streamStates.set(player.id, result.isLive
      ? { status: "live", label: "En vivo", title: result.title, viewerCount: result.viewerCount }
      : { status: "offline", label: "Offline" });
  }));

  render();
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = players.filter((player) => {
    const matchesQuery = player.name.toLowerCase().includes(query)
      || player.minecraftName.toLowerCase().includes(query)
      || player.streamName.toLowerCase().includes(query)
      || String(player.id).includes(query);
    const matchesFilter = activeFilter === "all" || player.status === activeFilter;
    return matchesQuery && matchesFilter;
  });

  grid.replaceChildren();

  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Sin registros encontrados";
    grid.append(empty);
    updateStats();
    return;
  }

  filtered.forEach((player) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const button = node.querySelector(".status-toggle");
    const stream = node.querySelector(".stream-status");
    const avatar = node.querySelector(".avatar");
    const streamState = streamStates.get(player.id) || { status: "checking", label: "Revisando" };

     node.classList.toggle("is-dead", player.status === "dead");
     // Añadir clase especial para el ganador
     if (player.name === "litdeivi") {
       node.classList.add("winner");
     }
    node.querySelector(".squid-number").textContent = `# ${player.id}`;
    node.querySelector(".squid-dorsal").textContent = String(player.id).padStart(3, "0");
    node.querySelector("h2").textContent = player.name;
    node.querySelector("p").textContent = player.status === "alive" ? "Con vida" : "Eliminado";

    button.dataset.status = player.status;
    button.textContent = player.status === "alive" ? "Vivo" : "Muerto";
    button.disabled = isAdminPage && !isAdminAuthenticated;
    button.setAttribute("aria-label", `Cambiar estado de ${player.name}`);
    button.addEventListener("click", () => {
      if (!isAdminPage || !isAdminAuthenticated) return;
      updatePlayerStatus(player, player.status === "alive" ? "dead" : "alive");
    });

    stream.href = streamUrl(player);
    stream.dataset.stream = streamState.status;
    stream.textContent = streamState.label;
    stream.title = streamState.status === "live" && streamState.title
      ? `${streamState.title}${streamState.viewerCount ? ` - ${streamState.viewerCount} viewers` : ""}`
      : `Abrir canal en ${streamPlatformLabel(player)}: ${player.streamName}`;

    renderMinecraftHead(avatar, player);

    grid.append(node);
  });

  updateStats();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    render();
  });
});

searchInput.addEventListener("input", render);

if (isAdminPage) {
  adminLoginForm.addEventListener("submit", handleAdminLogin);
  adminLogout.addEventListener("click", handleAdminLogout);
  updateAdminUi();
}

updateEventDay();
scheduleEventDayUpdate();
render();
loadStatuses();
refreshStreamStatuses();
window.setInterval(refreshStreamStatuses, twitchCheckInterval);
