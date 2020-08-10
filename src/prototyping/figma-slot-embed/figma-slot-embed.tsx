import React, { useRef, useState, useEffect } from 'react';
import url from 'url';

type Props = {
  frameURL: string;
  frameHeight: number;
  frameWidth: number;
};

const convertFigmaUrl = (shareUrl: string) => {
  const { host } = url.parse(shareUrl, true);
  if (host !== 'www.figma.com') {
    throw new Error(
      `Provided url needs to be for figma.com, received "${shareUrl}"`,
    );
  }
  const src = url.format({
    protocol: 'https',
    hostname: host,
    pathname: '/embed',
    query: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      embed_host: 'share',
      url: shareUrl,
      allowfullscreen: false,
    },
  });
  return src;
}

const FigmaSlotEmbed: React.FC<Props> = ({
  frameURL,
  frameHeight,
  frameWidth,
}: Props) => {
  const wrapperRef = useRef();
  const landscapeDimentions = frameWidth > frameHeight;
  const [iframeHeight, setIframeHeight] = useState(
    landscapeDimentions
      ? `${frameHeight / frameWidth * 100}%`
      : null
  );

  useEffect(() => {
    const currentWrapper = wrapperRef.current;

    if (!landscapeDimentions && !iframeHeight && currentWrapper) {
      const wrapperWidth = currentWrapper.clientWidth;
      setIframeHeight(`${wrapperWidth / (frameWidth / frameHeight)}px`);
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="figma-slot-embed"
      style={{paddingBottom: `${iframeHeight}`}}
    >
      {iframeHeight && <iframe src={convertFigmaUrl(frameURL)} frameBorder="0" />}
    </div>
  );
};

export default FigmaSlotEmbed;
