const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '394fad13d50290e0ebe100adb30b75ec',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;