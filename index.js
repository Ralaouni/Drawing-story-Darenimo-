const div = document.querySelector("#big_div")



const ecriture_1 = "Oda Miyamoto était un homme bon, un samourai droit suivant le code du bushido ..."

const ecriture_2 = "...mari d'une femme qu'il aimait de tout son être, il travaillait dur pour son pays et mettait tout son coeur pour gagner le respect de ses pairs"

const ecriture_3 = "Son supérieur, le maître des cérémonie du shogun était celui qui devait lui apprendre la voie pour que Oda puisse devenir l'un des plus grands samourais et un jour mener les armées du shogun pour défendre ses terres contre les envahisseurs"

const ecriture_4 = "Un rôle dans lequel Oda aurait mis toute son énergie et tout son être , car rien ne lui ferait plus honneur que de donner sa vie pour son pays et ses habitants."

const ecriture_5 = "Mais son maître était un homme vil et sournois"

const ecriture_6 ="Un jour alors qu'il rentrait de son entrainement, Oda surpris son maître tenter de forcer sa femme ..."

const ecriture_7 = "mais celle ci, sachant se défendre parvint à le tuer d'un coup de lame"

const ecriture_8 = "Oda croyant aux lois de son pays se laisse faire prisonnier ainsi que sa femme mais ils sont tout 2 condamné à mort..."

const ecriture_9 = "...le fils de son maître manipule l'assemblée pour faire croire qu'ils l'ont assassiné dans le but de pouvoir garder l'honneur de sa famille intact"

const ecriture_10 = "Les autres nobles le laissent faire pour les mêmes raisons."

const ecriture_11 = "Après toutes ces années à servir leur pays fièrement et avec tant de dévotion, ils seront donc sacrifié sur un mensonge pour préserver l'honneur d'un monstre qui n'en à jamais eu."

const ecriture_12 = "Oda, se rendant compte de la pourriture intérieur des hautes sphères du shogunat décide de s'échapper de prison, grâce à l'un de ses disciples qui en est devenu le gardien..."

const ecriture_13 = "... celui-ci lui apprend au même moment que sa femme est menée à l'échafaud avant lui et ce sans même en avoir été prévenu, il tente tout son possible pour la sauver ..."

const ecriture_14 = "...mais il arrive trop tard"

const ecriture_15 = "Dans élan de rage et de haine sans nom il pousse un hurlement et cours pour aller rejoindre le cadavre inerte de sa femme..."

const ecriture_16 = "...tranchant en même temps tout ceux qui osent se mettre entre lui et celle qu'il a toujours aimé."

const ecriture_17 = " Mais ils étaient trop nombreux et il du renoncer à la rejoindre pour un dernier adieu."

const ecriture_18 = "Son talent de sabreur, la haine dans ses yeux et le respect que beaucoup de ces soldats ont pour lui, lui permettra de s'échapper par les bas fonds de la ville."

const ecriture_19 = "Nourrit d'une nouvelle rancœur à l'égart des dirigeants du pays qui l'a vu naître, Il partit rejoindre une rébellion contre le shogunat"

const ecriture_20 = "Mais après un an de nouvelles amitiés forgées et d'attentas menés à bien, ce nouveau rêve se transformera en cauchemar ..."

const ecriture_21 = " ...lorsque Oda et ses nouveaux frères d'armes se feront surprendre et seront tous massacré ou exécuté jusqu'aux derniers."

const ecriture_22 = "Il parviendra cependant à s'enfuir de nouveau, mais deviendra l'un des hommes les plus recherché de l'archipel nipponne."

const ecriture_23 = " Il n'aura d'autres choix que de prendra un bateau pour faire route vers l'ouest et tenter de mettre son passé loin derrière lui." 

const ecriture_24 = "Avec le regret d'avoir fuit car nul ne peut s'opposer au shogunat, et que ces nobliaux resteront à jamais impunis."

const ecriture_25 = "Pourtant ces questions lui revinrent sans cesse "

const ecriture_26 = "'était-ce vraiment elle qu'il vit sur l'échafaud ?'"

const ecriture_27 = "' pourquoi un apprenti samurai aussi prometteur a fini en tant que simple garde de prison ?'"

const ecriture_28 = "Il sombrera dans l'alcool et deviendra l'ombre de lui-même, imprévisible."

const ecriture_29 = " Peut être éspère t-il mourrir."

const ecriture_30 = " Peut être retournera t'il défaire le shogunat."

const ecriture_31 = " Ou peut être trouvera t'il un nouveau but dans sa vie."

const ecriture_32 = "Il se fera désormais appelé 'Darenimo Naranai' qui signifie 'n'être personne' en Nippon "

const ecriture_33 = " Et ne parlera jamais plus de son passé."


const array = [ecriture_1,ecriture_2,ecriture_3,ecriture_4,ecriture_5,ecriture_6,ecriture_7,ecriture_8,ecriture_9,ecriture_10,ecriture_11,ecriture_12,ecriture_13,ecriture_14,ecriture_15,ecriture_16,ecriture_17,ecriture_18,ecriture_19,ecriture_20,ecriture_21,ecriture_22,ecriture_23,ecriture_24,ecriture_25,ecriture_26,ecriture_27,ecriture_28,ecriture_29,ecriture_30,ecriture_31,ecriture_32,ecriture_33]

let i = 1
let j = 0



div.innerHTML = `<div id="div_2">
                <div id="img_div">
                    <img src="Img/Darenimo_1.jpg" alt="bg">
                </div>
                <p id="ecriture">${array[j]}
                </p>
                </div>`;
                
function Change () {

        if (j==3 || j==4 || j==6 || j==10 || j==11 || j==12 || j==13 || j==16 || j==17 || j==19 || j==21 || j==26) {
            div.style.opacity = "0"
            div.style.transition = "4s"
            i++
            j++
            setTimeout(() => {
                div.style.opacity = "1"
                if (i != 11) {
                    div.innerHTML = `<div id="div_2">
                            <div id="img_div">
                                <img src="Img/Darenimo_${i}.jpg" alt="bg">
                            </div>
                            <p id="ecriture">${array[j]}
                            </p>
                            </div>`
                } else {
                    div.innerHTML = `<div id="div_2">
                            <div id="img_div_11">
                                <img src="Img/Darenimo_${i}.jpg" alt="bg">
                            </div>
                            <p id="ecriture">${array[j]}
                            </p>
                            </div>`
                }
                
            }, 4000);
            
        } else if (j<32)  { 
            const p = document.querySelector("#ecriture")
            p.style.opacity = "0"
            p.style.transition = "3s" 
            j++
            setTimeout(() => {
                p.style.opacity = "1"
                p.innerText = `${array[j]}`
            }, 4000);
        } 
        else {
            i = 1
            j=0
            setTimeout(() => {
                div.innerHTML = `<div id="div_2">
                    
                    <div id="img_div">
                        <img src="Img/Darenimo_1.jpg" alt="bg">
                    </div>
                    <p id="ecriture">${array[j]}
                    </p>
                    </div>` 
            }, 3000);
        };
}

function Previous() {
    if (j==4 || j==5 || j==7 || j==11 || j==12 || j==13 || j==14 || j==17 || j==18 || j==20 || j==22 || j==27) {
        div.style.opacity = "0"
        div.style.transition = "4s"
        i--
        j--
        setTimeout(() => {
            div.style.opacity = "1"
            div.innerHTML = `<div id="div_2">           
                    <div id="img_div">
                        <img src="Img/Darenimo_${i}.jpg" alt="bg">
                    </div>
                    <p id="ecriture">${array[j]}
                    </p>
                    </div>`
        }, 4000);
    
    } else {
        const p = document.querySelector("#ecriture")
        p.style.opacity = "0"
        p.style.transition = "3s" 
        j--
        setTimeout(() => {
            p.style.opacity = "1"
            p.innerText = `${array[j]}`
        }, 3000);
    }
    
}
