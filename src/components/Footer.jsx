import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, WhatsappIcon, EmailIcon } from "./SocialIcons";
import { cn } from "../utils/cn";
import "./Footer.css";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 90"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer footer-text-hover-svg", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#dddbff" />
              <stop offset="38%" stopColor="#8b86ff" />
              <stop offset="72%" stopColor="#443dff" />
              <stop offset="100%" stopColor="#2f27ce" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="22%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth="0"
        fontSize="76"
        fontWeight="900"
        fill="rgba(255,255,255,0.14)"
        className="font-[helvetica] text-7xl font-bold"
        style={{ opacity: 1 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        strokeWidth="0"
        fontSize="76"
        fontWeight="900"
        fill="rgba(255,255,255,0.88)"
        className="font-[helvetica] text-7xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        stroke="url(#textGradient)"
        strokeWidth="0.8"
        fontSize="76"
        fontWeight="900"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 footer-background-gradient"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #04031666 50%, #443dff33 100%)",
      }}
    />
  );
};

export default function Footer() {
  return (
    <footer className="studio-main-footer">
      {/* Ambient Radial Gradient Layer */}
      <FooterBackgroundGradient />

      <div className="studio-container footer-content-container">
        {/* Curated Pre-Footer Banner */}
        <div className="footer-pre-banner">
          <div className="pre-banner-left">
            <span className="pre-banner-tag">LET'S BUILD TOGETHER</span>
            <h2 className="pre-banner-headline">Ready to move your business forward?</h2>
            <p className="pre-banner-sub">Connect with our founders for architectural strategy and scoping.</p>
          </div>
          <div className="pre-banner-right">
            <Link to="/contact" className="pre-banner-btn">
              <span>Start a Project</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="footer-columns-grid">
          {/* Col 1: Studio Brand & Motto */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo">
              <span className="brand-dot-purple"></span>H.O.W.
            </Link>
            <div className="footer-brand-subtitle">DIGITAL PRODUCT &amp; SOFTWARE STUDIO</div>
            <p className="footer-brand-bio">
              We design and engineer bespoke web applications, interactive digital products, and performant software systems built to last.
            </p>
            <div className="footer-status-tag">
              <span className="live-dot"></span> Studio Active • Taking Q3/Q4 Projects
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-nav-col">
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links-list">
              <li><Link to="/work">Selected Work</Link></li>
              <li><Link to="/services">Services &amp; Capabilities</Link></li>
              <li><Link to="/about">Studio Philosophy</Link></li>
              <li><Link to="/team">Founders &amp; Team</Link></li>
              <li><Link to="/contact">Contact &amp; RFPs</Link></li>
            </ul>
          </div>

          {/* Col 3: Selected Work */}
          <div className="footer-nav-col">
            <div className="footer-heading">Selected Work</div>
            <ul className="footer-links-list">
              <li>
                <Link to="/work/furevercare" className="footer-project-link">
                  <span>FurEverCare</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/work/travel-smart" className="footer-project-link">
                  <span>Travel Smart</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <Link to="/work/picnic-games" className="footer-project-link">
                  <span>Picnic Games</span>
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Founder Lines */}
          <div className="footer-nav-col">
            <div className="footer-heading">Direct Channels</div>
            <div className="footer-founders-contacts">
              <a href="https://wa.me/923272707981" target="_blank" rel="noopener noreferrer" className="founder-chat-line">
                <span className="founder-chat-left">
                  <WhatsappIcon size={14} className="founder-wa-icon" />
                  <span className="chat-founder-name">Okasha Bukhari</span>
                </span>
                <span className="chat-founder-num">+92 327 2707981</span>
              </a>
              <a href="https://wa.me/923218336657" target="_blank" rel="noopener noreferrer" className="founder-chat-line">
                <span className="founder-chat-left">
                  <WhatsappIcon size={14} className="founder-wa-icon" />
                  <span className="chat-founder-name">Hashim Faraz</span>
                </span>
                <span className="chat-founder-num">+92 321 8336657</span>
              </a>
              <a href="https://wa.me/923132412644" target="_blank" rel="noopener noreferrer" className="founder-chat-line">
                <span className="founder-chat-left">
                  <WhatsappIcon size={14} className="founder-wa-icon" />
                  <span className="chat-founder-name">Waleed Ahmed</span>
                </span>
                <span className="chat-founder-num">+92 313 2412644</span>
              </a>
            </div>

            <div className="footer-social-tray">
              <a href="https://github.com/okashabukhari1" target="_blank" rel="noopener noreferrer" className="footer-soc-link" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-soc-link" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:contact@howstudio.dev" className="footer-soc-link" aria-label="Email Studio">
                <EmailIcon size={18} />
              </a>
              <a href="https://wa.me/923272707981" target="_blank" rel="noopener noreferrer" className="footer-soc-link footer-soc-link--wa" aria-label="WhatsApp">
                <WhatsappIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Large Prominent H.O.W. Text Hover Effect Section */}
        <div className="footer-text-hover-wrapper">
          <TextHoverEffect text="H.O.W" />
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-legal">
          <span>© H.O.W. Studio {new Date().getFullYear()}. All Rights Reserved.</span>
          <span className="footer-motto-text">PURPOSE OVER NOISE • WE BUILD WHAT MOVES BUSINESSES FORWARD</span>
        </div>
      </div>
    </footer>
  );
}
