function Video() {
  const videoUrl = "https://www.youtube.com";

  return (
    <>
      <h1>Video</h1>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
      ></iframe>
      '
    </>
  );
}

export default Video;
