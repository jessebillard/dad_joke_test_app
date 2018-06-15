const Adapter = {
    randomJoke: function randomJoke() {
        let baseUrl = "https://icanhazdadjoke.com/"
        options = {
            headers: {
                'User-Agent': "My Library: ()"
            }
        }
        fetch(baseUrl)
    },

    searchJoke: function searchJoke() {

    }
}