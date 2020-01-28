
# Dokumentáció
## Általános leírás
Ez a weboldal a PizzaHut által inspirált web shop szerepét tölti be, ahonnan egy felhasználóbarát környezetből a felhasználó ki tud választani és rendelni az előre elkészített ajánlatokból vagy képes saját ízlésének megfelelően egyedi rendeléseket létrehozni, mindezt a saját otthona kényelméből.

A weboldal tervezése minimalista, így könnyű kezelést biztosít a felhasználó számára (felhasználóbarát). A weboldalon található elemek képesek alkalmazkodni többféle ablakméretekhez (mint például telefon, táblaszámítógép, asztali számítógép és nagy képernyőjű asztali számítógép) a Materialize keretrendszernek rács alapú igazításának köszönhetően.

## Miért ezt a témát választottam?
Azért választottam ezt a témát a weboldalnak mivel érdekel a hasonló rendszerek felépítése, tervezése illetve fejlesztése Nemcsak simán a kíváncsiságom miatt választottam ezt a témát, hanem egy tökéletes kihívás ez számomra, amelyből a szerzett tapasztalatoknak hosszútávon hasznát is tudnám majd venni a valóéletben.

## Motiváció a projekthez
A projekthez az új dolgok iránti kíváncsisságom adta a motivációt, illetve a sikerélmény.

# Használt nyelvek

## Frontend (első vége)

### HTML
A weboldal vázát a HTML nyelv biztosítja. A forráskódban viszont nem sima HTML kódot találunk, hanem ú.n. „komponenseket&quot;. Ezekről a komponensekről bővebben van beszélve a dokumentáció „_Backend (hátsó vége)&quot;_ részében.

### CSS

#### Materialize keretrendszer
Sokféle könyvtár illetve keretrendszer létezik CSS-hez, mint például a Bootstrap, a mi esetünkben pedig a Materialize. Azért választottam ezt a keretrendszert, mert könnyű és érthető a szintaxisa és hatékonyan kezeli a reszponzív elemeket. Különböző méretű kijelzőkön az elemeknek képesek vagyunk adni egy adaptív tulajdonságot, ami a kijelző méretétől függően képes megváltoztatni az adott elem kinézetét és funkcionalitását, a rácshoz igazított tervezésnek köszönhetően (ú.n. grid system).

Böngészők közötti optimalizáció miatt nem kell, hogy aggódjunk, ugyanis ez a keretrendszer minden a mai napokban használt böngészőre található optimalizáció, ezért minden egyes böngészőben (a böngésző sajátosságait kivéve, mint például a görgetősáv vagy a csúszka) ugyan abban az élményben fogunk részesülni, így el tudjuk kerülni a böngészők-közötti következetlenséget.

## Backend (hátsó vége)

### JavaScript
A weboldal backend részében a legtöbbet használt programozási nyelv a JavaScript. A JavaScript egy könnyen megtanulható illetve elsajátítható nyelv, viszonylag rövid idő alatt (alap szinten), ezért alkalmas a weboldal backend részének kezeléséhez.

### ECMAScript 2015 szabvány
A JavaScript az ECMAScript 2015 (ES6) nevezetű szabványában új struktúrákat illetve funkcionalitásokat hoztak be, mint például az aszinkron függvények, nyíl-függvény kifejezések, Promise, _async_ és _await_ kifejezések vagy a más nyelvekben elterjedt osztályok (class). Kompaktabb szintaxisa és bővített képessége nagymértékben megkönnyíti a dolgunkat illetve a munkaidőt jelentős mértékben lecsökkenti.

### Node.js
Itt felmerül az a probléma, hogy JavaScript kódot böngészőn kívül nem vagyunk képesek futtatni, ezért létrehoztak egy ú.n „szerveroldali feldolgozórendszert&quot;, a Node.js-t.

Ennek az eszköznek segítségével képesek vagyunk a saját gépünkön böngésző segítsége nélkül JavaScript kódot futtatni és akár létre is tudunk hozni egy saját webszervert, ami feldolgozza az adott könyvtár segítéségével (vagy keretrendszerben) megírt kódot és továbbküldi az utasításokat a böngészőnek egy számára érthető formátumban (a PHP is hasonló elven alapszik).

### Vue.js (és Vue CLI)
Sokféle könyvtár vagy keretrendszer jelenik meg JavaScript-ben megírva, ezért a kiválasztott keretrendszer az egyik a sok közül, a Vue.js. Ennek a nyelvezetét szintén könnyen el lehet sajátítani. A weboldalt komponensekre osztja, ami tartalmaz egy _HTML_ részt _(template)_, egy JavaScript részt _(script)_ és egy _CSS_ részt _(style)_. A Vue-ban megírt kód a szerveren fut le, ezért kell egy szerver, ami képes ezt a kódot futtatni.

NPM segítségével tudjuk ezt a csomagot telepíteni, a következő parancssor segítségével:
**npm install –g @vue/cli**. A csomag mellé kapunk egy fejlesztői szervert. A fejlesztői szervert a weboldal fejlesztésére használjuk és az **npm run dev** paranccsal vagyunk képesek futtatni. Amikor a fejlesztés olyan részéhez érünk ahol már kiadásra képes az oldal, akkor az
**npm run build** paranccsal a megírt kódot tömöríti, rendezi azokat és egyéb módszerek segítségével kiadásra képessé teszi azt. Ilyenkor a kapott fájlokat fel tudjuk tölteni egy online tárhelyre, ami alkalmas a kódunk futtatására. A mi esetünkben az egyik ilyen online tárhely a Firebase egyik szolgáltatása, amiről bővebben van beszélve a dokumentáció _„Firebase&quot;_ részében.

Megjegyzés: Ha a GitHub oldaláról beszereztük a projekt fájljait és futtatni szeretnénk a fejlesztői szervert akkor problémába ütközünk. Ez azért fordul elő mert nincsenek a megfelelő Node csomagok telepítve. Ezt a problémát ki tudjuk küszöbölni a projektben használt csomagok telepítésével, amit a projekt gyökérkönyvtárában a package.json  fájlon belül a dependencies értékénél találunk meg. Szerencsére nem kell mindezt egyenként manuálisan telepítenünk, az NPM egyik parancsát futtatva telepíteni tudjuk az összes felhasznált csomagot: **npm install**.

### jQuery
Egy másik használt JavaScript könyvtár a jQuery. Főként a Materialize keretrendszer által van használva, ami lehetővé teszi az animációk lejátszását, gombok kezelését illetve egyéb sajátos komponensek működését. Ennek a segítségével könnyen tudunk „trigger&quot; tulajdonsággal ellátni bizonyos elemeket a weboldalon, például mobil eszközöknél a baloldalról előcsúszó menü aktiválását egy ilyen gomb látja el.

### Egyéb fontos Node csomagok
Egyéb kulcsszerepet töltő Node csomagok: _Babel, Firebase-Tools, Slugify, Validator és a Webpack_.
_Megjegyzés:_

1.  A weboldal különböző fejlesztései a Git verziókezelő szoftver segítségével vannak nyomon követve és elérhető GitHub [itt](https://github.com/Csalex01/Pizza-Vue).
2.  A weboldal nyilvánossá van téve a Firebase Hosting eszköz segítségével és megtalálható [itt](https://pizza.csalex.org).

# Firebase
A Firebase szolgáltatásainak eléréséhez be kell, szereznünk egy _„Firebase-tools&quot;_ nevű Node csomagot, amit a következő képpen tudunk megtenni: **npm install -g firebase-tools**.

## Autentikáció
A felhasználók tárolására a Firebase egyik autentikációs eszköze van felhasználva. Ez az eszköz nemcsak a felhasználók tárolására alkalmas, hanem annak regisztrálására is.

Több féle regisztrációs módszert áll rendelkezésünkre: E-mail cím + Jelszó, Telefonszám, Google, Apple, Facebook, Twitter, Yahoo, Microsoft és GitHub fiókok általi regisztrálás illetve bejelentkezés, Play Games, Game Center és végül egy teljesen anonim felhasználóval való bejelentkezés is támogatott.

Az tárolt adatok titkosítása illetve biztonságos elérése miatt nem kell, hogy aggódjunk, mivel a Firebase Auth teljes mértékben kezeli az ilyenfajta kriptográfiai problémákat, ezért nem kell aggódjunk emiatt.

A felhasználó jelenlegi állapotáról nagyon könnyen tudunk információkat lekérni illetve frissíteni. Minden egyes felhasználónak van egy ú.n.&quot;User UID&quot; attribútuma, ami azonosítóként szolgál. Ezek mellett a tárolja a felhasználó létrehozásának illetve az utolsó bejelentkezésének idejét.

## Adatbázis
A Firebase kétféle adatbázist támogat, egy valós idejű adatbázist (Realtime Database) és egy ú.n. Cloud Firestore adatbázist. Ez a projekt a Cloud Firestore adatbázist használja fel.

Ez egy dinamikus, NoSQL 7adatbázis, azaz nem táblákban tárolják, az adatokat illetve nem használnak SQL nyelvet a lekérdezésekre. Az adatokat ú.n. _dokumentumtárolókban_ tárolja, amely _dokumentumokból_ áll. A relációs adatbázisok táblái soraival (rekordjaival) ellentétben, a dokumentumoknak nincsenek megszabva a mezői a dokumentumtárolótól, azaz különböző dokumentumnak lehetnek eltérő mezői függetlenül attól, hogy melyik tárolóban helyezkednek el.

Többféle módon lehet tárolni adatokat ezekbe a dokumentumokba: gyűjtemények, címkék, metainformációk és hierarchikusan elrendezés segítségével. A Cloud Firestore hierarchiai elrendezést használ.

Az adatbázisban 6 darab dokumentumtároló található: _available\_countertops, available\_drinks, available\_toppings, pizzas_ és _users._ Itt a _users_ tárolónak nagy szerepe van a felhasználó adatainak elmentésére (nem összekeverve az autentikációnál használt adatbázissal). Ebben a tárolóban található egy hivatkozás (a dokumentum azonosítója) a felhasználó _User UID_ attribútumára, így könnyen tudunk a két adatbázis között mozogni, ha arra kerül a sor.


