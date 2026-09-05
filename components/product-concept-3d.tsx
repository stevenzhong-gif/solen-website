"use client";

import { useEffect, useRef, useState } from "react";

export function SmartDockConcept3D() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "ready" | "fallback">("idle");

  useEffect(() => {
    const host = hostRef.current;
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const probe = document.createElement("canvas");
    if (!probe.getContext("webgl2") && !probe.getContext("webgl")) {
      return;
    }

    let disposed = false;
    let cleanupScene: (() => void) | undefined;
    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting || cleanupScene || disposed) return;
      observer.disconnect();

      try {
        const [THREE, geometryModule] = await Promise.all([
          import("three"),
          import("three/examples/jsm/geometries/RoundedBoxGeometry.js"),
        ]);
        if (disposed) return;

        const { RoundedBoxGeometry } = geometryModule;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.02;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.domElement.tabIndex = -1;
        renderer.domElement.setAttribute("aria-hidden", "true");
        host.append(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
        camera.position.set(5.9, 3.45, 8.9);

        const product = new THREE.Group();
        scene.add(product);

        const baseMaterial = new THREE.MeshPhysicalMaterial({ color: 0xb2aba1, metalness: 0.72, roughness: 0.31, clearcoat: 0.16, clearcoatRoughness: 0.58 });
        const topMaterial = new THREE.MeshPhysicalMaterial({ color: 0xc8c1b7, metalness: 0.62, roughness: 0.25, clearcoat: 0.2, clearcoatRoughness: 0.5 });
        const seamMaterial = new THREE.MeshStandardMaterial({ color: 0x777168, roughness: 0.88 });
        const baseGeometry = new RoundedBoxGeometry(5.25, 1.02, 3.35, 7, 0.3);
        const topGeometry = new RoundedBoxGeometry(5.08, 0.22, 3.18, 7, 0.27);
        const seamGeometry = new RoundedBoxGeometry(5.12, 0.035, 3.22, 5, 0.27);
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        const top = new THREE.Mesh(topGeometry, topMaterial);
        const seam = new THREE.Mesh(seamGeometry, seamMaterial);
        base.position.y = 0.15;
        top.position.y = 0.78;
        seam.position.y = 0.64;
        base.castShadow = true;
        base.receiveShadow = true;
        top.castShadow = true;
        product.add(base, top, seam);

        const groundGeometry = new THREE.PlaneGeometry(28, 28);
        const groundMaterial = new THREE.ShadowMaterial({ color: 0x5e5850, opacity: 0.19 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.48;
        ground.receiveShadow = true;
        scene.add(ground);

        scene.add(new THREE.HemisphereLight(0xfff8ea, 0x8d877f, 2.35));
        const key = new THREE.DirectionalLight(0xfff4df, 4.15);
        key.position.set(-4, 8, 5);
        key.castShadow = true;
        key.shadow.mapSize.set(1024, 1024);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xd6e0e5, 2.25);
        rim.position.set(5, 3, -4);
        scene.add(rim);

        let frame = 0;
        let targetDrag = 0;
        let drag = 0;
        let pointerDown = false;
        let lastPointerX = 0;
        let visible = true;

        const resize = () => {
          const { width, height } = host.getBoundingClientRect();
          renderer.setSize(width, height, false);
          camera.aspect = width / Math.max(height, 1);
          camera.updateProjectionMatrix();
        };

        const render = () => {
          if (disposed || !visible) return;
          const story = host.closest(".product-story");
          const rect = story?.getBoundingClientRect();
          const distance = Math.max(1, (rect?.height ?? window.innerHeight) - window.innerHeight);
          const progress = Math.max(0, Math.min(1, -(rect?.top ?? 0) / distance));
          drag += (targetDrag - drag) * 0.075;
          product.rotation.y = -0.48 + progress * 0.86 + drag;
          product.rotation.x = 0.025 + Math.sin(progress * Math.PI) * 0.045;
          product.position.y = Math.sin(progress * Math.PI) * 0.12;
          camera.position.z = 8.9 - progress * 0.35;
          camera.lookAt(0, 0.12, 0);
          renderer.render(scene, camera);
          frame = window.requestAnimationFrame(render);
        };

        const visibilityObserver = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          window.cancelAnimationFrame(frame);
          if (visible) frame = window.requestAnimationFrame(render);
        });
        visibilityObserver.observe(host);

        const onPointerDown = (event: PointerEvent) => {
          pointerDown = true;
          lastPointerX = event.clientX;
          renderer.domElement.setPointerCapture(event.pointerId);
        };
        const onPointerMove = (event: PointerEvent) => {
          if (!pointerDown) return;
          targetDrag += (event.clientX - lastPointerX) * 0.0035;
          lastPointerX = event.clientX;
        };
        const onPointerUp = () => { pointerDown = false; };
        const onContextLost = () => setStatus("fallback");
        renderer.domElement.addEventListener("pointerdown", onPointerDown);
        renderer.domElement.addEventListener("pointermove", onPointerMove);
        renderer.domElement.addEventListener("pointerup", onPointerUp);
        renderer.domElement.addEventListener("pointercancel", onPointerUp);
        renderer.domElement.addEventListener("webglcontextlost", onContextLost);

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(host);
        resize();
        setStatus("ready");
        render();

        cleanupScene = () => {
          visibilityObserver.disconnect();
          resizeObserver.disconnect();
          window.cancelAnimationFrame(frame);
          renderer.domElement.removeEventListener("pointerdown", onPointerDown);
          renderer.domElement.removeEventListener("pointermove", onPointerMove);
          renderer.domElement.removeEventListener("pointerup", onPointerUp);
          renderer.domElement.removeEventListener("pointercancel", onPointerUp);
          renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
          baseGeometry.dispose();
          topGeometry.dispose();
          seamGeometry.dispose();
          groundGeometry.dispose();
          baseMaterial.dispose();
          topMaterial.dispose();
          seamMaterial.dispose();
          groundMaterial.dispose();
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
        };
      } catch {
        setStatus("fallback");
      }
    }, { rootMargin: "180px" });

    observer.observe(host);
    return () => {
      disposed = true;
      observer.disconnect();
      cleanupScene?.();
    };
  }, []);

  return <div ref={hostRef} className={`product-concept-3d product-concept-3d--${status}`} aria-hidden="true" />;
}
