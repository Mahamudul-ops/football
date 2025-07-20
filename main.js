const newsFeed = document.getElementById('news-feed');

const fakeNews = [
  "🌍 UN announces global summit on climate tech in 2025.",
  "⚽ Messi scores last-minute free kick to seal Argentina's win.",
  "📈 Dow Jones hits record high despite inflation worries.",
  "🎾 Naomi Osaka returns with a powerful win in Tokyo Open.",
  "🛰️ NASA discovers water vapor on Jupiter’s moon Europa.",
  "🏀 LeBron announces retirement after 22 legendary seasons.",
  "📰 Breaking: Massive wildfire spreads across Southern Europe.",
  "🏏 Babar Azam leads Pakistan to thrilling win against India.",
  "🎥 Netflix announces a docuseries on Ronaldo & Messi rivalry.",
  "🚀 SpaceX launches another batch of Starlink satellites."
];

let index = 0;

function pushNews() {
  if (index >= fakeNews.length) index = 0;

  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');
  newsItem.textContent = `[${new Date().toLocaleTimeString()}] ${fakeNews[index]}`;
  
  newsFeed.prepend(newsItem); // newest on top
  index++;

  // Optional: keep the feed short
  if (newsFeed.children.length > 20) {
    newsFeed.removeChild(newsFeed.lastChild);
  }
}

setInterval(pushNews, 5000); // every 5 sec new news
