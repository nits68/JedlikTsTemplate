#  VS Code + TypeScript + Node.js + GitHub + Heroku

## Heroku teszt:
https://jedlik-ts-template.herokuapp.com/ (Deploy menete: Deploy_on_Heroku.pdf)

## A.  Fejlesztői környezet telepítése, beállítása
1.  Node.js letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Parancssor (CMD.exe), vagy Node.js command prompt, globális Node.js csomagok telepítése:
    - "npm install -g typescript"
    - "npm install -g tslint"
    - "npm install -g nodemon"  parancsokkal<br><br>

    Keresési útvonal (path) bővítése, ha a parancssorból (CMD.exe) kiadott "tsc" parancs nem található:<br>
      - Vezérlőpult/Rendszer/Speciális rendszerbeállítások/Speciális fül/Környezeti változók/Path/Új...
      - "%APPDATA%\npm" hozzáadása (idézőjelek nélkül)
3.  Git for windows telepítése<br>
    https://git-for-windows.github.io/
4.  Visual Studio Code - User Installer (továbbiakban VSCode) telepítése<br>
    https://code.visualstudio.com/Download
5.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
    Kiterjesztés keresése, telepítés:<br>
     - "Add jsdoc comments"
     - "Debugger for Chrome"
     - "GitLens"
     - "LaTeX Workshop"
     - "Markdown All in One"
     - "TypeScript TSLint Plugin"
     - további kiterjesztések telepítése igény szerint
6. Billentyűkombinációk beállítása:<br>
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattintással, törlés: Del bill.<br>
    - gépel: "reopen" > parancs: "Reopen Closed Editor" > Remove Keybindings (vagy Del bill.)
    - gépel: "test" > parancs: "Run Test Task" > hozzárendel: Ctrl-Shift-T
    - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
    - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
7. Opcionális: VSCode beállítása: lsd. az oldal végén

## B.  Projekt előkészítése (inicializálása)
1.  https://github.com/nitslaszlo/JedlikTsTemplate.git<br>
    - HA nem akarsz klónozni:<br>
      JedlikTsTemplate-master.zip letöltése, kicsomagolása a projekt szülőmappájába<br>
      Vagy:<br>
    - Repo klónozása<br>
      Parancssor  -> cd a projekt szülőmappája<br>
      "git clone https://github.com/nitslaszlo/JedlikTsTemplate.git"<br>
      Ha nem vagy társ-fejlesztő (contributor), akkor töröljed a .git mappát!
2.  JedlikTsTemplate-master vagy JedlikTsTemplate mappa átnevezése tetszőlegesen, ha új projektet készítünk<br>
    Klónozott vagy átnevezett mappa helyi menüből: Open with Code,<br>
    vagy a VSCode indítása után File/Open Folder... menüpontba a project mappa megnyitása<br>
3.  VSCode terminál ablak aktiválása: View/Integrated Terminal menüvel, vagy Ctrl-ö<br>
    Node.js lokális modul(ok) telepítése:<br>
    terminál ablakból "npm i" parancs futtatása (@types/node modult telepíti, lsd.: package.json)

## C.  Fejlesztés, tesztelés, kilépés
1.  VSCode indítása (utoljára megnyitott projektet visszatölti), vagy<br>
    Project mappa helyi menüből: Open with Code, vagy<br>
    VSCode indítása után File/Open Folder... menüpontba a project mappa megnyitása
2.  Ctrl-Shift-B => TypeScript forrás átalakítása JavaScript-re<br>
    (app.ts => app.js, "npm run compile" paracsot futtatja)<br>
    (watch üzemmód, az első fordítás után már automatikus a fordítás)<br>
    (amíg aktív a task, addig nem kell (lehet) újraindítani)
3.  Ctrl-Shift-T => nodemon indítása<br>
    ("npm run start" paracsot futtatja)<br>
    (amíg aktív a task, addig nem kell (lehet) újraindítani)
4.  content.ts szerkesztése
5.  Futtatás: Chrome: http://localhost:8080/<br>
    A nodemon változás esetén csak a webszervert indítja újra, a böngészőt F5-el (böngészőben) kell frissíteni!<br>
    Nyomkövetés (beépített debugger és Chrome összekapcsolása):<br>
    VS Code-ban F5 -el (elhelyezett töréspontoknál megáll, változók vizsgálata)


## D. Verziók lekérdezése terminálablakból:
- TypeScript: tsc -v
- Node.js: node -v
- git: git --version
- npm: npm -v

## E. Komponensek frissítése<br>
- VSCode: Automatikus, balra lent a fogaskeréken jelzi, ha új verzió jön ki
- VSCode kiterjesztések: Automatikus, balra az Extensions ikon jelzi, ha új verzió jön ki
- TypeScript: npm update -g typescript
- Node.js: npm install --save-dev @types/node

## F. Hasznos linkek:
- https://www.typescriptlang.org/docs/home.html
- https://www.tutorialspoint.com/typescript/
- https://www.typescriptlang.org/docs/handbook/basic-types.html
- https://code.visualstudio.com/docs
- https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
- https://git-scm.com/book/en/v2
- https://heroku.com
- https://github.com/Microsoft/vscode-tips-and-tricks

## G. Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):
1. Github account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikTsTemplate a repository neve a példában)
3. Git konfigurálása Git CMD ablakból:
   - git config --global user.name nitslaszlo
   - git config --global user.email nitslaszlo@gmail.com
   - git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G<br>
   majd "Initialize Repository"-ra kattint (felül)
6. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin https://github.com/nitslaszlo/JedlikTsTemplate.git"
   - "git push -u origin master"
7. ".gitignore" fájl létrehozása (opcionális):<br>
   Ctrl-N -el új fájl létrehozása<br>
   A fájl tartalma:<br>
   node_modules<br>
   npm-debug.log<br>
   (További mappák és fájlok megadhatóak, melyek nem kerülnek "feltöltésre")<br>
   Ctrl-S -> .gitignore néven menteni a projekt főkönyvtárába
8. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
9. Változások szinkronizálása ("feltöltés")<br>
   Alul a státus sorban balra "Synchronize Changes" -ra kattint

## H. VS Code editor beállítása:
1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy<br>
   Preferences: "Open User Settings" a felasználónált tárolt beállításokhoz<br>
   Konfig fájl workspace: projekt/.vscode/settings.json<br>
   Konfig fájl user: c:/Users/UserName/AppData/Roaming/Code/User/settings.json