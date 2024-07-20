let video_element = document.getElementById("video_element");
let video_playing = false

let text_container = document.getElementById("text_container")


let poem1 = "I=she thinks about everything at once without making a mistake./no one has figured out yet how to keep her from doing this thinking/while her hands and nerves also perform every delicate complex / function of the work. this is not automatic or deadening./try it sometime. make your hands move quickly on the keys/fast as you can, while you are thinking about:=the layers, fossils. the idea that this machine she controls/is simply layers of human workhours frozen in steel, tangled/in tiny circuits, blinking out through lights like hot, red eyes./the noise of the machine they all sometimes wig out to, giddy,/zinging through the shut-in space, blithering atoms;/everyone’s hands paused mid-air above the keys/while Neil or Barbara solo, wrists telling every little thing,/feet blipping along, shoulders raggly.=she had always thought of money and things as solid, stopped./but seeing it as moving labor, human hours, why that means/it comes back down to her hands on the keys! shoulder aching,/brain pushing words through fingers through keys, trooping/out crisp black ants on the galleys. work compressed into/instruments, slim computers, thin as mirrors, how could/numbers multiply or disappear, squeezed in sideways like that/but they could, they did, obedient and elegant, how amazing./the woman whips out a compact, computes the cost,/her face shining back from the silver case/her fingers, sharp tacks, calling up the digits.=when she sits at the machine, rays from the cathode stream/directly into her chest. when she worked as a clerk, the rays/from the xerox angled upward, striking her under the chin./when she waited tables the micro oven sat at stomach level./when she typeset for Safeway, dipping her hands in processor/chemicals, her hands burned and peeled and her chest ached/from the fumes.=well we know who makes everything we use or can’t use./as the world piles itself up on the bones and rocks of the years,/so our labor gathers.=while we sell ourselves in fractions. they don’t want us all/at once, but hour by hour, piece by piece. our hands mainly/and our backs. and chunks of our brains. and veiled expressions/on our faces, they buy. though they can’t know what actual/thoughts stand behind our eyes.=then they toss the body out on the sidewalk at noon and at five./then they spit the body out the door at sixty-five.@ &"
let poem2 = "II=each morning:/fresh thermos of coffee at hand; for the slowing down, shift/gears, unscrew the lid of the orange thermos, pour out a whiff/of home, morning paper, early light. a tangible pleasure/against the unlively words.=funny, though. this set of codes slips through my hands, a/loose grid of shadows with big gaps my own thoughts sneak/through…=Call format o five. Reports, Disc 2, quad left/return. name of town, address, zip. quad left/return. rollalong and there you are./done with this one. start the next.=call format o five. my day so silent yet taken up with words./floating through the currents and words cords of my wrists/into the screen and drifting to land, beached pollywogs./all this language handled yet the room is so silent./everyone absorbed in feeding words through the machines.=enter file execute.=Call file Oceana. name of town, Pacifica. name of street, Arbor./thinking about lovemaking last night, how it’s another land./another set of sounds, the surface of the water, submerged,/then floating free, the delicate fabric of motion and touch/knit with listening and humming and soaring./never a clear separation of power because it is both our power/at once. hers to speak deep in her body and voice to her own/rhythms. mine to ride those rhythms out and my own,/and call them out even more. a speaking together from body/to mouth to voice.=replace file Oceana./call file Island.=Scroll up . . . . . . . . . . . . . . . . . . . . scroll down./What is there to justify?=the words gliding on the screen like the seal at the aquarium,/funny whiskers, old man seal, zooming by upside down/smirking at the crowd, mocking us/and his friends the dolphins, each sharp black and cream marking/streamlined as the water/huh.   ugh, they want this over and over:/MAY 1   MAY 1   MAY 1   MAY 1   MAY 1   enough?!/MAY 1   MAY 1&"
let poem3 = "III=once I have typeset all the pages, I run the job out on tape/and clip it to the videosetter to be punched out and processed./then I swing out the door to get another job.=down the stairs into the cramped room where Mary and Rosie/and Agnes sit in the limb draft of one weak fan./“must be 95 in here.” “yeah, and freezing cold in the other room.”/“got to keep the computers cool, you know.”=back up the stairs steering past management barricaded/behind their big desks on the way to everything./on the way to the candy machine./on the way to the bathroom./on the way to lunch./I pretend they are invisible./I pretend they have great big elephant ears.=and because they must think we are stupid in order/to push us around, they become stupid./knowing “something’s going on!” peering like moles./how can they know the quirk of an eyebrow behind their back?/they suspect we hate them because they know/what they are doing to us—but we are to them only/stupid girls, or stupid Blacks or crazy Puerto Ricans, or dumb blonds.=we are their allergy, their bad dream./they need us too much, with their talk of/“carrying us” on the payroll./we carry them, like loads of heavy, dull, heavy metal,/outmoded and dusty./they try to control us, building partitions,/and taking the faces off the phones./they talk to us slow and loud,/as if we don’t understand,/HOW ARE YOU TODAY? HERE’S A CHECK FOR YOU!/As if it were a gift.=we say—even if they stretched tape/across our mouths/we could still speak to one another/with our eyebrows.@ &"
let poem4 = "IV=That mural, the women, rows of them/similar, yet each unique, their hands/the focus of the art/bodies solid, leaning forward, these women,/facing the voices screens, knowledge running through them=language the most basic of industry/to gather our food/to record exchange/to give warning and call for help/to praise courage/it flows through our hands and into metal/they think it doesn’t touch us=a typesetter changes man to person/will they catch her?/She files one job under union,/another under lagoon,/another under cash=what if you could send anything in and call it out again?/I file jobs under words I like—red, buzz, fury/search for tiger, execute/the words stream up the screen till tiger trips the halt/search for seal! search for strike/search for the names of women=we could circle our words around the world/like dolphins streaking through water their radar/if the screens were really in the hands of experts: us./think of it—our ideas whipping through the air/everything stored in an eyeflash/our whole history, ready and waiting.&"
let poem5 = "V=hours staring me in the face/miles of straight copy/singlespaced, shut in.=when I called my mother/her words were all/turned but not quite is that/every perfect thing isn’t sense,/I can’t, she says, can’t talk about it./when I call her, the floor drops inches/and I am trying to be cheer./wh-whts the matter? she says.=mother wears a dress all of blue/fabric of tiny wires and messages/veins knotted together, snagging,/and the hem gaping down/where the stitching ripped out.=don’t care if things are hard/just want a whole cloth/not all these unravelled scraps and me/a rough thread trying to gut them/together, in and out.=When I see the boss, I hold/my face clear and solemn, thinking/pig.   pig.   it’s true, too./not rhetorical.=“if we stick you in the little room/with the heat on, you’ll be happy./that’s what you wanted.”=“you’re an electronic technician,/not a typesetter. you’re lucky/to be shut out of the union.”=I know that typesetters/grow more capillaries/in our fingertips/from all that use.=here’s a test: cut my fingers/and see if I bleed more.&"
let poem6 = "VI=knowledge this power owned, not shared/owned and hoarded/to white men, lock stock dollar/skill passed down from manager/to steal, wrench it back/knowledge is something we have/this is the bitters column/around the chair, toe stubbing the floor/and I am here, legs twisted/on our time the words clarify/with all we are not taught/I will know it and use it burning/I sneak it home and copy it/the Puerto Rican janitor, the older/woman, the Black women, our heads/held over   stolen   not granted/in my stomach for all the access/I have to sneak/language is something/get my hands on the machine/he takes it all as his right/eating lunch for granted his whole life/get my hands on the book/he’s being taught what I am not/angry words swallowing my throat=to take      to take it back=      and open   and ribbon out   and share=The Bitters Column.@ &"
let poem7 = "VII=2 hours till lunch./1 hour till lunch./43 minutes till lunch./13 minutes till lunch./lunch.=they write you up if you’re three minutes late./three write-ups and you’re out.=I rush hurry back from lunch, short-cut./through the hall to the door/locked like the face of a boss.=I tug at the door, definitely locked./peer in through the glass, watery and dark,/see two supervisors men standing 25 yards in,/talking, faces turned away./oh good thank goodness, I think, they’ll let me in./I knock on the glass, it’s cold to my fist./not too loud, just enough to let them know./they glance at me, then continue talking./I knock again, louder./one man looks right at me! turns his back./I am furious, let me in./and knock again, my fist white where it is/clenched. BAM BAM BAM   pause/BAM BAM BAM BAM BAM/they don’t even look up./I knock harder and harder, the glass/shaking in its frame./I imagine my hand smashing through the pane,/shaking their collars, bloody but triumphant.&"
let poem8 = "VIII=Sleepy afternoon … halfway through typing a long page of copy /something about building specifications, lost, wandering/through strange buildings, wide deep fields at dusk,/trying to find the way home.=The stubble of new cut grass prickling my bare feet/the ridged rows of the fields urging me/toward the dim outline of a building=I reach a deserted building, a warehouse, fenced off./people hurry to work, not stopping to talk./a low-level murmur hovers below the surface, like the/slight draft that makes the hair on your arm lift./birds clot on the aerials, and the light is sharp shadows out of whack.=we notice a tightness right below the hollow of the neck/gathering to a deep chestpain, slowmoving and thick./we notice it like the way we notice smog, waking up each morning/short-breathed and headachy. the officials say nothing’s is wrong,/and slippage is small, no measurable effects gather.=none of us talk outloud about this to anyone.=now though, crowds begin to pool gather, huddling together./I hurry to a circle of women, where a girl dodges the grasp of cops./she is agile, darting back and forth, panting,/slippery as soap, her hair damp and glistening gleaming./they lunge, she skips, twists, breaks from the circle/and runs. we race after her in a tumbling crowd,/she is at my ear, whispering,/I hurry beside her words blurting out,/“money … burning … tell … no … /say … shout.”&"
let poem9 = "IX=we are afraid, now locked in a windowless building, guarded./many of us packed together, others guard us,/though they are only soft bodies like us./Some of them women, all of them in uniform./the pain is still here the way sharp heat on your back and summer heat insists./I am afraid and almost falter but begin to whisper/I repeat the words which are about the phony soap/the guards they have handed us, sickly sweet, I whisper /“will it wash it will it wash it away” and another/woman joins me,“soap fake soap,” and another/and now all of us are chanting and the ones guarding us/look uncertain, scared, as if they too wonder/and we are all chanting and shouting now,/“fake soap, will it wash it won’t it won’t it wash it away.”@ &"
let poem10 = "X=half-empty streets, the this calm of the warehouse district/oversize buildings like airplane hangars, expect to see /halfbuilt skeletons of planes or ships gliding the wide/rivers of the streets. nothing bustling here./like early morning walks at home in the woods./licorice plants flourishing. the noises are big here,/not the tiny picky noises of downtown streets.=signs scrawl one wall, “US Out of El Salvador” next to a/shiny long car, must be the boss’s Cadillac, next to that,/an old chev, the cadillac of onions, paint peeling, settling/into its flat tire, looks tired, looks permanent.=ha, remember that dream now, Rose Sarah and me in a great circle/of people straggling over scraped bare dirt, no green plants/and we’re walking, and I realize this is a musicians’ union!/and we are singing the Internationale in jazz rhythm./“let each stand in their place, we shall be all.”/the buildings around us are plastered with hundreds of/red stickers that shout STRIKE! STRIKE! STRIKE!/a woman begins to sing of all the people that work here/and the song is a list of their names and their deeds.&"
let poem11 = "XI=This is a section that’s the found poem.=Line corrections/Interview with Leola S./Typesetter: Karen B.=Born in Shreveport, Leola/independence is important, she./one of fourteen children, her./housecleaning in San Mateo/divorced now, she lives alone in./serving dinner from 4–5 pm every/starting pay 1.53 per/h   o   u   r=she and some co-workers,/today more than ever in U.S./h   i   s   t   o    r   y=posed to discrimination by sex,/race, color, religious or national/o   r   i   g   i   n=more women go to work in,=enter the labor/70 percent of the average wage/Black women lowest paid of./to organize the continuing fight/determined to be heard/plaints against unfair policies/something worth fighting for/sector of the working class/w   o   m   e   n&"
let poem12 = "XII=Rivera’s mural, the women, rows of them/similar, yet each unique, their hands/the focus of the art/bodies solid, leaning forward, these women,/facing the voices, knowledge running through them=language the most basic of industry/to gather our food/to record exchange/to give warning and call for help/to praise courage/it flows through our hands and into metal/they think it doesn’t touch us=a typesetter changes man to person/will they catch her?/She files one job under union,/another under lagoon,/another under cash=what if you could send anything in and call it out again?/I file jobs under words I like—red, buzz, fury/search for tiger, execute/the words stream up the screen till tiger trips the halt/search for seal search for strike/search for the names of women=we could circle our words around the world/like dolphins streaking through water their radar/if the screens were really in the hands of experts: us./think of it—our ideas whipping through the air/everything stored in an eyeflash/our whole history, ready and waiting.&"
let poem13 = "XIII=at night switching off the machines one by one/each degree of quiet a growing pleasure/we swallow the silence after hours of steady noise/the last machine harrumphs off and it is so visibly quiet/switch off the fluorescent lights and it is so quietly dark=I say, goodby, see you tomorrow, and relax down the stairs/into the cavernous shop where the paper is stored/near the presses, huge cardboard cylinders of newsprint/stacked up ceiling high.=I curve toward the door in the shadows/smells sweet like a big barn/calm snowbanks these spools, or tree trunks/in the light sifting through the glazed windows=walking tired through the resting plant/past huge breathing rolls of paper/waiting to be used&"
let poem14 = "XIV=This is the last section.=some buildings never sleep/round the clock/three eight hour shifts/seven days a week/centrifugal force irons us flat/to the blank walls, speeding,/whirling, intent as astronauts,/eyes toward the clock,/hands on the keys,/shoulders pressed against the chair.=some buildings never sleep/never shut down/roaring and roaring and we shout,/WHAT DID YOU SAY? HUH? WHAT?/WHERE IS THE? WHAT DID YOU SAY?=continuous paper streams form from the room/words ratatat through our brains/trains and earthquakes shudder the walls/the long whistle of wind under the door/all we know of outside=remember that fish/that lives so deep/it has grown its own light?/energy glaring out the bulbs/of its eyes/remember that fish formed flat/under fathoms of water/bones streamlined as ribs of steel/precise and efficient, formed in duress,/reaching, spinning the tough wire/of its own life, and long before Edison/volting out through its own demands.@ &"
let poem = poem1.concat(poem2,poem3,poem4,poem5,poem6,poem7,poem8,poem9,poem10,poem11,poem12,poem13,poem14)
let splitPoem = poem.split("");

let link_text_array = ["(1/5) Offsetting Queer Literary Labour →",
                       "(2/5) The Feminization of Typesetting and Queer Literary Labor →",
                       "(3/5) Skills for Assembly →",
                       "(4/5) Collectivity, Autonomy, and Uncertainty →",
                       "(5/5) Thinking at the Machine →"]

let newLetter;
let lines_array = [];
let currentLine;

let alteration_array = [];
let alteration_array_line = [];

let cursor_showing = false;


function addTextDecoration(line_id,start_of_alteration,alteration_string,alteration_classname,number_spaces){
    let alteration_length = alteration_string.length;
    let end_of_alteration = start_of_alteration + alteration_length + number_spaces;

    if(lines_array.length == line_id && currentLine.children.length >= start_of_alteration && currentLine.children.length <= end_of_alteration){
        alteration_array.push(newLetter);
    
        if(alteration_array.length == alteration_length){
            alteration_array.push(newLetter);
            alteration_array.forEach((letter)=>letter.classList.add(alteration_classname))
            alteration_array = [];
        }   
    }
}

function addTextDecoration_Line(line_id,alteration_classname){
    if(lines_array.length == line_id && currentLine.children.length >= 1){
        alteration_array_line.push(newLetter);
    }

    if(lines_array.length == line_id+1 && currentLine.children.length == 0){
        alteration_array_line.push(newLetter);
        alteration_array_line.forEach((letter)=>letter.classList.add(alteration_classname))
        alteration_array_line = [];
    }
}


setTimeout(()=>{
    
    let firstLine = document.createElement("div");
        firstLine.classList.add("text_container_line")
        text_container.appendChild(firstLine);
        lines_array.push(firstLine);
        currentLine = firstLine;
        window.scrollTo(0, document.body.scrollHeight);


    let cursor_image = document.createElement("img");
        cursor_image.classList.add("cursor_image");
        cursor_image.src = "media/cursor.png"
        currentLine.appendChild(cursor_image);
        cursor_showing = true;

    window.addEventListener("keydown",()=>{
    // setInterval(()=>{

        if(cursor_showing == true){
            currentLine.removeChild(cursor_image);
            cursor_showing = false;
        }

        window.scrollTo(0, document.body.scrollHeight);

        if(splitPoem.length){

            newLetter = document.createElement("p");
                newLetter.innerText = splitPoem.shift();
                currentLine.appendChild(newLetter);

            if(splitPoem[0] === " "){
                let newSpace = document.createElement("p");
                    newSpace.innerText = "\xa0";
                    currentLine.appendChild(newSpace)
            }
            if(splitPoem[0] === "/"){
                let newLine = document.createElement("div");
                    newLine.classList.add("text_container_line");
                    text_container.appendChild(newLine);
                    lines_array.push(newLine);
                    currentLine = newLine;

                    splitPoem.shift();
            }
            if(splitPoem[0] === "="){
                let newLine = document.createElement("div");
                    newLine.classList.add("text_container_line");
                    newLine.style.marginTop = 5 + "vh";
                    text_container.appendChild(newLine);
                    lines_array.push(newLine);
                    currentLine = newLine;

                    splitPoem.shift();
            }
            if(splitPoem[0] === "&"){
                let newDivider = document.createElement("div");
                    newDivider.classList.add("text_container_line");
                    newDivider.classList.add("text_container_divider");
                    text_container.appendChild(newDivider);
                    lines_array.push(newDivider);
                    currentLine = newDivider;

                    splitPoem.shift();
            }
            if(splitPoem[0] === "@"){
                let newLine = document.createElement("div");
                    newLine.classList.add("text_container_line");
                    newLine.style.marginTop = 5 + "vh";
                    text_container.appendChild(newLine);
                    lines_array.push(newLine);
                    currentLine = newLine;

                    let linkLine = document.createElement("p");
                        linkLine.classList.add("link_line");
                        currentLine.appendChild(linkLine)

                        let link_text = link_text_array.shift()
                        typeOutText(link_text,linkLine);

                        linkLine.addEventListener("click",()=>{
                            let link_text_characters = link_text.split("");
                            window.open("essay/"+link_text_characters[1]+".html","_blank")
                        })


                    splitPoem.shift();
            }

            addTextDecoration_Line(1,"poem_numeral");
            addTextDecoration(3,29,"yet","addition",0);
            addTextDecoration(16,39,"and things","addition",1);
            addTextDecoration(18,53,"!","addition",0);
            addTextDecoration_Line(24,"removed");
            addTextDecoration_Line(25,"removed");
            addTextDecoration_Line(26,"removed");
            addTextDecoration(29,51,"under","removed",0);
            addTextDecoration(35,52,"and rocks","addition",1);

            addTextDecoration_Line(45,"poem_numeral");
            addTextDecoration(59,40,"words","removed",0);
            addTextDecoration(59,47,"cords","addition",0);

            addTextDecoration_Line(86,"poem_numeral");
            addTextDecoration(88,60,"and processed","addition",1);
            addTextDecoration(91,49,"weak","addition",0);
            addTextDecoration(92,41,"freezing","removed",0);
            addTextDecoration(92,51,"cold","addition",0);
            addTextDecoration(94,24,"steering","addition",0);
            addTextDecoration(106,46,"to them","addition",1);
            addTextDecoration(107,9,"girls, or stupid","addition",2);
            addTextDecoration(111,19,"like","addition",0);
            addTextDecoration(111,36,"heavy","removed",0);
            addTextDecoration(111,51,"heavy","addition",0);
            addTextDecoration_Line(116,"removed");

            addTextDecoration_Line(124,"poem_numeral");
            addTextDecoration_Line(125,"addition");
            addTextDecoration_Line(126,"addition");
            addTextDecoration_Line(127,"addition");
            addTextDecoration_Line(128,"addition");
            addTextDecoration_Line(129,"addition");
            addTextDecoration_Line(130,"addition");
            addTextDecoration_Line(131,"addition");
            addTextDecoration_Line(132,"addition");
            addTextDecoration_Line(133,"addition");
            addTextDecoration_Line(134,"addition");
            addTextDecoration_Line(135,"addition");
            addTextDecoration_Line(136,"addition");
            addTextDecoration_Line(137,"addition");
            addTextDecoration_Line(138,"addition");
            addTextDecoration_Line(139,"addition");
            addTextDecoration_Line(140,"addition");
            addTextDecoration_Line(141,"addition");
            addTextDecoration_Line(142,"addition");
            addTextDecoration_Line(143,"addition");
            addTextDecoration_Line(144,"addition");
            addTextDecoration_Line(145,"addition");
            addTextDecoration_Line(146,"addition");
            addTextDecoration_Line(147,"addition");
            addTextDecoration_Line(148,"addition");
            addTextDecoration_Line(149,"addition");
            addTextDecoration_Line(150,"addition");
            addTextDecoration_Line(151,"addition");
            addTextDecoration_Line(152,"addition");
            addTextDecoration_Line(153,"addition");

            addTextDecoration_Line(154,"poem_numeral");
            addTextDecoration_Line(155,"removed");
            addTextDecoration_Line(156,"removed");
            addTextDecoration_Line(157,"removed");
            addTextDecoration_Line(158,"removed");
            addTextDecoration_Line(159,"removed");
            addTextDecoration_Line(160,"removed");
            addTextDecoration_Line(161,"removed");
            addTextDecoration_Line(162,"removed");
            addTextDecoration_Line(163,"removed");
            addTextDecoration_Line(164,"removed");
            addTextDecoration_Line(165,"removed");
            addTextDecoration_Line(166,"removed");
            addTextDecoration_Line(167,"removed");
            addTextDecoration_Line(168,"removed");
            addTextDecoration_Line(169,"removed");
            addTextDecoration_Line(170,"removed");
            addTextDecoration_Line(171,"removed");
            addTextDecoration_Line(172,"removed");
            addTextDecoration_Line(173,"removed");
            addTextDecoration_Line(174,"removed");
            addTextDecoration_Line(175,"removed");
            addTextDecoration_Line(176,"removed");
            addTextDecoration_Line(177,"removed");
            addTextDecoration_Line(178,"removed");
            addTextDecoration_Line(179,"removed");
            addTextDecoration_Line(180,"removed");
            addTextDecoration_Line(181,"removed");
            addTextDecoration_Line(182,"removed");
            addTextDecoration_Line(183,"removed");
            addTextDecoration_Line(184,"removed");
            addTextDecoration_Line(185,"removed");
            addTextDecoration_Line(186,"removed");
            addTextDecoration_Line(187,"removed");
            addTextDecoration_Line(188,"removed");
            addTextDecoration_Line(189,"removed");
            addTextDecoration_Line(190,"removed");
            addTextDecoration_Line(191,"removed");

            addTextDecoration_Line(192,"poem_numeral");
            addTextDecoration_Line(193,"removed");
            addTextDecoration_Line(194,"removed");
            addTextDecoration_Line(195,"removed");
            addTextDecoration_Line(196,"removed");
            addTextDecoration_Line(197,"removed");
            addTextDecoration_Line(198,"removed");
            addTextDecoration_Line(199,"removed");
            addTextDecoration_Line(200,"removed");
            addTextDecoration_Line(201,"removed");
            addTextDecoration_Line(202,"removed");
            addTextDecoration_Line(203,"removed");
            addTextDecoration_Line(204,"removed");
            addTextDecoration_Line(205,"removed");
            addTextDecoration_Line(206,"removed");
            addTextDecoration_Line(207,"removed");
            addTextDecoration_Line(208,"removed");
            addTextDecoration_Line(209,"removed");
            addTextDecoration_Line(210,"removed");
            addTextDecoration_Line(211,"removed");
            addTextDecoration_Line(212,"removed");
            addTextDecoration_Line(213,"removed");
            addTextDecoration_Line(214,"removed");
            addTextDecoration_Line(215,"removed");
            addTextDecoration_Line(216,"removed");
            addTextDecoration_Line(217,"removed");
            addTextDecoration_Line(218,"removed");
            addTextDecoration_Line(219,"removed");
            addTextDecoration_Line(220,"removed");
            addTextDecoration_Line(221,"removed");

            addTextDecoration_Line(222,"poem_numeral");
            addTextDecoration_Line(227,"addition");
            addTextDecoration(230,4,"rush","removed",0);
            addTextDecoration(230,10,"hurry","addition",0);
            addTextDecoration(235,11,"supervisors","removed",0);
            addTextDecoration(235,24,"men","addition",0);
            addTextDecoration(237,1,"oh good","removed",1);
            addTextDecoration(237,11,"thank goodness","addition",1);
            addTextDecoration(238,28,"it's","addition",0);
            addTextDecoration(240,24,"then","addition",0);
            addTextDecoration(242,31,"!","addition",0);

            addTextDecoration_Line(252,"poem_numeral");
            addTextDecoration(253,64,"of copy","addition",1);
            addTextDecoration(254,1,"something","addition",0);
            addTextDecoration_Line(257,"addition");
            addTextDecoration_Line(258,"addition");
            addTextDecoration_Line(259,"addition");
            addTextDecoration(264,33,"and","addition",0);
            addTextDecoration(264,50,"is sharp shadows","addition",2);
            addTextDecoration(267,17,"like","removed",0);
            addTextDecoration(267,23,"the way we notice","addition",3);
            addTextDecoration(268,61,"'s","removed",0);
            addTextDecoration(268,65,"is","addition",0);
            addTextDecoration(271,34,"pool","removed",0);
            addTextDecoration(271,40,"gather","addition",0);
            addTextDecoration(272,62,"the grasp of","addition",2);
            addTextDecoration(274,44,"glistening","removed",0);
            addTextDecoration(274,56,"gleaming","addition",0);
            addTextDecoration_Line(278,"addition");
            addTextDecoration(279,33,"no …","addition",1);

            addTextDecoration_Line(281,"poem_numeral");
            addTextDecoration(282,19,"now","addition",0);
            addTextDecoration(282,60,", guarded","removed",1);
            addTextDecoration_Line(283,"addition");
            addTextDecoration_Line(284,"addition");
            addTextDecoration_Line(285,"addition");
            addTextDecoration(286,39,"sharp heat on your back and","addition",5);
            addTextDecoration(286,81,"heat","removed",0);
            addTextDecoration_Line(287,"addition");
            addTextDecoration(288,1,"I repeat","removed",1);
            addTextDecoration(289,1,"the guards","removed",1);
            addTextDecoration(289,14,"they","addition",0);
            addTextDecoration(289,56,"I whisper","addition",1);
            addTextDecoration(291,1,"woman joins me,“soap fake soap,”","removed",4);

            addTextDecoration_Line(297,"poem_numeral");
            addTextDecoration(298,23,"the","removed",0);
            addTextDecoration(298,28,"this","addition",0);
            addTextDecoration(299,56,"to see","removed",1);
            addTextDecoration(303,27,"ing","addition",0);
            addTextDecoration(304,46,"streets","removed",0);
            addTextDecoration(309,1,"ha","removed",0);
            addTextDecoration(309,35,"Rose","removed",0);
            addTextDecoration(309,41,"Sarah","addition",0);
            addTextDecoration(312,0,"!","addition",-1);
            addTextDecoration(315,36,"!","addition",0);
            addTextDecoration(315,45 ,"!","addition",0);
            addTextDecoration(316,0,"!","addition",0);

            addTextDecoration_Line(318,"poem_numeral");
            addTextDecoration_Line(319,"addition");
            addTextDecoration(325,0,".","addition",-1);
            addTextDecoration(326,0,".","addition",-1);
            addTextDecoration(328,0,".","addition",-1);
            addTextDecoration(332,0,".","addition",-1);
            addTextDecoration(338,0,".","addition",-1);
            addTextDecoration(341,0,".","addition",-1);

            addTextDecoration_Line(347,"poem_numeral");
            addTextDecoration_Line(348,"removed");
            addTextDecoration_Line(349,"removed");
            addTextDecoration_Line(350,"removed");
            addTextDecoration_Line(351,"removed");
            addTextDecoration_Line(352,"removed");
            addTextDecoration_Line(353,"removed");
            addTextDecoration_Line(354,"removed");
            addTextDecoration_Line(355,"removed");
            addTextDecoration_Line(356,"removed");
            addTextDecoration_Line(357,"removed");
            addTextDecoration_Line(358,"removed");
            addTextDecoration_Line(359,"removed");
            addTextDecoration_Line(360,"removed");
            addTextDecoration_Line(361,"removed");
            addTextDecoration_Line(362,"removed");
            addTextDecoration_Line(363,"removed");
            addTextDecoration_Line(364,"removed");
            addTextDecoration_Line(365,"removed");
            addTextDecoration_Line(366,"removed");
            addTextDecoration_Line(367,"removed");
            addTextDecoration_Line(368,"removed");
            addTextDecoration_Line(369,"removed");
            addTextDecoration_Line(370,"removed");
            addTextDecoration_Line(371,"removed");
            addTextDecoration_Line(372,"removed");
            addTextDecoration_Line(373,"removed");
            addTextDecoration_Line(374,"removed");
            addTextDecoration_Line(375,"removed");
            addTextDecoration_Line(376,"removed");

            addTextDecoration_Line(377,"poem_numeral");
            addTextDecoration_Line(378,"removed");
            addTextDecoration_Line(379,"removed");
            addTextDecoration_Line(380,"removed");
            addTextDecoration_Line(381,"removed");
            addTextDecoration_Line(382,"removed");
            addTextDecoration_Line(383,"removed");
            addTextDecoration_Line(384,"removed");
            addTextDecoration_Line(385,"removed");
            addTextDecoration_Line(386,"removed");
            addTextDecoration_Line(387,"removed");
            addTextDecoration_Line(388,"removed");
            addTextDecoration_Line(389,"removed");
            addTextDecoration_Line(390,"removed");
            addTextDecoration_Line(391,"removed");
            addTextDecoration_Line(392,"removed");
            addTextDecoration_Line(393,"removed");

            addTextDecoration_Line(394,"poem_numeral");
            addTextDecoration_Line(395,"addition");
            addTextDecoration(411,29,"form","removed",0);
            addTextDecoration(411,35,"from","addition",0);

            if(video_playing == false){
                video_element.play();
                video_playing = true
            }
            
        } else {
            if(cursor_showing == true){
                currentLine.removeChild(cursor_image);
                cursor_showing = false;
            }
        }
    })

    window.addEventListener("keyup",()=>{
        if(video_playing == true){
            video_element.pause();
            video_playing = false
        }

        if(cursor_showing == false){
            currentLine.appendChild(cursor_image);
            cursor_showing = true;
        }
    })
},11000)