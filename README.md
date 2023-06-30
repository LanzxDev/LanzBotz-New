[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)
<p align="center">
    <img src="https://telegra.ph/file/b8608ca384b5922283899.jpg" width="100%" style="margin-left: auto;margin-right: auto;display: block;">
</p>

## PENTING

> **Warning**: Jangan Memperjual Belikan Script Ini. 

<h1 align="center">LanBotzNew - MD</h1>
<p align="center">
  <a href="https://github.com/LanzxDev"><img src="http://readme-typing-svg.herokuapp.com?color=FFFFFF&center=true&vCenter=true&multiline=false&lines=Lan+Botz+Multi+Device;Base+ori+by+YanXiao;Recode+By+LanzxDev;Give+star+and+forks+this+Repo+:D" alt="ʘᴗʘ">
</p>

<p align="center">
 <a href="#"><img title="LanBotz" src="https://img.shields.io/badge/Whatshapp BOT-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/ImYanXiao"><img title="Author" src="https://img.shields.io/badge/AUTHOR-ImYanXiao-green.svg?style=for-the-badge&logo=github"></a>

---------

## ```Contact Me 💌``` 
  <a href="https://wa.me/6288298582710">
    <img align="left" alt="SIEGRIN | Whastapp" width="26px" src="https://github.com/siegrin/siegrin/blob/main/Assets/Whatsapp.svg" />
  </a> &nbsp;&nbsp;
  <a href="mailto: lanzxdev@gmail.com">
    <img align="left" alt="SIEGRIN | Gmail" width="26px" src="https://github.com/siegrin/siegrin/blob/main/Assets/Gmail.svg" />
  </a> &nbsp;&nbsp;
---------

[![BOT WHATSAPP](https://img.shields.io/badge/WhatsApp%20BOT-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/6285792077972) 
---------

### a little about this bot
- ✔️ | **Simple** 
- ✔️ | **Button Template** 
- ✔️ | **Multi Device** 
- ✔️ | **Button Document(Experiment)** 
---------
### Some of the features include
- ✔️ | Menfess
- ✔️ | AntiCall
- ✔️ | Game & Rpg Game
- ✔️ | Nsfw 
- ✔️ | Sticker 
- ✔️ | Kerang Ajaib 
- ✔️ | Quotes
- ✔️ | Anime 
- ✔️ | Premium 
- ✔️ | Tools 
---------
 
## ```USER RAILWAY```

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app)

## ```USER REPLIT```
[![Run on Repl.it](https://repl.it/badge/github/LanzxDev/LanzBotz-New)](https://repl.it/github/LanzxDev/LanzBotz-New )
## TERMUX USER
```bash
$ pkg upgrade && pkg update
$ pkg install git -y
$ pkg install nodejs -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ git clone https://github.com/LanzxDev/LanzBotz-New
$ cd LanzBotz-New 
$ npm i 
```
If error try using yarn instead of npm
```bash
$ pkg install yarn -y
$ yarn install
$ node .
```
---------

## TERMUX WITH UBUNTU

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

[ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

[ INSTALLING NODEJS & LANZBOTZ-MD]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/LanzxDev/LanzBotz-New
cd LanzBotz-New 
npm install
npm update
```

---------

## FOR WINDOWS/VPS/RDP USER 💻

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/LanzxDev/LanzBotz-New
cd LanzBotz-New 
npm install
npm update
```

---------

## Run ⏳

```bash
node .
```

---------

## ```Arguments node . [--options] [<session name>]```

## `--self`
* activate self mode (ignores other)

## `--pconly`
* If that chat not from private bot, bot will ignore

## `--gconly`
* If that chat not from group, bot will ignore

## `--swonly`
* If that chat not from status, bot will ignore

## `--prefix <prefixes>`
* `prefixes` are seperated by each character
Set prefix

## `--server`
* Used for [heroku](https://heroku.com/) or scan through website

## `--restrict`
* Enables restricted plugins (which can lead your number to be **banned** if used too often)
* Group Administration `add, kick`

## `--img`
* Enable image inspector through terminal

## `--autoread`
* If enabled, all incoming messages will be marked as read

## `--nyimak`
* No bot, just print received messages and add users to database

## `--test`
* **Development** Testing Mode

---------

## ```How To Customise Message Display```
```js
// Syntax
conn.sendButton(
      jid, // jid of the user to send the message to
      text, // text to send
      foooter, // footer to send
      buffer, // buffer to send (optional), if you want to send button image, location, etc
      buttons, // buttons to send, example [['text1', 'id1'], ['text2', 'id2']]
      quoted, // quoted message to send (optional)
      options // options to send, example { asLocation: true }
)

// example 
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', null, [
      ['Hello', 'hello'], ['Bye', 'bye']
])
// example button location
conn.sendButton(m.chat, 'Hello world!', '@BochilGaming', 'https://github.com/BochilGaming', 
      [['Hello', 'hello'], ['Bye', 'bye']], 
      null, { asLocation: true }
)
```
---------

### 📮 S&K
1. Not For Sale
2. Don't forget give star this repo
3. Don't use this repository wrong!
4. If you have problem chat me in owner number

---------

## ```Thanks to ✨```
* [`Allah SWT`]
* [`My parents`]
* [`All Friends`]
* [`All Contributors`]
* [`All Creator Bot`]
* [`Adiwajshing/Baileys`](https://github.com/adiwajshing/Baileys)
* [`Nurutomo`](https://github.com/Nurutomo)
* [`BochilGaming`](https://github.com/bochilgaming)
* [`Fokus ID`](https://github.com/Fokusdotid) 
