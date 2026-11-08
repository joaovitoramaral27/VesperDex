addEventListener('DOMContentLoaded', () => {
    const pokemonCards = document.querySelectorAll('.pokemon-card');
    pokemonCards.forEach(card => {
        card.addEventListener('click', () => {
            const pokemonId = card.id;
            window.location.href = `Pages/Pokémons/${pokemonId}.html`;
        });
    });
});