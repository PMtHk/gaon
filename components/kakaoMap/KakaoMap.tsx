"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5577643, 126.6728851), // 지도의 중심좌표
          level: 5, // 지도의 확대 레벨
        };
        let map = new window.kakao.maps.Map(mapContainer, mapOption);

        let mapTypeControl = new window.kakao.maps.MapTypeControl();
        let zoomControl = new window.kakao.maps.ZoomControl();
        let markerPosition = new window.kakao.maps.LatLng(
          37.5577643,
          126.6728851
        );

        map.addControl(
          mapTypeControl,
          window.kakao.maps.ControlPosition.TOPRIGHT
        );
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        let marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        let customOverlayContent = `
          <div class="p-2 px-4 bg-neutral-100 relative drop-shadow-2xl rounded-lg hover:-translate-y-1 transition-transform">
            <a href="https://map.kakao.com/?q=인천+서구+승학로+403" target="_blank">
              <span class="text-base font-semibold">인천광역시 서구 승학로 403</span>
            </a>
            <div class="absolute b-0 left-[44%] w-0 h-0 border-[14px] border-solid border-transparent border-t-neutral-100"></div>
          </div>
        `;

        let customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: customOverlayContent,
          yAnchor: 2.4,
        });

        customOverlay.setMap(map);
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return <div id="map" className="w-full h-full" />;
};

export default KakaoMap;
