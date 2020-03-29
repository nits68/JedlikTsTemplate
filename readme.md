#  VS Code + TypeScript + Node.js + Jest + GitHub + Heroku

## Heroku teszt:
https://jedlik-ts-template.herokuapp.com/ (Deploy menete: Deploy_on_Heroku.pdf)

## A.  Fejlesztői környezet telepítése, beállítása
1.  Node.js letöltése, telepítése (Node.js V13.x.x javasolt!)<br>
    https://nodejs.org/en/download/
2.  Git for windows telepítése<br>
    https://git-for-windows.github.io/
3.  Visual Studio Code - User Installer (továbbiakban VSCode) telepítése<br>
    https://code.visualstudio.com/Download
4.  VSCode futtatása, Visual Studio Extensions (bővítmények) telepítése: Ctrl-Shift-X<br>
    Bővítmények keresése, telepítés:<br>
     - "Add jsdoc comments" (opcionális, jsdoc rendszerű dokumentáció készítéséhez)
     - "Debugger for Chrome" (nyomkövetéshez - fontos, kell)
     - "EasyZoom" (opcionális, nagyítás Ctrl-görgő)
     - "ESLint" (linter - fontos, kell)
     - "GitLens" (extra Git funkciók, opcionális a telepítése)
     - "npm" (node modulok ellenőrzője - opcionális, ajánlott)
     - "npm Intellisense" (opcionális, ajánlott)
     - "Prettier" (kód formázó - fontos, kell)
     - "Spell Right" (helyesírás ellenőrzés) (opcionális, ajánlott)
     - "vscode-pdf" (pdf olvasó, opcionális)
     - további bővítmények telepítése igény szerint
5. Billentyűkombinációk beállítása:<br>
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattintással, törlés: Del bill.<br>
    - gépel: "reopen" > parancs: "Reopen Closed Editor" > Remove Keybindings (vagy Del bill.)
    - gépel: "test" > parancs: "Run Test Task" > hozzárendel: Ctrl-Shift-T
    - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
    - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
6. A .vscode/settings.json állományban ("files.exclude" szekcióban) vezérelhető az<br>
   Explorer ablakban megjelenő állományok/mappák láthatósága
7. Opcionális: VSCode beállítása: lsd. az oldal végén

## B.  Projekt előkészítése (inicializálása)
1.  https://github.com/nitslaszlo/JedlikTsTemplate.git<br>
    - Ha nem akarsz klónozni:<br>
      JedlikTsTemplate-master.zip letöltése, kicsomagolása a projekt szülőmappájába<br>
      Vagy:<br>
    - Repo klónozása<br>
      Parancssor (cmd.exe)-> cd a projekt szülőmappája<br>
      "git clone https://github.com/nitslaszlo/JedlikTsTemplate.git"<br>
      Ha nem vagy társ-fejlesztő (contributor), akkor töröljed a .git rejtett mappát!
2.  Parancssorból (cmd.exe) belépés a JedlikTsTemplate mappába a "cd JedlikTsTemplate" paranccsal
3.  Node.js lokális modul(ok) telepítése az "npm i" parancs futtatásával<br>
    (lsd.: package.json: dependencies, devDependencies)
4.  JedlikTsTemplate mappa átnevezése tetszőlegesen, ha új projektet készítünk<br>
    Klónozott vagy átnevezett mappa helyi menüből: Open with Code,<br>
    vagy a VSCode indítása után File/Open Folder... menüpontba a project mappa megnyitása<br>

## C.  Fejlesztés, tesztelés, kilépés
1.  VSCode indítása (utoljára megnyitott projektet visszatölti), vagy<br>
    Project mappa helyi menüből: Open with Code, vagy<br>
    VSCode indítása után File/Open Folder... menü pontba a project mappa megnyitása
2.  Ctrl-Shift-B => TypeScript forrás fordítása (tsc) és a lefordított JavaScript futtatása (node-al)<br>
    (Az "npm run dev" parancsot futtatja)<br>
    (amig aktív a task, addig nem kell újraindítani)
3.  Ctrl-Shift-T, vagy "npm run test" a Jest tesztet futtatja<br>
4.  content.ts szerkesztése
5.  Program output ellenőrzése böngészőben: http://localhost:8080/<br>
    A nodemon változás esetén újraindítja a fordítást és futtatást, a böngészőt F5-el (böngészőben) frissíteni kell!<br>
    Opcionális automatikus böngésző frissítés: lsd.: I. pont -> LiveReload<br>
    Nyomkövetés (beépített debugger és Chrome összekapcsolása):<br>
    VS Code-ban F5 -el indítjuk az összekapcsolást<br>
    (böngészőt http://localhost:8080/ URL-el megnyitni/frissíteni (F5) -> elhelyezett töréspontoknál megáll, változók vizsgálata, lépésenkénti végrehajtás)

## D. Verziók és telepített node.js csomagok lekérdezése terminálablakból:
- TypeScript: tsc -v
- Node.js: node -v
- git: git --version
- npm: npm -v
- telepített Node.js globális csomagok: npm -g ls --depth=0
- telepített Node.js lokális csomagok: npm ls --depth=0

## E. Komponensek frissítése<br>
- VSCode: Automatikus, balra lent a fogaskeréken jelzi, ha új verzió jön ki
- VSCode kiterjesztések: Automatikus, balra az Extensions ikon jelzi, ha új verzió jön ki
- Node.js típusdefiníciós állományok: npm i --save-dev @types/node
- npm csomagkezelő: npm i -g npm

## F. Hasznos linkek:
- https://www.tutorialsteacher.com/typescript/
- https://www.typescriptlang.org/docs/home.html
- https://www.tutorialspoint.com/typescript/
- https://github.com/labs42io/clean-code-typescript
- https://code.visualstudio.com/docs
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://git-scm.com/book/en/v2
- https://heroku.com
- https://github.com/Microsoft/vscode-tips-and-tricks
- https://desoft.hu/downloads/git/git_v1.0.pdf

## G. Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):
1. GitHub account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikTsTemplate a repository neve a példában)
3. Git konfigurálása CMD vagy "Git CMD" ablakból:
   - git config --global user.name nitslaszlo
   - git config --global user.email nitslaszlo@gmail.com
   - git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ha van klónozott projektben .Git (rejtett!!!) mappa, akkor törölni kell
6. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G<br>
   majd "Initialize Repository"-ra kattint (felül a rombusz ikonnal)<br>
   majd meg kell adni a projekt könyvtárát a git-nek
7. Remote repository megadása új terminál ablakból (Ctrl-Shift-ö), például:
   - "git remote add origin https://github.com/nitslaszlo/JedlikTsTemplate.git"<br>
   (A pontos parancsot a repo létrehozásakor kiírja a GitHub)   
8. ".gitignore" fájl szerkesztése/létrehozása (ezek a mappák/állományok nem lesznek feltöltve):<br>
   Ctrl-N -el új fájl létrehozása vagy meglévő szerkesztése<br>
   A fájl tartalma:<br>
   node_modules<br>
   npm-debug.log<br>
   (További mappák és fájlok megadhatók, melyek nem kerülnek "feltöltésre")<br>
   Ctrl-S -> .gitignore néven menteni a projekt főkönyvtárába
9. Ctrl-Shift-G -> Commit message megadása felül, majd "commit" utasítás kiadása<br>
   Ctrl-Enter -el, vagy felül a "pipa" ikonnal<br>
10. "There are no staged ..." kérdésre válaszolj "always"-el
11. Változások szinkronizálása ("feltöltés")<br>
    Alul a státus sorban balra "Synchronize Changes" ikonra kattint<br>
    Első alkalommal a GitHub felhasználói nevet vagy e-mail címet és jelszót kér!
12. Változások szinkronizálása ("feltöltés")<br>
    Alul a státus sorban balra "Synchronize Changes" (felhő) ikonra kattint<br>
    Később fel- és letöltésnél egymást "kergető" nyilak lesznek.
13. A "Would you like Code to periodically run 'git fetch'?"  kérdésére válaszoljunk "yes"-el<br>
    ("git.autofetch": true lesz beállítva, alapértelmezésben 3 percenként ellenőrzi a változásokat)

## H. VS Code editor beállítása:
1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy<br>
   Preferences: "Open User Settings" a felhasználónál tárolt beállításokhoz<br>
   Konfig fájl workspace: projekt/.vscode/settings.json<br>
   Konfig fájl user: c:/Users/UserName/AppData/Roaming/Code/User/settings.json

## I. LiveReload - Automatikus böngésző frissítés
1. Telepítsed a LiveReload asztali alakalmazást: http://livereload.com/
2. Telepítsed a LiveReload Chrome bővítményt:<br>
    https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
3. Beállítások:<br>
    https://www.logicbig.com/tutorials/misc/typescript/project-auto-refresh-with-live-reload.html

