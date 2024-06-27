
document.getElementById('send-button').addEventListener('click', () => {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = 'user-message';
        chatBox.appendChild(messageElement);
        
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Aquí puedes agregar la lógica para la respuesta del bot inteligente
        const botResponse = 'Estoy aquí para ayudarte con el acoso cibernético. ¿En qué puedo asistirte?';
        const botMessageElement = document.createElement('div');
        botMessageElement.textContent = botResponse;
        botMessageElement.className = 'bot-message';
        chatBox.appendChild(botMessageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
