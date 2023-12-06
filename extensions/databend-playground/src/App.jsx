import React, { useState, useRef } from 'react';
import { get } from 'lodash';
import { Loading } from '@kubed/components';

export default function App() {
  const [loading, setLoading] = useState(true);

  const FRAME_URL =
    '/proxy/databend.playground/';

  const iframeRef = useRef();

  const onIframeLoad = () => {
    const iframeDom = get(iframeRef.current, 'contentWindow.document');
    if (iframeDom) {
        const sidebar = iframeDom.querySelector('#root > section > aside')
        if (sidebar) {
            sidebar.style.display = 'none';
        }

        const header = iframeDom.querySelector('#root > section > section > header')
        if (header) {
          header.style.display = 'none';
        }
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading className="page-loading" />}
      <iframe
        ref={iframeRef}
        src={FRAME_URL}
        width="100%"
        height="100%"
        style={{
          height: 'calc(100vh - 68px)',
          display: loading ? 'none' : 'block',
        }}
        onLoad={onIframeLoad}
      />
    </>
  );
}
