import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SpotlightFrames.css';

/** A keyboard-accessible, expanding image rail for selected work. */
export default function SpotlightFrames({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) return null;

  const activate = (index) => setActiveIndex(index);
  const onKeyDown = (event, index) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const next = Math.max(0, Math.min(items.length - 1, index + (event.key === 'ArrowRight' ? 1 : -1)));
    activate(next);
    event.currentTarget.parentElement?.children[next]?.focus();
  };

  return (
    <div className="spotlight-frames" role="list" aria-label="Featured projects">
      {items.map((item, index) => {
        const active = index === Math.min(activeIndex, items.length - 1);
        return (
          <motion.div
            key={item.code || item.title || index}
            role="listitem"
            className={`spotlight-frame ${active ? 'is-active' : ''}`}
            animate={{ flex: active ? 5.2 : 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            onMouseEnter={() => activate(index)}
            onFocus={() => activate(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            onClick={() => !active && activate(index)}
            aria-label={`${item.title || 'Project'}${active ? ', selected' : ''}`}
          >
            <img src={item.src} alt="" className="spotlight-frame-image" draggable="false" />
            <span className="spotlight-frame-shade" />
            <span className="spotlight-frame-code">{item.code || `0${index + 1}`}</span>
            <span className="spotlight-frame-rail-title">{item.title}</span>
            {active && (
              <motion.span
                className="spotlight-frame-content"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.3 }}
              >
                <span className="spotlight-frame-category">{item.category}</span>
                <strong>{item.title}</strong>
                <small>{item.tagline}</small>
                <Link to={`/work/${item.projectKey}`} onClick={(event) => event.stopPropagation()}>View Project ↗</Link>
              </motion.span>
            )}
            {active && <span className="spotlight-selector" aria-hidden="true" />}
          </motion.div>
        );
      })}
    </div>
  );
}
