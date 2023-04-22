navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
      console.log(stream)
    console.log('Permissão do microfone concedida');

    // Criar um novo objeto de reconhecimento de fala
    const recognition = new window.webkitSpeechRecognition();

    // Configurar o objeto de reconhecimento de fala
    recognition.continuous = true; // Continuar reconhecendo enquanto o usuário fala
    recognition.interimResults = false; // Mostrar resultados parciais enquanto o usuário fala

    // Definir o idioma para reconhecimento
    recognition.lang = 'en-US'; // Inglês dos Estados Unidos

    // Adicionar um ouvinte para quando a transcrição for atualizada
    recognition.onresult = function(event) {
      console.log(event)
      // Obter a transcrição mais recente
      const transcript = event.results[event.results.length - 1][0].transcript;

      // Exibir a transcrição no console do navegador
      console.log('Transcrição:', transcript);

      // Comparar a transcrição com o texto do Duolingo
      const duolingoText = '...'; // Inserir o texto do Duolingo aqui
      if (transcript.toLowerCase() === duolingoText.toLowerCase()) {
        alert('Você pronunciou corretamente!');
      }
    };

    // Começar a ouvir o microfone
    recognition.start();
  })
  .catch(function(error) {
    console.error('Erro ao solicitar permissão do microfone:', error);
  });