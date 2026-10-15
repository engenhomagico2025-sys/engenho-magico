/* ==========================================================================
   ENGENHO MÁGICO - CONTROLE DO DOSSIÊ DO PROJETO (PROJETO.JS)
   Renderização dinâmica de lâminas (01 a 05) e textos Ipsis Litteris
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('.projeto-single-page')) return;

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'mago-das-letras';

    // Lista padrão de entregas e públicos para os projetos que possuem esses tópicos
    const entregasPadrao = [
        "Conceito",
        "Storytelling",
        "Game design",
        "Projeto da experiência",
        "Cenografia e artefatos",
        "Tecnologia",
        "Implantação",
        "Treinamento operacional"
    ];

    const servePadrao = [
        "Escolas e Instituições",
        "Famílias",
        "Parques e Resorts",
        "Empresas ou Eventos"
    ];

    const detalhesPadrao = "Espaço reservado para textos adicionais, descrições detalhadas ou resultados alcançados com esta experiência.";

    const projectsData = {
        'mago-das-letras': {
            title: "O Mago das Letras",
            pontoPartida: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "In hac habitasse platea dictumst. Curabitur vel metus dictum, faucibus eros non, iaculis erat. Aliquam non semper nisl. Aenean ullamcorper congue odio vitae commodo. Nam sed consequat nisi. Proin varius ex at pretium accumsan.",
                "Aliquam erat volutpat. Fusce ullamcorper interdum elit, eget posuere metus vehicula id. Proin vulputate sem vel congue pretium. Nulla facilisi. Sed non lorem eget est imperdiet placerat."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_mago-das-letras/capa.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_mago-das-letras/pagina-4.webp"
            ]
        },

        'elara': {
            title: "O Paradeiro de Elara",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/capa.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_paradeiroelaraapresentao/pagina-4.webp"
            ]
        },

        'arena-viva': {
            title: "Arena Viva",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            // Arena Viva não possui as seções finais nos dados originais
            pages: [
                "src/assets/portifolio/projetos/projeto_arena-imersiva/capa.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_arena-imersiva/pagina-4.webp"
            ]
        },

        'caixa-magica': {
            title: "Caixa Mágica",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            // Caixa Mágica não possui as seções finais nos dados originais
            pages: [
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/capa.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_engenho-mgico-aulas-imersivas-gamificadas/pagina-4.webp"
            ]
        },

        'labirinto-asteria': {
            title: "Labirinto de Astéria",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/capa.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-labirintoo-de-astria/pagina-4.webp"
            ]
        },

        'caminhantes-cosmos': {
            title: "Caminhantes do Cosmos",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/capa.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_projeto-the-survival-challenger/pagina-4.webp"
            ]
        },

        'capitao-jk': {
            title: "Capitão JK",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/capa.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_catlogo-capito-jk/pagina-4.webp"
            ]
        },

        'quatro-elementos': {
            title: "Jornada dos Quatro Elementos",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/capa.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_jornada-magica-dos-4-elementos/pagina-4.webp"
            ]
        },

        'desafio-na-praia': {
            title: "Desafio Na Praia 4 Elementos",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/capa.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_desafio-na-praia-4-elementos/pagina-4.webp"
            ]
        },

        'escola-parque': {
            title: "Escola Parque Na Praia",
            pontoPartida: [
                "Este projeto foi desenvolvido com foco em proporcionar uma experiência imersiva e engajadora.",
                "Utilizamos metodologias ativas e gamificação para criar uma narrativa única e memorável."
            ],
            universoCriado: "Detalhes sobre a narrativa e a atmosfera desenvolvidas. Como transformamos o espaço físico ou o tema em um mundo envolvente.",
            participanteFaz: "Quais decisões, desafios, pistas ou interações acontecem durante a jornada. O papel ativo de quem vive a experiência.",
            entregamos: entregasPadrao,
            paraQuemServe: servePadrao,
            detalhesProjeto: detalhesPadrao,
            pages: [
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/capa.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-1.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-2.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-3.webp",
                "src/assets/portifolio/projetos/projeto_escola-parque-na-praia/pagina-4.webp"
            ]
        }
    };

    const projectData = projectsData[projectId] || projectsData['mago-das-letras'];

    // Elementos DOM
    const elements = {
        title: document.getElementById('projetoTitle'),
        dossierBox: document.getElementById('dossierTextBox'),
        image: document.getElementById('projetoImage'),
        indicator: document.getElementById('pageIndicator'),
        btnPrev: document.getElementById('btnPrev'),
        btnNext: document.getElementById('btnNext')
    };

    let currentPageIndex = 0;
    const totalPages = projectData.pages.length;

    // Renderizador Dinâmico dos Textos Ipsis Litteris
    function renderDossierContent() {
        if (!elements.dossierBox) return;

        let html = '';

        // 1. O ponto de partida
        if (projectData.pontoPartida) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O ponto de partida</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  ${projectData.pontoPartida.map(p => `<p>${p}</p>`).join('')}
                </div>
              </article>
            `;
        }

        // 2. O universo criado
        if (projectData.universoCriado) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O universo criado</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <p>${projectData.universoCriado}</p>
                </div>
              </article>
            `;
        }

        // 3. O que o participante faz
        if (projectData.participanteFaz) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O que o participante faz</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <p>${projectData.participanteFaz}</p>
                </div>
              </article>
            `;
        }

        // 4. O que entregamos (renderiza apenas se existir no projeto)
        if (projectData.entregamos && projectData.entregamos.length > 0) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">O que entregamos</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <ul class="dossier-list">
                    ${projectData.entregamos.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `;
        }

        // 5. Para quem serve (renderiza apenas se existir no projeto)
        if (projectData.paraQuemServe && projectData.paraQuemServe.length > 0) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">Para quem serve</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <ul class="dossier-list">
                    ${projectData.paraQuemServe.map(item => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
              </article>
            `;
        }

        // 6. Detalhes do Projeto (renderiza apenas se existir no projeto)
        if (projectData.detalhesProjeto) {
            html += `
              <article class="dossier-section">
                <h2 class="dossier-heading">Detalhes do Projeto</h2>
                <div class="dossier-divider"></div>
                <div class="dossier-content-body">
                  <p>${projectData.detalhesProjeto}</p>
                </div>
              </article>
            `;
        }

        elements.dossierBox.innerHTML = html;
        elements.dossierBox.scrollTop = 0; // Reseta a barra de rolagem sempre para o início
    }

    function init() {
        if (elements.title) {
            elements.title.textContent = projectData.title;
            document.title = `${projectData.title} | Engenho Mágico`;
        }

        renderDossierContent();
        updateGallery(true);
    }

    function updateGallery(isInitial = false) {
        if (!elements.image) return;

        if (!isInitial) {
            elements.image.classList.add('fade-out');
            setTimeout(applyUpdate, 180);
        } else {
            applyUpdate();
        }
    }

    function applyUpdate() {
        elements.image.src = projectData.pages[currentPageIndex];

        const currentFormatted = String(currentPageIndex + 1).padStart(2, '0');
        const totalFormatted = String(totalPages).padStart(2, '0');
        if (elements.indicator) {
            elements.indicator.textContent = `${currentFormatted} / ${totalFormatted}`;
        }

        if (elements.btnPrev) elements.btnPrev.disabled = currentPageIndex === 0;
        if (elements.btnNext) elements.btnNext.disabled = currentPageIndex === totalPages - 1;

        elements.image.classList.remove('fade-out');
    }

    if (elements.btnPrev) {
        elements.btnPrev.addEventListener('click', () => {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                updateGallery();
            }
        });
    }

    if (elements.btnNext) {
        elements.btnNext.addEventListener('click', () => {
            if (currentPageIndex < totalPages - 1) {
                currentPageIndex++;
                updateGallery();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && elements.btnPrev && !elements.btnPrev.disabled) {
            currentPageIndex--;
            updateGallery();
        } else if (e.key === 'ArrowRight' && elements.btnNext && !elements.btnNext.disabled) {
            currentPageIndex++;
            updateGallery();
        }
    });

    init();
});