VS Code + TypeScript + Node.js
===============================
A.  Fejlesztői környezet telepítése, beállítása
================================================
1.  Node.js letöltése, telepítése:
    https://nodejs.org/en/download/
2.  Node.js command prompt, Node.js beállítása, globális Node.js csomagok telepítése:
    "npm config set package-lock false"
    "npm install -g typescript"
    "npm install -g tslint"
    "npm install -g nodemon"
    parancsokkal
3.  Git for windows telepítése:
    https://git-for-windows.github.io/
4.  Visual Studio Code (továbbiakban VSCode) telepítése
    https://code.visualstudio.com/docs/setup/setup-overview
5.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X
    Kiterjesztés keresése, telepítés:
     - Debugger for Chrome
     - TSLint
     (opcionális: további kiterjesztések telepítése igény szerint)
6. Billentyűkombinációk beállítása: 
    File\Preferences\Keyboard Shortcuts menüvel, vagy Ctrl-K majd Ctrl-S
    Parancs keresése: gépeléssel
    Hozzárendelés, módosítás: "ceruza" ikonra kattíntással
    - gépel: "test" > parancs: "Run Test Task" > hozzárendel: Ctrl-Shift-T
    - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
    - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
7. Opcionális: VSCode beállítása: lsd. az oldal végén

B.  Projekt előkészítése (inicializálása)
=========================================
1.  https://github.com/nitslaszlo/JedlikTsTemplate.git
    JedlikTsTemplate-master.zip letöltése, kicsomagolása a projekt szülőmappájába
    Ha GitHub-on meglévő projektet akarunk git-el másik gépen vagy csoport tagjaként fejleszteni
    Parancssor  -> cd a projekt szülőmappája ->
    "git clone https://github.com/nitslaszlo/JedlikTsTemplate.git"
2.  JedlikTsTemplate-master mappa átnevezése tetszőlegesen, ha új projektet készítünk
    Klónozott vagy átnevezett mappa helyi menüből: Open with Code,
    vagy a VSCode indítása után File/Open Folder... menüpontba a project mappa megnyitása
3.  VSCode terminál ablak aktiválása: View/Integrated Terminal menüvel, vagy Ctrl-ö
    Node.js lokális modul telepítése:
    terminál ablakból "npm install" parancs futtatása
    (@types/node modult telepíti, lsd.: package.json)

C.  Fejlesztés, tesztelés, kilépés
===================================
1.  VSCode indítása (utoljára megnyitott projektet visszatölti), vagy
    Project mappa helyi menüből: Open with Code, vagy
    VSCode indítása után File/Open Folder... menüpontba a project mappa megnyitása
2.  Ctrl-Shift-B => TypeScript forrás átalakítása JavaScript-re (app.ts => app.js)
    (watch üzemmód, az első fordítás után már autómatikus a fordítás)
    (amíg aktív a task, addig nem kell (lehet) újraindítani)
3.  Ctrl-Shift-T => nodemon indítása
    (változásnál újratölti az app.js-t autómatikusan)
    (amíg aktív a task, addig nem kell (lehet) újraindítani)
4.  app.ts szerkesztése
5.  Futtatás: Chrome: http://localhost:8080/
    Nyomkövetés indítása: F5 -el (elhelyezett töréspontoknál megáll)
6.  goto 4.pont :-)
7.  Kilépéskora futó task-ok "kilövése" a kuka ikonnal,
    a TERMINAL (Ctrl-ö) ablakban


Hasznos linkek:
===============
https://www.typescriptlang.org/docs/home.html
https://code.visualstudio.com/docs
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
https://git-scm.com/book/en/v2

Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):
===========================================================
1. Github account létrehozása:
   https://github.com/
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:
   pl.: GitHub asztali alkalmazással vagy github.com-on
   (JedlikTsTemplate a repository neve a példában)
3. Visual Studio Code indítása - project betöltése
   git config --global user.name nitslaszlo@gmail.com (jelszót kér)
   új repo
   meglévő repo git push -u origin –all
4. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G
   majd "Initialize Repository"-ra kattint (felül)
5. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   "git remote add origin https://github.com/nitslaszlo/JedlikTsTemplate.git"

6. ".gitignore" fájl létrehozása (opcionális):
   Ctrl-N -el új fájl létrehozása
   A fájl tartalma:
   node_modules
   app.js
   app.js.map
   (További mappák és fájlok megadhatóak, melyek nem kerülnek "feltöltésre")
   Ctrl-S -> .gitignore néven menteni a projekt főkönyvtárába
7. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
8. Változások szinkronizálása ("feltöltés")
   Alul a státus sorban balra "Synchronize Changes" -ra kattínt

Verziók lekérdezése terminálablakból:
=====================================
TypeScript: tsc -v
Node.js: node -v
git: git --version
npm: npm -v

VS Code editor beállítása:
==========================
1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
   Preferences: "Open User Settings" a felasználónált tárolt beállításokhoz
   Konfig fájl workspace: projekt/.vscode/settings.json
   Konfig fájl user: c:/Users/UserName/AppData/Roaming/Code/User/settings.json 