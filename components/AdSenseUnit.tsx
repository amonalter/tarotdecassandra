import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

interface AdSenseUnitProps {
  adSlot: string; // O ID do seu bloco de anúncios
  adFormat?: string;
  adLayoutKey?: string;
  style?: React.CSSProperties;
}

const AdSenseUnit: React.FC<AdSenseUnitProps> = ({
  adSlot,
  adFormat = 'auto',
  adLayoutKey = '',
  style = { display: 'block' }
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  // Você precisará substituir 'ca-pub-XXXXXXXXXXXXXXXX' pelo seu ID de editor real
  const adClientId = 'ca-pub-XXXXXXXXXXXXXXXX';

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        data-ad-layout-key={adLayoutKey}
      ></ins>
    </div>
  );
};

export default AdSenseUnit;
