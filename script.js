document.addEventListener('DOMContentLoaded', function() {
  const videoContainer = document.getElementById('video-container');
  if (!videoContainer) return;

  videoContainer.addEventListener('click', function() {
    const videoId = 'abc123XYZ'; // এখানে তোমার ভিডিওর আইডি বসাও
    videoContainer.innerHTML = `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    `;
  });
});