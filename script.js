const verbos = {
    barrer: { presente: "sweep", pasado: "swept", participio: "swept" },
    beber: { presente: "drink", pasado: "drank", participio: "drunk" },
    cabalgar: { presente: "ride", pasado: "rode", participio: "ridden" },
    montar: { presente: "ride", pasado: "rode", participio: "ridden" },
    caer: { presente: "fall", pasado: "fell", participio: "fallen" },
    cantar: { presente: "sing", pasado: "sang", participio: "sung" },
    colocar: { presente: "set", pasado: "set", participio: "set" },
    comer: { presente: "eat", pasado: "ate", participio: "eaten" },
    comprar: { presente: "buy", pasado: "bought", participio: "bought" },
    conocer: { presente: "meet", pasado: "met", participio: "met" },
    saber: { presente: "know", pasado: "knew", participio: "known" },
    conseguir: { presente: "get", pasado: "got", participio: "gotten" },
    construir: { presente: "build", pasado: "built", participio: "built" },
    cortar: { presente: "cut", pasado: "cut", participio: "cut" },
    correr: { presente: "run", pasado: "ran", participio: "run" },
    crecer: { presente: "grow-up", pasado: "grew-up", participio: "grown-up" },
    dar: { presente: "give", pasado: "gave", participio: "given" },
    decir: { presente: "tell", pasado: "told", participio: "told" },
    despertar: { presente: "wake-up", pasado: "woke-up", participio: "woken-up" },
    disparar: { presente: "shoot", pasado: "shot", participio: "shot" },
    dormir: { presente: "sleep", pasado: "slept", participio: "slept" },
    empezar: { presente: "begin", pasado: "began", participio: "begun" },
    encontrar: { presente: "find", pasado: "found", participio: "found" },
    enseñar: { presente: "teach", pasado: "taught", participio: "taught" },
    escribir: { presente: "write", pasado: "wrote", participio: "written" },
    ganar: { presente: "win", pasado: "won", participio: "won" },
    conservar: { presente: "keep", pasado: "kept", participio: "kept" },
    hablar: { presente: "speak", pasado: "spoke", participio: "spoken" },
    hacer: { presente: "do", pasado: "did", participio: "done" },
    herir: { presente: "hurt", pasado: "hurt", participio: "hurt" },
    ir: { presente: "go", pasado: "went", participio: "gone" },
    leer: { presente: "read", pasado: "read", participio: "read" },
    "llegar a ser": { presente: "become", pasado: "became", participio: "become" },
    mandar: { presente: "send", pasado: "sent", participio: "sent" },
    manejar: { presente: "drive", pasado: "drove", participio: "driven" },
    nadar: { presente: "swim", pasado: "swam", participio: "swum" },
    oir: { presente: "hear", pasado: "heard", participio: "heard" },
    olvidar: { presente: "forget", pasado: "forgot", participio: "forgotten" },
    pagar: { presente: "pay", pasado: "paid", participio: "paid" },
    pararse: { presente: "stand", pasado: "stood", participio: "stood" },
    pegar: { presente: "hit", pasado: "hit", participio: "hit" },
    pensar: { presente: "think", pasado: "thought", participio: "thought" },
    perder: { presente: "lose", pasado: "lost", participio: "lost" },
    permitir: { presente: "let", pasado: "let", participio: "let" },
    poner: { presente: "put", pasado: "put", participio: "put" },
    prestar: { presente: "lend", pasado: "lent", participio: "lent" },
    robar: { presente: "steal", pasado: "stole", participio: "stolen" },
    romper: { presente: "break", pasado: "broke", participio: "broken" },
    sacudir: { presente: "shake", pasado: "shook", participio: "shaken" },
    salir: { presente: "leave", pasado: "left", participio: "left" },
    sentarse: { presente: "sit", pasado: "sat", participio: "sat" },
    sentir: { presente: "feel", pasado: "felt", participio: "felt" },
    ser: { presente: "be", pasado: "was/were", participio: "been" },
    soñar: { presente: "dream", pasado: "dreamt", participio: "dreamt" },
    sostener: { presente: "hold", pasado: "held", participio: "held" },
    tener: { presente: "have-as", pasado: "had", participio: "had" },
    tirar: { presente: "throw", pasado: "threw", participio: "thrown" },
    tomar: { presente: "take", pasado: "took", participio: "taken" },
    traer: { presente: "bring", pasado: "brought", participio: "brought" },
    usar: { presente: "wear", pasado: "wore", participio: "worn" },
    vender: { presente: "sell", pasado: "sold", participio: "sold" },
    venir: { presente: "come", pasado: "came", participio: "come" },
    ver: { presente: "see", pasado: "saw", participio: "seen" },
    volar: { presente: "fly", pasado: "flew", participio: "flown" },
};

function conjugar() {
    const verbo = document.getElementById('verbo').value.toLowerCase().trim();
    const resultadoDiv = document.getElementById('resultado');
    const verboData = verbos[verbo];

    if (verboData) {
        resultadoDiv.innerHTML = `
            <p><strong>Presente:</strong> ${verboData.presente}</p>
            <p><strong>Pasado:</strong> ${verboData.pasado}</p>
            <p><strong>Participio:</strong> ${verboData.participio}</p>
        `;
    } else {
        resultadoDiv.innerHTML = `<p style="color: red;">El verbo "${verbo}" no está en nuestra base de datos.</p>`;
    }
}
