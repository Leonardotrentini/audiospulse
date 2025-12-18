
import React from 'react';

export const ICONS = {
  Play: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M8 5v14l11-7z" /></svg>
  ),
  Pause: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
  ),
  Forward15: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M18 11V7l-5 5 5 5v-4c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6h-2c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8zm-5.6 13h-2v-3.5h-.1l-1.1.8-.3-.9 1.5-1.1h1v4.7zm4.3-3.4c0 .4-.1.8-.2 1.1-.1.3-.3.6-.5.8-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3-.2-.2-.3-.5-.4-.8-.1-.3-.2-.7-.2-1.1v-1.3c0-.4.1-.8.2-1.1.1-.3.3-.6.5-.8.2-.2.5-.3.7-.3.3 0 .5.1.7.3.2.2.3.5.4.8.1.3.2.7.2 1.1v1.3zm-1.1-1.4c0-.3 0-.6-.1-.8s-.1-.3-.2-.3c-.1 0-.1.1-.2.3s-.1.5-.1.8v1.5c0 .3 0 .6.1.8s.1.3.2.3c.1 0 .1-.1.2-.3s.1-.5.1-.8v-1.5z"/></svg>
  ),
  Back15: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>
  ),
  Favorite: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
  ),
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
  ),
  Search: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
  ),
  User: (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
  )
};
