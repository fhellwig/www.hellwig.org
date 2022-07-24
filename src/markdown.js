import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';

const BASE = 'https://raw.githubusercontent.com/fhellwig/publications/master/';
const DEFAULT = 'README.md';

function transformImageUri(src) {
  return new URL(src, BASE).href;
}

function transformLinkUri(path) {
  if (path.endsWith('.md')) {
    const doc = path.substring(path.lastIndexOf('/') + 1);
    const nocache = new Date().getTime();
    return `./pubs?doc=${doc}?nocache=${nocache}`;
  } else if (path.startsWith('http')) {
    return path;
  } else {
    return BASE + path;
  }
}

export function Markdown() {
  let location = useLocation();

  const [doc, setDoc] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    let s = location.search;
    if (s && s.startsWith('?doc=')) {
      const doc = s.substring(s.indexOf('=') + 1);
      setDoc(doc);
    } else {
      setDoc(DEFAULT);
    }
  }, [location]);

  useEffect(() => {
    async function getText() {
      if (doc) {
        const url = BASE + doc;
        const res = await fetch(url);
        const text = await res.text();
        setText(text);
      } else {
        setText(null);
      }
    }
    getText();
  }, [doc]);

  return text ? (
    <ReactMarkdown
      transformLinkUri={transformLinkUri}
      transformImageUri={transformImageUri}
    >
      {text}
    </ReactMarkdown>
  ) : (
    <p>Loading...</p>
  );
}
