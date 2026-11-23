(function source14(){
'use strict';
window.SaufSafariV14=function(){
if(window.__saufsafari14)return;window.__saufsafari14=true;
Object.assign(TR.de,{difficulty:'Schwierigkeit',easy:'Leicht',medium:'Mittel',hard:'Schwer',skipPlayer:'⏭ Spieler überspringen',duelStart:'⚔️ Sieger wählen',duelTitle:'⚔️ Wer hat gewonnen?',duelInfo:'Wähle den Sieger des Duells.',voteStart:'🗳️ Jetzt abstimmen',voteTitle:'🗳️ Gruppen-Abstimmung',voteInfo:'Stimmt nacheinander ab. Bis zum Ergebnis bleiben die Stimmen geheim.',votePerson:'ist an der Reihe',votePass:'Stimme auslassen',voteResult:'🏆 Abstimmungsergebnis',voteFinish:'🍻 Weiter zur Schluckverteilung',voteVotes:'Stimmen',voteDone:'Abstimmung abgeschlossen.',rule14t:'🎯 Schwierigkeit, Duelle & Abstimmungen',rule14:'Je schwieriger die Frage, desto mehr Schlucke. Bei Duellen wählst du den Gewinner; bei Gruppenfragen stimmen alle nacheinander ab. Spieler können eine Runde aussetzen.',version:'Version 1.4.1 · Created by MS'});
Object.assign(TR.en,{difficulty:'Difficulty',easy:'Easy',medium:'Medium',hard:'Hard',skipPlayer:'⏭ Skip player',duelStart:'⚔️ Choose winner',duelTitle:'⚔️ Who won?',duelInfo:'Select the winner of the challenge.',voteStart:'🗳️ Start voting',voteTitle:'🗳️ Group vote',voteInfo:'Vote one by one. Choices stay private until the results.',votePerson:'is voting',votePass:'Skip vote',voteResult:'🏆 Voting result',voteFinish:'🍻 Continue to sip allocation',voteVotes:'votes',voteDone:'Voting complete.',rule14t:'🎯 Difficulty, duels & voting',rule14:'Harder challenges carry more sips. Choose a winner in duels, vote together on group questions, and skip a player for a round.',version:'Version 1.4.1 · Created by MS'});
if(!Array.isArray(state.recentTopics))state.recentTopics=[];
const add=(id,de,en,sex,diff,topic,opt={})=>{if(DATA.cards.some(c=>c[0]===id))return;DATA.cards.push([id,'Neue Runde',opt.task?'Aufgabe':'Frage',de,opt.min||2,!!opt.malePresent,!!opt.femalePresent,!!opt.male,!!opt.female,en,!!sex,diff,topic,!!opt.vote,!!opt.duel]);};
const F=[
['{spieler}, Klartext: Wie viele Zentimeter traust du {mann} beim besten Stück zu? Nenne eine genaue Zahl!','{spieler}, be bold: how many centimetres do you reckon {mann} is packing? Give an exact number!',1,3,'body',{female:1,malePresent:1}],
['{spieler}, welchem Mann hier traust du am ehesten zu, im Bett richtig zu überraschen – und warum?','{spieler}, which guy here do you reckon would be the biggest surprise in bed, and why?',1,2,'attraction',{female:1,malePresent:1}],
['{spieler}, rate bei {frau} die BH-Größe: Umfang und Körbchen. Wie sicher bist du dir?','{spieler}, guess {frau}’s bra size: band and cup. How confident are you?',1,3,'body',{male:1,femalePresent:1}],
['{spieler}, mit welchem Mann hier würdest du am ehesten für eine heiße Nacht verschwinden?','{spieler}, which guy here would you most want to sneak away with for a steamy night?',1,3,'choice',{female:1,malePresent:1}],
['{spieler}, welche Frau hier würdest du am liebsten leidenschaftlich küssen?','{spieler}, which woman here would you most love to kiss passionately?',1,2,'kissing',{male:1,femalePresent:1}],
['{spieler}, welchem Mann dieser Runde traust du den größten Penis zu? Nur eine Vermutung!','{spieler}, which guy here do you think has the biggest penis? Take a guess!',1,3,'body',{female:1,malePresent:1}],
['{spieler}, welcher Frau hier würdest du am ehesten eine richtig versaute Nachricht schicken?','{spieler}, which woman here would you most likely send a filthy message to?',1,3,'secrets',{male:1,femalePresent:1}],
['{spieler}, welcher Mann hier könnte dich vermutlich am schnellsten verführen?','{spieler}, which guy here could probably seduce you the fastest?',1,2,'attraction',{female:1,malePresent:1}],
['{spieler}, wer hat für dich den attraktivsten Hintern unter den Frauen dieser Runde? Entscheide dich!','{spieler}, which woman here has the most attractive bum in your opinion? Pick one!',1,3,'body',{male:1,femalePresent:1}],
['{spieler}, eine Nacht im Hotel: {ziel} oder {ziel2}? Wen wählst du, und warum?','{spieler}, one hotel night: {ziel} or {ziel2}? Who gets your vote, and why?',1,3,'choice',{min:3}],
['{spieler}, welche Frau hier würde beim Sex wohl am ehesten die Kontrolle übernehmen?','{spieler}, which woman here would most likely take charge in bed?',1,3,'secrets',{male:1,femalePresent:1}],
['{spieler}, welchen Mann aus der Runde würdest du am ehesten spontan küssen?','{spieler}, which guy in this group would you most likely kiss on the spot?',1,2,'kissing',{female:1,malePresent:1}],
['{spieler}, Hand aufs Herz: Hast du bei deiner Penislänge schon einmal ein paar Zentimeter dazugeschummelt?','{spieler}, hand on heart: have you ever exaggerated your penis size by a few centimetres?',1,3,'confession',{male:1}],
['{spieler}, hast du deinen Ausschnitt schon einmal ganz bewusst zum Flirten eingesetzt?','{spieler}, have you ever deliberately used a revealing neckline to flirt?',1,2,'confession',{female:1}],
['{spieler}, welche Frau hier könnte dich mit einem einzigen Kuss völlig aus dem Konzept bringen?','{spieler}, which woman here could leave you speechless with just one kiss?',1,2,'kissing',{male:1,femalePresent:1}],
['{spieler}, welchem Mann hier traust du die wildeste Nacht zu?','{spieler}, which guy here do you reckon would make for the wildest night?',1,3,'attraction',{female:1,malePresent:1}],
['{spieler}, welcher Körperteil einer Frau zieht deinen Blick als Erstes an? Sei ehrlich!','{spieler}, which part of a woman’s body catches your eye first? Be honest!',1,2,'body',{male:1}],
['{spieler}, wie viele One-Night-Stands hattest du bisher? Eine ungefähre Zahl reicht.','{spieler}, roughly how many one-night stands have you had?',1,3,'confession',{female:1}],
['{spieler}, was war dein peinlichster Moment beim Sex? Erzähl, wenn du magst!','{spieler}, what was your most embarrassing moment during sex? Share it if you want!',1,3,'confession',{male:1}],
['{spieler}, hast du schon einmal daran gedacht, jemanden aus dieser Runde zu küssen?','{spieler}, have you ever thought about kissing someone here?',1,2,'kissing',{female:1}],
['{spieler}, welche Frau hier würdest du für ein Wochenende im Hotel auswählen?','{spieler}, which woman here would you choose for a weekend away at a hotel?',1,3,'choice',{male:1,femalePresent:1}],
['{spieler}, was ist die gewagteste Nachricht, die du je verschickt hast?','{spieler}, what’s the boldest message you’ve ever sent?',1,2,'confession',{female:1}],
['{spieler}, wie viele Männer hier hatten deiner Meinung nach schon beim ersten Date Sex?','{spieler}, how many of the guys here do you think have had sex on a first date?',1,3,'secrets',{female:1,malePresent:1}],
['{spieler}, welche Frau hier würde beim Blind Date wohl am selbstbewusstesten auftreten?','{spieler}, which woman here would be the most confident on a blind date?',1,2,'attraction',{male:1,femalePresent:1}],
['Alle stimmen ab: Wer hatte schon einmal Sex an einem Ort, an dem jederzeit jemand hätte hereinkommen können?','Everyone: who has had sex somewhere they could have been caught at any moment?',1,3,'confession',{}],
['{spieler}, ist dir die Körpergröße bei Männern wichtig? Wenn ja: Wie groß muss ein Mann mindestens sein, damit er für dich infrage kommt? Nenne Zentimeter!','{spieler}, does height matter to you in a man? If so, what is your minimum height in centimetres?',0,2,'attraction',{female:1}],
['{spieler}, {ziel} oder {ziel2}: Wen würdest du lieber küssen? Begründe deine Wahl!','{spieler}, {ziel} or {ziel2}: who would you rather kiss? Explain your choice!',0,2,'choice',{min:3}],
['{spieler}, {ziel} oder {ziel2}: Mit wem würdest du lieber auf ein heimliches Date gehen?','{spieler}, {ziel} or {ziel2}: who would you rather go on a secret date with?',0,2,'choice',{min:3}],
['{spieler}, {ziel} oder {ziel2}: Mit wem würdest du lieber die Nacht verbringen?','{spieler}, {ziel} or {ziel2}: who would you rather spend the night with?',1,3,'choice',{min:3}],
['{spieler}, wer hier wirkt unschuldig, hat aber vermutlich die wildesten Fantasien?','{spieler}, who looks innocent but probably has the wildest fantasies?',1,3,'secrets',{}],
['{spieler}, welche Person hier würdest du am ehesten nach einem heißen Date fragen?','{spieler}, who here would you most likely ask on a steamy date?',1,2,'choice',{}],
['{spieler}, {ziel} oder {ziel2}: Mit wem könntest du am schlechtesten ein Geheimnis teilen?','{spieler}, {ziel} or {ziel2}: who would you trust less with a secret?',0,2,'choice',{min:3}],
['{spieler}, wer hier würde sich wohl am ehesten beim Flirten verplappern?','{spieler}, who here is most likely to put their foot in it while flirting?',0,1,'flirting',{}],
['{spieler}, {ziel} oder {ziel2}: Wer würde eher den ersten Schritt machen?','{spieler}, {ziel} or {ziel2}: who would be more likely to make the first move?',0,2,'choice',{min:3}],
['{spieler}, {ziel} oder {ziel2}: Wer wäre bei einem ersten Date mutiger?','{spieler}, {ziel} or {ziel2}: who would be bolder on a first date?',0,2,'choice',{min:3}],
['{spieler}, welcher Mitspieler würde bei einer geheimen Romanze zuerst auffliegen?','{spieler}, who here would be the first to get caught having a secret romance?',0,2,'secrets',{}],
['{spieler}, wer hier würde beim ersten Kuss am ehesten die Nerven verlieren?','{spieler}, who here would be most likely to get nervous before a first kiss?',0,2,'kissing',{}]
];
F.forEach((x,i)=>add(1001+i,...x));
const D=[
['{spieler} und {ziel}: Armdrücken! Wer gewinnt?','{spieler} and {ziel}: arm wrestling! Who wins?',3],
['{spieler} gegen {ziel}: Wer hält beim Blickduell länger durch?','{spieler} versus {ziel}: who wins the staring contest?',2],
['{spieler} gegen {ziel}: Drei Runden Schere, Stein, Papier. Best of three!','{spieler} versus {ziel}: best of three at rock, paper, scissors!',1],
['{spieler} gegen {ziel}: Daumen-Wrestling!','{spieler} versus {ziel}: thumb wrestling!',2],
['{spieler} gegen {ziel}: Wer schafft mehr Liegestütze in 30 Sekunden?','{spieler} versus {ziel}: who can do more press-ups in 30 seconds?',3],
['{spieler} gegen {ziel}: Wer kann länger auf einem Bein stehen?','{spieler} versus {ziel}: who can balance on one leg for longer?',1],
['{spieler} gegen {ziel}: Wer kann den schwierigsten Zungenbrecher schneller fehlerfrei sagen?','{spieler} versus {ziel}: who can say a tricky tongue-twister first without a mistake?',2],
['{spieler} gegen {ziel}: Wer hält einen Unterarmstütz länger durch?','{spieler} versus {ziel}: who can hold a plank for longer?',3]
];
D.forEach((x,i)=>add(1038+i,x[0],x[1],false,x[2],'duel',{duel:true,task:true}));
const V=[
['Alle stimmen ab: Wer würde beim ersten Date am ehesten den ersten Schritt machen?','Everyone votes: who would most likely make the first move on a first date?',0,2],
['Alle stimmen ab: Wer kann am besten flirten, ohne ein Wort zu sagen?','Everyone votes: who is best at flirting without saying a word?',0,2],
['Alle stimmen ab: Wer bekommt beim Küssen am schnellsten rote Ohren?','Everyone votes: who would blush the most during a kiss?',0,1],
['Alle stimmen ab: Wer hat die geheimnisvollste Ausstrahlung?','Everyone votes: who gives off the most mysterious vibe?',0,1],
['Alle stimmen ab: Wer würde sich am ehesten auf ein Blind Date einlassen?','Everyone votes: who would be most up for a blind date?',0,2],
['Alle stimmen ab: Wer würde bei einem Flirtduell gewinnen?','Everyone votes: who would win a flirting contest?',0,2],
['Alle stimmen ab: Wer erzählt wohl die heißesten Dating-Geschichten?','Everyone votes: who probably has the steamiest dating stories?',1,2],
['Alle stimmen ab: Wer würde am ehesten einen One-Night-Stand geheim halten?','Everyone votes: who is most likely to keep a one-night stand secret?',1,3],
['Alle stimmen ab: Wer würde bei einer erotischen Nachricht am ehesten rot werden?','Everyone votes: who would blush most at a saucy text?',1,2],
['Alle stimmen ab: Wer hätte wohl die gewagtesten Sexfantasien?','Everyone votes: who probably has the wildest sexual fantasies?',1,3],
['Alle stimmen ab: Wer würde am ehesten beim ersten Date im Bett landen?','Everyone votes: who would be most likely to have sex on a first date?',1,3],
['Alle stimmen ab: Wer wirkt am unschuldigsten, könnte dich im Bett aber am meisten überraschen?','Everyone votes: who looks most innocent but might surprise you most in bed?',1,3]
];
V.forEach((x,i)=>add(1046+i,x[0],x[1],!!x[2],x[3],'vote',{vote:true}));
// SaufSafari 1.4.1: inhaltlich doppelte Fragen bekommen neue Texte.
// Karten-IDs bleiben gleich, damit gespeicherte Spielstände gültig bleiben.
const QUESTION_FIXES14={
23:['{spieler}, würdest du {frau} eher eine geheime Fantasie verraten oder eine gewagte Frage stellen? Entscheide dich – und sag warum!','{spieler}, would you rather tell {frau} a secret fantasy or ask her a daring question? Choose, and tell us why!'],
701:['{spieler}, welchen richtig frechen Anmachspruch würdest du {frau} in einer privaten Nachricht schreiben?','{spieler}, what cheeky pick-up line would you send {frau} in a private message?'],
702:['{spieler}, mit welcher Frage würdest du {frau} beim ersten Date garantiert zum Erröten bringen?','{spieler}, what question would make {frau} blush on a first date?'],
62:['{spieler}, hast du schon einmal extra länger auf einer Party ausgehalten, nur um einer bestimmten Person näherzukommen?','{spieler}, have you ever stayed at a party longer just to get closer to someone you liked?'],
211:['{spieler}, hat dich bei einem intimen Moment schon einmal eine völlig unerwartete Unterbrechung überrascht?','{spieler}, has an intimate moment ever been interrupted in a completely unexpected way?'],
755:['{spieler}, würdest du bei einem heißen Date lieber das Licht anlassen oder es ganz dunkel haben? Warum?','{spieler}, on a steamy date, would you rather leave the lights on or keep everything dark? Why?'],
22:['{spieler}, welcher Frau aus der Runde würdest du am ehesten einen richtig frechen Zettel zustecken? Was würde draufstehen?','{spieler}, which woman here would you slip a cheeky note to, and what would it say?'],
232:['{spieler}, welche deiner Flirtnachrichten wurde durch die Autokorrektur schon einmal völlig ruiniert?','{spieler}, has autocorrect ever completely ruined one of your flirty messages? What did it say?'],
57:['{spieler}, welches Kompliment im Bett würdest du dich heute am ehesten trauen auszusprechen?','{spieler}, what compliment in bed would you be brave enough to say out loud?'],
205:['{spieler}, hast du schon einmal bei einem intimen Moment plötzlich eine Ausrede gebraucht, um zu verschwinden?','{spieler}, have you ever needed an excuse to leave in the middle of an intimate moment?'],
192:['{spieler}, wann hast du das letzte Mal den ersten Schritt gemacht, obwohl du richtig nervös warst?','{spieler}, when did you last make the first move even though you were really nervous?'],
178:['{spieler}, hast du schon einmal bei einem Kuss plötzlich gemerkt, dass die Chemie doch nicht stimmt?','{spieler}, have you ever realised halfway through a kiss that the chemistry just was not there?'],
949:['{spieler}, sprich zehn Sekunden lang, ohne deine Lippen zu bewegen. Versteht dich die Runde?','{spieler}, try speaking for ten seconds without moving your lips. Can the others understand you?'],
32:['{spieler}, welche weibliche Mitspielerin hätte beim Speed-Dating wohl den schlagfertigsten Spruch auf Lager?','{spieler}, which woman here would have the quickest comeback at a speed-dating event?'],
215:['{spieler}, hast du schon einmal ein Date abgesagt, obwohl du die Person eigentlich attraktiv fandest? Warum?','{spieler}, have you ever cancelled a date even though you found the person attractive? Why?'],
275:['{spieler}, welche völlig erfundene Geschichte über dich fanden andere schon einmal überraschend glaubwürdig?','{spieler}, what completely made-up story about you have other people surprisingly believed?'],
527:['{spieler}, sage das Alphabet rückwärts auf. Wie weit kommst du in zwanzig Sekunden?','{spieler}, say the alphabet backwards. How far can you get in twenty seconds?'],
565:['{spieler}, erfinde in zwanzig Sekunden einen verrückten Werbeslogan für {ziel}.','{spieler}, invent a ridiculous advertising slogan for {ziel} in twenty seconds.'],
922:['{spieler}, beschreibe ein Land nur mit drei Geräuschen. Kann {ziel} es erraten?','{spieler}, describe a country using only three sounds. Can {ziel} guess it?']
};
for(const c of DATA.cards){const fix=QUESTION_FIXES14[c[0]];if(fix){c[3]=fix[0];c[9]=fix[1];}}
// Zusätzliche Sicherung gegen wortgleiche Karten (auch bei künftigen Ergänzungen).
function canonicalCard14(str){return String(str||'').toLocaleLowerCase('de').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/\{spieler\}|\{ziel2?\}|\{frau\}|\{mann\}/g,'{name}').replace(/[^\p{L}\p{N}{}]+/gu,' ').replace(/\s+/g,' ').trim();}
const seenCards14=new Set(),hiddenDuplicates14=new Set();
for(const c of DATA.cards){const key=canonicalCard14(c[3]);if(!key)continue;if(seenCards14.has(key))hiddenDuplicates14.add(c[0]);else seenCards14.add(key);}
const eligibleBeforeDedup14=isEligible;
isEligible=function(card,person){return !hiddenDuplicates14.has(card[0])&&eligibleBeforeDedup14(card,person);};
const baseFormat=formatText;
formatText=function(template,actorId,targets){let s=baseFormat(template,actorId,targets);return s.replace(/\bwelchen Frau\b/gi,'welche Frau').replace(/\bwelche Mann\b/gi,'welchen Mann').replace(/\bmit welchen Mann\b/gi,'mit welchem Mann').replace(/\bwie gross\b/gi,'wie groß').replace(/\s+([?!,.])/g,'$1').replace(/\?\?+/g,'?');};
function topicOf(c){if(c?.[12])return c[12];const s=((c?.[3]||'')+' '+(c?.[9]||'')).toLowerCase();if(/armdrück|arm wrestl|duell|contest|wettkampf|liegestütz|press-up|plank/.test(s))return 'duel';if(/penis|bh-größe|bra size|brust|breast|hinter|bum|körperteil/.test(s))return 'body';if(/one-night|sex|bett|fantasie|intim|bed/.test(s))return 'secrets';if(/küss|kiss/.test(s))return 'kissing';if(/date|flirt|verlieb|attract/.test(s))return 'flirting';if(/schätz|guess|wie viel|how many/.test(s))return 'guess';if(/wahrheit|gesteh|geheimnis|truth|secret/.test(s))return 'confession';return c?.[2]==='Aufgabe'?'challenge':'question';}
function isDuel(){const c=currentDef();if(!c)return false;if(state.current?.type==='normal'&&c[14])return true;if(state.current?.type==='special'&&/duell|duel/i.test(String(c[0])))return true;const txt=currentText();return /armdrück|arm wrestl|blickduell|staring contest|daumen.wrest|thumb wrest|schere.{0,8}stein.{0,8}papier|rock.{0,8}paper.{0,8}scissors|liegestütz.duell|press.up contest/i.test(txt)&&(state.current?.type==='special'||c[2]==='Aufgabe');}
function isVote(){const c=currentDef();return !!(state.current?.type==='normal'&&c?.[13]);}
function difficultyOf(){const c=currentDef();if(!c)return 1;if(state.current?.type==='special'){const text=currentText().toLowerCase();return /duell|duel|armdrück|arm wrestl|sex|penis|bh.größe|intim|fantasie|fantasy/.test(String(c[0]).toLowerCase()+' '+text)?3:2;}if(Number.isInteger(c[11])&&c[11]>=1&&c[11]<=3)return c[11];const tx=((c[3]||'')+' '+(c[9]||'')).toLowerCase();if(/armdrück|arm wrest|liegestütz|press.up|plank|penislänge|penisgröße|bh.größe|bra size|one.night|sexfantasie|sex fantasy|intimstes|peinlichster moment beim sex|most embarrassing.*sex/.test(tx))return 3;if(c[10]||/küssen|küss|kiss|geheimnis|truth|schätz|estimate|date|flirt|mutprobe|wette|challenge|duell/.test(tx))return 2;return c[2]==='Aufgabe'?2:1;}
getBudget=function(){let lv=Math.min(3,Math.max(1,+state.level||1)),df=difficultyOf();return [[1,2,3],[2,3,4],[3,5,6]][lv-1][df-1];};
const baseDrawSpecial=drawSpecial;
drawSpecial=function(){state.vote14=null;state.modalKind14=null;baseDrawSpecial();state.recentTopics.push('special');state.recentTopics=state.recentTopics.slice(-3);save();};
drawNormal=function(){const ps=active();if(ps.length<2){state.current=null;go('players');return;}const used=new Set(state.used);let card=null,person=null;for(let offset=0;offset<ps.length;offset++){let p=ps[(state.turn+offset)%ps.length];let candidates=DATA.cards.filter(c=>!used.has(c[0])&&modeAllowed(c)&&isEligible(c,p));if(candidates.length){const recent=state.recentTopics.slice(-2),fresh=candidates.filter(c=>!recent.includes(topicOf(c)));if(fresh.length)candidates=fresh;const hot=candidates.filter(c=>c[10]===true);card=state.mode==='all'&&hot.length&&Math.random()<.4?pick(hot):pick(candidates);person=p;state.turn+=offset;break;}}
if(!card){state.current=null;go('game');return;}state.used.push(card[0]);const targets=chooseTargets(state.lang==='en'?card[9]:card[3],person);state.current={cardKey:'N'+card[0],type:'normal',id:card[0],personId:person.id,targets,closed:false};state.stage='card';state.modal=false;state.modalKind14=null;state.vote14=null;prepareTimer(state.lang==='en'?card[9]:card[3],card[2]);state.recentTopics.push(topicOf(card));state.recentTopics=state.recentTopics.slice(-3);save();render();voiceCard();};
const baseVoiceCard=voiceCard;
voiceCard=function(force=false){if(isVote())voiceSay(currentText(),force);else baseVoiceCard(force);};
const baseOpenDist=openDistribute;
openDistribute=function(outcome){state.modalKind14='allocation';baseOpenDist(outcome);};
const baseConfirmDist=confirmDistribution;
confirmDistribution=function(){const vote=state.vote14&&isVote()?JSON.parse(JSON.stringify(state.vote14)):null;baseConfirmDist();if(state.current?.closed&&!state.modal&&vote){const last=state.history[state.history.length-1];if(last?.card===state.current.cardKey)last.vote=vote;state.vote14=null;save();render();}};
const baseCloseModal=closeModal;
closeModal=function(){state.modalKind14=null;baseCloseModal();};
function playersForDuel(){const a=curActor(),ps=active(),other=findPlayer(state.current?.targets?.ziel)||findPlayer(state.current?.targets?.mann)||findPlayer(state.current?.targets?.frau)||ps.find(p=>p.id!==a?.id);if(!a||!other||a.id===other.id)return ps.slice(0,2);return [a,other];}
function popup(title,info,body){return `<div class="modal-scrim"><section class="modal-sheet" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="modal-top"><div><div class="eyebrow">🦁 SAUFSAFARI</div><h2>${esc(title)}</h2><p>${esc(info)}</p></div><button class="modal-x" type="button" data-action="closeModal" aria-label="${esc(t('close'))}">×</button></div>${body}<div class="stack">${btn(t('close'),'closeModal','ghost')}</div></section></div>`;}
const baseRenderModal=renderModal;
renderModal=function(){const root=$('modal-root');if(!root)return;if(!state.modal||!state.current){baseRenderModal();return;}if(state.modalKind14==='duel'){document.body.classList.add('modal-open');const ps=playersForDuel();root.innerHTML=popup(t('duelTitle'),t('duelInfo'),`<div class="allocate-list">${ps.map(p=>`<div class="allocate-row"><span class="allocate-name">${esc(p.name)}</span><button class="round-btn winner-select" data-action="duelWinner14" data-id="${esc(p.id)}" aria-label="${esc(p.name)}">🏆</button></div>`).join('')}</div><p class="modal-note">🍻 ${getBudget()} ${t('sips')} · ${t(['easy','medium','hard'][difficultyOf()-1])}</p>`);return;}
if(state.modalKind14==='vote'){document.body.classList.add('modal-open');let v=state.vote14;if(!v){state.modal=false;state.modalKind14=null;return baseRenderModal();}if(v.index<v.voters.length){const voter=findPlayer(v.voters[v.index]);root.innerHTML=popup(t('voteTitle'),t('voteInfo'),`<div class="allocate-budget"><strong>${v.index+1} / ${v.voters.length}</strong><span>${esc(voter?.name||'')} ${t('votePerson')}</span></div><div class="allocate-list">${active().map(p=>`<div class="allocate-row"><span class="allocate-name">${esc(p.name)}</span><button class="round-btn winner-select" data-action="voteFor14" data-id="${esc(p.id)}" aria-label="${esc(p.name)}">✓</button></div>`).join('')}</div><div class="stack">${btn(t('votePass'),'votePass14','secondary')}</div>`);return;}
const ranked=active().map(p=>({p,n:+v.counts[p.id]||0})).sort((a,b)=>b.n-a.n);root.innerHTML=popup(t('voteResult'),t('voteDone'),`<div class="allocate-list">${ranked.map((x,i)=>`<div class="allocate-row"><div class="allocate-name">${i===0&&x.n>0?'🏆 ':''}${esc(x.p.name)}</div><strong>${x.n} ${t('voteVotes')}</strong></div>`).join('')}</div><div class="stack">${btn(t('voteFinish'),'voteFinish14','primary')}</div>`);return;}
baseRenderModal();};
function duelStart(){if(!isDuel()||state.current.closed)return;stopTimer();silence();state.modal=true;state.modalKind14='duel';save();renderModal();}
function duelWinner(id){if(!state.modal||state.modalKind14!=='duel'||state.current?.closed)return;let ps=playersForDuel(),win=ps.find(p=>p.id===id);if(!win||ps.length!==2)return;let loser=ps.find(p=>p.id!==id),sips=getBudget();if(!loser)return;const st=state.stats[loser.id]||{received:0};st.received=Math.max(0,(+st.received||0))+sips;state.stats[loser.id]=st;state.history.push({card:state.current.cardKey,actor:state.current.personId,winner:id,loser:loser.id,at:Date.now(),sips:{[loser.id]:sips},result:'duel'});state.current.winner=id;state.current.loser=loser.id;state.current.closed=true;state.modal=false;state.modalKind14=null;save();render();}
function voteStart(){if(!isVote()||state.current.closed)return;stopTimer();silence();if(!state.vote14||state.vote14.cardKey!==state.current.cardKey)state.vote14={cardKey:state.current.cardKey,voters:active().map(p=>p.id),index:0,counts:{},ballots:{}};state.modal=true;state.modalKind14='vote';save();renderModal();}
function voteFor(id){const v=state.vote14;if(!state.modal||state.modalKind14!=='vote'||!v||v.index>=v.voters.length)return;if(id&&!active().some(p=>p.id===id))return;const voter=v.voters[v.index];if(Object.hasOwn(v.ballots,voter))return;v.ballots[voter]=id||null;if(id)v.counts[id]=(+v.counts[id]||0)+1;v.index++;save();renderModal();}
function skipPlayer(){if(!state.current||state.current.closed||state.modal)return;state.history.push({card:state.current.cardKey,actor:state.current.personId,at:Date.now(),skipped:true,result:'skip'});state.vote14=null;state.modalKind14=null;nextCard();}
const baseRenderGame=renderGame;
renderGame=function(){const c=state.current;if(!c)return baseRenderGame();const actor=curActor(),n=state.used.length,tot=state.lang==='en'?DATA.cards.filter(x=>x[9]).length:DATA.cards.length,df=difficultyOf(),kind=['easy','medium','hard'][df-1],timer=state.timer.total?`<div class="timer"><span>⏱️ ${state.timer.left} ${t('seconds')}</span></div><div class="btn-row">${btn(state.timer.run?t('pause'):state.timer.left===0?t('restart'):'▶ '+t('timer'),'timer','secondary')}${btn(t('reset'),'resetTimer','ghost')}</div>`:'';
let endInfo='';if(c.closed&&c.winner){const win=findPlayer(c.winner),los=findPlayer(c.loser);endInfo=`<p class="success">🏆 ${esc(win?.name||'')} · ${esc(los?.name||'')} +${state.history.findLast?.(h=>h.card===c.cardKey)?.sips?.[c.loser]||getBudget()} 🍻</p>`;}else if(c.closed)endInfo=`<p class="success">✓ ${t('cardDone')}</p>`;
const primary=c.closed?btn(t('next'),'next','primary'):isDuel()?btn(t('duelStart'),'duelStart14','primary'):isVote()?btn(t('voteStart'),'voteStart14','primary'):`<div class="btn-row choice-row">${btn(t('done'),'win','primary')}${btn(t('failed'),'fail','orange')}</div>`;
return `<div class="eyebrow">${t('round')} ${Math.floor(state.turn/Math.max(active().length,1))+1} · ${t('played')}: ${n}/${tot}</div><div class="meter"><span style="width:${Math.min(100,Math.round(n/Math.max(1,tot)*100))}%"></span></div><h2 class="game-actor">${isVote()?t('voteTitle'):esc(actor?.name||'Player')+' '+t('turn')}</h2><section class="panel game-card"><div class="level-marker level-${df}">${['🟢','🟠','🔴'][df-1]} ${t('difficulty')}: ${t(kind)}</div><p class="card-text">${esc(currentText())}</p>${timer}<div class="sip-hint">🍻 ${getBudget()} ${t('sips')}</div></section>${endInfo?panel(endInfo):''}<div class="stack">${primary}${state.voice?btn(t('read'),'read','secondary'):''}<div class="btn-row">${!c.closed?btn(t('skipPlayer'),'skipPlayer14','ghost'):''}${btn(t('manageDuring'),'playersGame','ghost')}</div>${!c.closed?btn(t('skip'),'changeCard','ghost'):''}${btn(t('stats'),'stats','ghost')}${btn(t('home'),'home','ghost')}</div>`;};
const baseRenderSetup=renderSetup;
renderSetup=function(){return baseRenderSetup().replace(/<small>([246]) ([^<]+)<\/small>/g,(all,n,label)=>`<small>${({'2':'1–3','4':'2–4','6':'3–6'})[n]} ${label}</small>`);};
const baseRenderRules=renderRules;
renderRules=function(){return baseRenderRules().replace('<div class="stack space-top">',panel(`<p>${t('rule14')}</p>`,t('rule14t'))+'<div class="stack space-top">');};
const baseHandle14=handle;
handle=function(action,el){switch(action){case 'skipPlayer14':skipPlayer();return;case 'duelStart14':duelStart();return;case 'duelWinner14':duelWinner(el.dataset.id);return;case 'voteStart14':voteStart();return;case 'voteFor14':voteFor(el.dataset.id);return;case 'votePass14':voteFor(null);return;case 'voteFinish14':if(state.vote14&&state.vote14.index===state.vote14.voters.length)openDistribute('vote');return;default:return baseHandle14(action,el);}};
const css=document.createElement('style');css.textContent='.level-marker{display:inline-block;margin:0 auto 4px;padding:7px 12px;border-radius:30px;background:#efd1a4;color:#794518;font-size:12px;font-weight:900}.level-3{background:#ffb5a1;color:#8e2d1b}.level-2{background:#ffdc97}.level-1{background:#cce9b6;color:#335b25}.winner-select{width:52px;height:46px;font-size:22px}.modal-sheet .allocate-row strong{white-space:nowrap}.modal-sheet .allocate-list{max-height:52dvh;overflow:auto}';document.head.appendChild(css);
};
})();