"use client";

import { useEffect, useRef } from "react";
import styles from "./KakaoMap.module.css";

declare global {
  interface Window {
    kakao: any;
  }
}

type Props = {
  placeName: string;
};

export default function KakaoMap({ placeName }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    function initMap() {
      if (!mounted || !mapRef.current) return;

      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(37.5, 127.0),
        level: 4,
      });

      const places = new window.kakao.maps.services.Places();

      places.keywordSearch(placeName, (result: any[], status: string) => {
        if (!mounted) return;
        if (status !== window.kakao.maps.services.Status.OK) return;

        const { x, y, place_name } = result[0];
        const position = new window.kakao.maps.LatLng(Number(y), Number(x));

        map.setCenter(position);
        map.setLevel(4);

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          map,
          position,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:6px 10px;font-size:13px;font-weight:600;color:#000;">${place_name}</div>`,
          removable: false,
        });
        infowindow.open(map, marker);
      });
    }

    function loadSDK() {
      const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

      if (window.kakao?.maps?.services) {
        initMap();
        return;
      }

      if (window.kakao?.maps) {
        window.kakao.maps.load(initMap);
        return;
      }

      const existing = document.getElementById("kakao-map-sdk");
      if (existing) {
        existing.addEventListener("load", () => {
          window.kakao.maps.load(initMap);
        });
        return;
      }

      const script = document.createElement("script");
      script.id = "kakao-map-sdk";
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(initMap);
      };
      document.head.appendChild(script);
    }

    loadSDK();

    return () => {
      mounted = false;
    };
  }, [placeName]);

  return <div ref={mapRef} className={styles.map} />;
}