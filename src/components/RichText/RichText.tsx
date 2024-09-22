import { FC } from 'react';
import { LINK_REGEX } from '../../constants/misc';

interface IRichText {
  children: React.ReactNode;
}

const RichText: FC<IRichText> = ({ children }) => {
  const parseText = () => {
    const parts = [];

    let lastIndex = 0;
    let match;

    const input = children?.toString() as string;

    while ((match = LINK_REGEX.exec(input)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={parts.length}>{input.slice(lastIndex, match.index)}</span>
        );
      }

      const [_, linkText, url] = match;
      parts.push(
        <a
          key={parts.length}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      );

      lastIndex = LINK_REGEX.lastIndex;
    }

    if (lastIndex < input.length) {
      parts.push(<p key={parts.length}>{input.slice(lastIndex)}</p>);
    }

    return parts;
  };

  return parseText();
};

export default RichText;
