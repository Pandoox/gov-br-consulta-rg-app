// ------------------------------
// USUÁRIOS CADASTRADOS MANUALMENTE
// ------------------------------
const usuarios = [
  {
    cpf: "12345678900",
    senha: "12345678900",
    imagens: [
      "https://i.ibb.co/CKCwxwD7/base-RGAPP1.png", // RG 1
      "https://i.ibb.co/TBBLCt8q/base-RGAPP2.png", // RG 2
      "https://i.ibb.co/VW6ZKCF3/base-RGAPP3.png"  // RG 3
    ]
  },
  {
    cpf: "11122233344",
    senha: "456",
    imagens: [
      "https://i.imgur.com/DDDDD.png",
      "https://i.imgur.com/EEEEE.png",
      "https://i.imgur.com/FFFFF.png"
    ]
  },
  {
    cpf: "02330595042",
    senha: "02330595042",
    imagens: [
      "https://i.ibb.co/MD4dvq79/Captura-de-tela-2025-12-12-160853.png",
      "https://i.ibb.co/B2DCg1mR/Captura-de-tela-2025-12-12-160902.png",
      "https://i.ibb.co/VW6ZKCF3/base-RGAPP3.png"
    ]
  },
    {
    cpf: "47898510879",
    senha: "47898510879",
    imagens: [
      "https://i.ibb.co/7J4q9s86/Captura-de-tela-2025-12-13-211140.png",
      "https://i.ibb.co/C55dznzS/Captura-de-tela-2025-12-13-211159.png",
      "https://i.ibb.co/Rk4nm9D0/Imagem-do-Whats-App-de-2025-12-13-s-21-13-07-777116d9.jpg"
    ]
  },
      {
    cpf: "48040252865",
    senha: "48040252865",
    imagens: [
      "https://i.ibb.co/HDCSZnyy/Captura-de-tela-2025-12-13-221517.png",
      "https://i.ibb.co/RkBCh9sJ/Captura-de-tela-2025-12-13-221534.png",
      "https://i.ibb.co/SpBvkqp/Imagem-do-Whats-App-de-2025-12-13-s-22-13-51-868f6b6b.jpg"
    ]
  },

        {
    cpf: "06275612339",
    senha: "06275612339",
    imagens: [
      "https://i.ibb.co/N2yzBgnd/Captura-de-tela-2025-12-14-130146.png",
      "https://i.ibb.co/SDsNph3M/Captura-de-tela-2025-12-14-130206.png",
      "https://i.ibb.co/qSWLXxG/1.jpg"
    ]
  }
];


// ------------------------------
// LOGIN — Agora usando CPF
// ------------------------------
function fazerLogin() {
  const cpfInput = document.getElementById("usuario").value;  // campo CPF
  const senhaInput = document.getElementById("senha").value;

  const user = usuarios.find(u => u.cpf === cpfInput && u.senha === senhaInput);

  if (!user) {
    alert("CPF ou senha incorretos.");
    return;
  }

  // Salva o usuário logado no localStorage
  localStorage.setItem("usuarioLogado", JSON.stringify(user));

  // Vai para a página do RG
  window.location.href = "index_rg.html";
}




