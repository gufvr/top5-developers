function info() {
  let txt = window.document.getElementById("txt");
  let res = window.document.getElementById("res");
  let dados = window.document.getElementById("dados");

  if (txt.value.length == 0) {
    alert("[ERRO] Dados invalidos");
  } else {
    var img = window.document.createElement("img");
    img.setAttribute("id", "foto");
    if (txt.value == "Alan Turing") {
      //Alan Turing case

      img.setAttribute("src", "_imgB/alan.png");
      window.document.body.style.background =
        "url(_imgB/alanturing.jpg) no-repeat center center fixed";
      window.document.body.style.backgroundSize = "cover";

      res.innerHTML = `<font color="yellow" text align="center"><strong>1° Lugar</strong></font><BR/>`;

      dados.innerHTML = `Alan Mathison Turing foi um cientista da computação, matemático, criptógrafo, e lógico. Ele tem sido chamado de pai da computação teórica e inteligência
				artificial, e é posição líder nesta seleção, dos 5 maiores programadores da história. Durante a Segunda Guerra Mundial, ele desenvolveu várias técnicas para quebrar
				as cifras alemãs. Turing construiu uma máquina eletromecânica que poderia encontrar configurações da máquina Enigma. Ele formalizou os conceitos de computação e algoritmo com
				a máquina Turing, uma máquina que pode ser adaptada para simular a lógica de quaisquer algoritmos. Ele foi homenageado com Smith’s Prize, Officer of the Order do Império Britânico
				e Fellow of Royal Society. Desde 1966, o Prêmio Turing tem sido dado anualmente pela Association for Computing Machinery por contribuições para comunidade da computação. Em 8 de junho de 1954, um criado de Turing encontrou-o morto,
				o que tinha ocorrido no dia anterior, em sua residência em Wilmslow, um exame post-mortem estabeleceu que a causa da morte foi envenenamento por cianeto. Quando seu corpo foi descoberto, uma maçã estava meio comida ao lado de sua cama,
				e embora a maçã não tenha sido testada quanto ao cianeto, especula-se que este foi o meio pelo qual uma dose fatal foi ingerida. Um inquérito determinou que ele tinha cometido suicídio, tendo sido então cremado no crematório de Woking em
				12 de junho de 1954. Alan era homossexual, coisa que nos anos 50 era muito mal visto pela sociedade.`;
    } else if (txt.value == "Dennis Ritchie") {
      //Dennis Ritchie case
      img.setAttribute("src", "_imgB/dennis.png");
      window.document.body.style.background =
        "url(_imgB/dennisritchie.jpg) no-repeat center center fixed";
      window.document.body.style.backgroundSize = "cover";

      res.innerHTML = `<font color="silver" text align="center"><strong>2° Lugar</strong></font><BR/>`;

      dados.innerHTML = `Dennis MacAlistair Ritchie foi um cientista da computação revolucionário que desempenhou um papel crucial em desenvolver a linguagem de programação C e sistema operacional Unix.
				Ele foi contratado por Lucent Technologies & Bell Labs e defendeu sua tese PhD em Program Structure and Computational Complexity. No entanto, ele nunca oficialmente recebeu seu diploma PhD.
				Dennis desenvolveu a linguagem de programação C, na qual muitas das atuais linguagens de máquinas usadas e tecnologias são baseadas, a incluir o PS4/Xbox. Ritchie criou um sistema operacional multiuser,
				chamado Unix. Ele é também conhecido por desenvolver ALTRAN, B, BCPL, e Multics. Ritchie foi homenageado com Prêmio Turing, Medalha Hamming de IEEE, Prêmio Computer Pioneer, Computer History Museum
				Fellow e Prêmio Harold Pender.`;
    } else if (txt.value == "Linus Torvalds") {
      //Linus Torvalds case

      img.setAttribute("src", "_imgB/linus.png");
      window.document.body.style.background =
        "url(_imgB/linustorvalds.jpg) no-repeat center center fixed";
      window.document.body.style.backgroundSize = "cover";

      res.innerHTML = `<font color="peru" text align="center"><strong>3° Lugar</strong></font><BR/>`;

      dados.innerHTML = `Linus Benedict Torvalds é um engenheiro de software, nascido na Finlândia e naturalizado estado-unidense em 2010, é um engenheiro de software, coordenador de projeto e hacker, e é o homem por trás do sistema operacional Linux. Linus escreveu o código kernel Linux
			e o sistema de controle de revisão Git. Muitos populares OS (Operating System, em português, Sistema Operacional), incluindo Ubuntu, Fedora e Android são baseados em Linux. Torvalds detém a marca Linux e monitora o uso da mesma. Linus foi homenageado com
			o Prêmio Millennium Technology, junto com Shinya Yamanaka por criar um sistema operacional de código aberto. E também recebeu um Prêmio EFF Pioneer, Medalha Lovelace da Sociedade Britânica de Computação,
			e Prêmio Vollum de Reed College.`;
    } else if (txt.value == "Bjarne Stroustrup") {
      //Bjarne Stroustrup case
      img.setAttribute("src", "_imgB/bjarne.png");
      window.document.body.style.background =
        "url(_imgB/bjarnestroutrup.jpg) no-repeat center center fixed";
      window.document.body.style.backgroundSize = "cover";

      res.innerHTML = `<font color="SteelBlue" text align="center"><strong>4° Lugar</strong></font><BR/>`;

      dados.innerHTML = `Bjarne é um cientista da computação, professor de pesquisa, e trabalha em Morgan Stanley. Ele foi um chefe de departamento de pesquisa de programação
			de grande escala, de Bell Labs. Bjarne foi premiado com William Procter Prize por Realização Científica, Prêmio Grace Murray Hopper, e foi feito um par do Museu de
			História da Computação por sua invenção C++. Stroustrup, nas suas próprias palavras, "inventou a C++, escreveu as suas definições iniciais e produziu a sua primeira implementação,
			(…) escolheu e formulou os critérios de projeção da linguagem C++, desenhou todas as suas facilidades principais e foi responsável pelo processo de propostas de extensão no comité de padrões de C++".`;
    } else if (txt.value == "Tim Berners-Lee") {
      //Tim Berners-Lee case
      img.setAttribute("src", "_imgB/tim.png");
      window.document.body.style.background =
        "url(_imgB/timlee.jpg) no-repeat center center fixed";
      window.document.body.style.backgroundSize = "cover";

      res.innerHTML = `<font color="SteelBlue" text align="center"><strong>5° Lugar</strong></font><BR/>`;

      dados.innerHTML = `Tim Berners-Lee é um cientista da computação, mais conhecido como inventor do World Wide Web. Ele é o diretor de W3C, Web Science Research Initiative
			e um pesquisador sênior e titular da Founders Chair, MIT. Tim foi nomeado cavaleiro pela rainha Elizabeth II por seu excelente trabalho, homenageado com Software System
			Award, Pride of Britain, e Inovador jovem do ano de 1995.  Em abril de 2009, foi eleito como membro da Academia Nacional de Ciências dos Estados Unidos, sediada em Washington, D.C.
			e em 2011, foi nomeado como um membro do conselho de administração da Fundação Ford. Em 2017  Lee também foi agraciado pela Association for Computing Machinery (ACM) com o Prêmio Turing de 2016,
			considerado o "Nobel da Computação".`;
    } else if (txt.value == "Menções Honrosas") {
      //Menções Honrosas case
      img.setAttribute("src", "_imgB/mencao.png");
      window.document.body.style.background =
        "url(_imgB/mencaowpp.jpg) no-repeat center center fixed";
      window.document.body.style.backgroundSize = "cover";

      res.innerHTML = `<font color="gray" text align="center"><strong></strong></font><BR/>`;

      dados.innerHTML = `<font color="Aquamarine"><strong>Ken Thompson:</strong></br> <font color="white">Ken é conhecido pela concepção e aplicação do sistema operacional Unix.</br></br> <font color="Aquamarine"><strong>Brian Kernighan:</strong></br> <font color="white">Brian é conhecido por ser o co-autor do primeiro livro sobre a linguagem de programação C, juntamente com Dennis Ritchie.</br></br> <font color="Aquamarine"><Strong>Bill Gates:</strong></br> <font color="white">Bill é o programador mais rico do mundo cujo o software é o mais utilizado pelo mundo inteiro.</br></br> <font color="Aquamarine"><strong>John Backus:</strong></br> <font color="white">John foi conhecido por criar a primeira linguagem de programação de alto nível, o Fortran, a notação BNF e o conceito de programação em nível de funções.</br></br> <font color="Aquamarine"><strong>Grace Hopper</strong></br> <font color="white">Grace foi a primeira mulher do mundo que teve seu nome em Distinguished Fellow da Sociedade Britânica da Computação. Foi também criadora da linguagem de programação de alto nível Flow-Matic, base para a criação do COBOL.`;
    } else {
      //erro case
      img.setAttribute("src", "_imgB/erro404.png");
      window.document.body.style.background =
        "url(_imgB/matrixerro.jpg) no-repeat center center fixed";
      window.document.body.style.backgroundSize = "cover";

      res.innerHTML = `<font color="#FFD700"><strong>ERROR 404 Not Found</STRONG></font><BR/>`;

      dados.innerHTML = `O programador que você escolheu não está na lista`;
      txt.value = "Inexistente";
    }
    res.style.textAlign = "center";
    res.innerHTML += `Você escolheu:<br>`;
    res.innerHTML += `<font color="#FFD700"><strong>${txt.value}</strong>`;
    res.appendChild(img);
  }
}
