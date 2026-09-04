import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export function initCharacterScroll(
  charGroup: THREE.Group,
  camera: THREE.PerspectiveCamera
) {
  // Kill any existing triggers to avoid duplicates
  ScrollTrigger.getAll().forEach((t) => t.kill());

  const isDesktop = window.innerWidth > 900;
  if (!isDesktop) {
    // For mobile, keep character centered and slightly scaled
    charGroup.position.set(0, -0.4, -0.5);
    return () => {};
  }

  // Initial state for Hero
  charGroup.position.set(1.15, -0.2, 0);
  charGroup.rotation.set(0, -0.2, 0);
  camera.position.set(0, 0.2, 4.2);

  // Section 1 -> Section 2: Hero to About (character moves to the left)
  const tlAbout = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top bottom',
      end: 'center center',
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  tlAbout.to(charGroup.position, {
    x: -1.35,
    y: 0.1,
    z: 0.4,
    ease: 'power2.out',
  }, 0);
  tlAbout.to(charGroup.rotation, {
    y: 0.55,
    ease: 'power2.out',
  }, 0);

  // Section 2 -> Section 3: About to Experience (character moves to the right)
  const tlExp = gsap.timeline({
    scrollTrigger: {
      trigger: '#experience',
      start: 'top bottom',
      end: 'center center',
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  tlExp.to(charGroup.position, {
    x: 1.35,
    y: -0.15,
    z: 0.2,
    ease: 'power2.out',
  }, 0);
  tlExp.to(charGroup.rotation, {
    y: -0.5,
    ease: 'power2.out',
  }, 0);

  // Section 3 -> Section 4: Experience to Tech Stack (character moves back-center)
  const tlTech = gsap.timeline({
    scrollTrigger: {
      trigger: '#tech-stack',
      start: 'top bottom',
      end: 'center center',
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  tlTech.to(charGroup.position, {
    x: 0,
    y: 0.4,
    z: -1.2,
    ease: 'power2.out',
  }, 0);
  tlTech.to(charGroup.rotation, {
    y: 0,
    ease: 'power2.out',
  }, 0);

  // Section 4 -> Section 5: Tech Stack to Projects (character moves to the left)
  const tlProjects = gsap.timeline({
    scrollTrigger: {
      trigger: '#projects',
      start: 'top bottom',
      end: 'center center',
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  tlProjects.to(charGroup.position, {
    x: -1.45,
    y: -0.2,
    z: 0.3,
    ease: 'power2.out',
  }, 0);
  tlProjects.to(charGroup.rotation, {
    y: 0.45,
    ease: 'power2.out',
  }, 0);

  // Section 5 -> Section 6: Projects to Contact (character zooms into center close-up)
  const tlContact = gsap.timeline({
    scrollTrigger: {
      trigger: '#contact',
      start: 'top bottom',
      end: 'center center',
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  tlContact.to(charGroup.position, {
    x: 0,
    y: -0.2,
    z: 1.1,
    ease: 'power2.out',
  }, 0);
  tlContact.to(charGroup.rotation, {
    y: 0,
    ease: 'power2.out',
  }, 0);

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}
